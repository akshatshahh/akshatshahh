// Rewrites the open source section of README.md from the GitHub API.
// Runs daily from .github/workflows/update-readme.yml; safe to run locally too:
//   GITHUB_TOKEN=... node .github/scripts/update-open-source.mjs
import { readFileSync, writeFileSync } from "node:fs"

const USER = "akshatshahh"
const README = new URL("../../README.md", import.meta.url)
const START = "<!-- OPEN-SOURCE:START -->"
const END = "<!-- OPEN-SOURCE:END -->"
// Team and coursework repos, not upstream open source.
const EXCLUDED_OWNERS = new Set(["suthar-naresh", "devasy"])
// PRs a maintainer shipped through a release branch and closed instead of merging.
const SHIPPED_VIA_RELEASE = { "https://github.com/reticlehq/reticle/pull/1399": "v3.6.0" }
const SHOW_MERGED = 5
const SHOW_IN_REVIEW = 3

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": `${USER}-profile-readme`,
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
}

async function get(url) {
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

const q = encodeURIComponent(`is:pr author:${USER} -user:${USER}`)
const { items } = await get(`https://api.github.com/search/issues?q=${q}&per_page=100&sort=created&order=desc`)

const prs = []
for (const item of items) {
  const repo = item.repository_url.replace("https://api.github.com/repos/", "")
  if (EXCLUDED_OWNERS.has(repo.split("/")[0].toLowerCase())) continue
  const shipped = SHIPPED_VIA_RELEASE[item.html_url]
  const merged = Boolean(item.pull_request?.merged_at) || Boolean(shipped)
  if (!merged && item.state !== "open") continue
  prs.push({ repo, title: item.title, url: item.html_url, merged, date: item.pull_request?.merged_at ?? item.created_at })
}

const stars = new Map()
const repos = [...new Set(prs.map((p) => p.repo))]
for (let i = 0; i < repos.length; i += 6) {
  const query = encodeURIComponent(repos.slice(i, i + 6).map((r) => `repo:${r}`).join(" "))
  const res = await get(`https://api.github.com/search/repositories?q=${query}&per_page=10`)
  for (const r of res.items) stars.set(r.full_name.toLowerCase(), r.stargazers_count)
}
const starsOf = (repo) => stars.get(repo.toLowerCase()) ?? 0
const fmt = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : `${n}`)
const byStars = (a, b) => starsOf(b.repo) - starsOf(a.repo) || b.date.localeCompare(a.date)
const line = (p) => `- [${p.repo}](${p.url}) ★ ${fmt(starsOf(p.repo))}: ${p.title}`

const merged = prs.filter((p) => p.merged).sort(byStars)
const open = prs.filter((p) => !p.merged).sort(byStars)
const projects = new Set(prs.map((p) => p.repo.toLowerCase())).size
const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "America/Los_Angeles" })

const section = [
  START,
  "**Merged upstream** (most-starred first)",
  ...merged.slice(0, SHOW_MERGED).map(line),
  "",
  ...(open.length ? ["**In review**", ...open.slice(0, SHOW_IN_REVIEW).map(line), ""] : []),
  `<sub>${merged.length} pull requests shipped across ${projects} projects · updated ${today} · [All contributions →](https://akshatshah.netlify.app/open-source)</sub>`,
  END,
].join("\n")

const readme = readFileSync(README, "utf8")
const at = readme.indexOf(START)
const until = readme.indexOf(END)
if (at === -1 || until === -1) throw new Error("open source markers not found in README.md")
const next = readme.slice(0, at) + section + readme.slice(until + END.length)
writeFileSync(README, next)
console.log(next === readme ? "README already up to date" : `Updated: ${merged.length} merged, ${open.length} in review`)
