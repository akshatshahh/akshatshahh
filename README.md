<h1 align="center">Hello, I'm Akshat Shah</h1>

<p align="center">
  <b>Software Engineer · AI Engineer · Backend & Full Stack</b><br/>
  Software Engineer at USC IMSC · MS Computer Science, University of Southern California (2026) · ex-Microsoft<br/>
  📍 Los Angeles, CA · Open to relocating anywhere in the US
</p>

<p align="center">
  <a href="https://akshatshah.tech"><img src="https://img.shields.io/badge/Portfolio-0D9488?style=for-the-badge&logo=netlify&logoColor=white" alt="Portfolio" /></a>
  <a href="https://akshatshah.tech/resume"><img src="https://img.shields.io/badge/Resume-EAB308?style=for-the-badge&logo=readdotcv&logoColor=black" alt="Resume" /></a>
  <a href="https://linkedin.com/in/akshatshahh"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIwLjQ1IDIwLjQ1aC0zLjU2di01LjU3YzAtMS4zMy0uMDItMy4wNC0xLjg1LTMuMDQtMS44NSAwLTIuMTQgMS40NS0yLjE0IDIuOTR2NS42N0g5LjM1VjloMy40MXYxLjU2aC4wNWMuNDgtLjkgMS42NC0xLjg1IDMuMzctMS44NSAzLjYgMCA0LjI3IDIuMzcgNC4yNyA1LjQ2djYuMjh6TTUuMzQgNy40M2EyLjA2IDIuMDYgMCAxIDEgMC00LjEzIDIuMDYgMi4wNiAwIDAgMSAwIDQuMTN6TTcuMTIgMjAuNDVIMy41NlY5aDMuNTZ2MTEuNDV6Ii8%2BPC9zdmc%2B" alt="LinkedIn" /></a>
  <a href="mailto:akshatshahh2003@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

### What I do

I build backend and AI systems that hold up in production.

- **Backend:** at **USC IMSC** I design async FastAPI microservices for a real-time geospatial platform used by **500+ people**, and cut query latency **40%** with PostGIS and H3 indexing.
- **AI engineering:** I build LLM agents and tools: a Claude tool-use research agent with a hard per-session cost budget, and a local-first interviewer on open-weight Gemma with Ollama and Mastra. I also ship fixes upstream to AI infrastructure such as Microsoft PyRIT, OpenClaw and Home Assistant MCP, with PRs in review at LiteLLM and AgentScope.
- **Scale:** at **Microsoft** I built latency observability for Office apps serving **85M+ users**.

**Looking for:** Software Engineer, AI Engineer, Backend and Full Stack Engineer roles.

### Featured projects

| Project | What it does | Built with |
| --- | --- | --- |
| **[POI Game](https://akshatshah.tech/projects/poi-game)** · [live](https://poi-game.vercel.app) | Gamified labeling platform that turns GPS visits into ML training data, with a consensus engine that locks each label | React, FastAPI, PostGIS |
| **[The Offline Interrogator](https://akshatshah.tech/projects/offline-interrogator)** | Local-first AI mock interviewer on open-weight Gemma, with Mastra tools and strict Zod-validated scoring | TypeScript, Ollama, Mastra |
| **Deep Research Agent** · 🔒 private · [request a walkthrough](mailto:akshatshahh2003@gmail.com?subject=Code%20walkthrough%3A%20Deep%20Research%20Agent) | Claude tool-use agent that decomposes questions, searches the web and vector memory, and stays under $0.05 per session | Python, FastAPI, Claude API, ChromaDB |
| **[Local Events](https://akshatshah.tech/projects/local-events)** | Live event search with Stripe reservations that cannot oversell under concurrent holds | FastAPI, PostgreSQL, Stripe |
| **[Trail Whisperer](https://github.com/akshatshahh/trail-whisperer)** | Offline trail companion: BirdNET and local Gemma identify birds and plants, with Atlas vector search | Python, Ollama, MongoDB Atlas |

<sub>Case studies cover the architecture and key engineering decisions. [See all 13 projects →](https://akshatshah.tech/projects)</sub>

### Open source

**Credited in release notes**
- **[reticle v3.6.0](https://github.com/reticlehq/reticle/releases/tag/v3.6.0)**: realm-aware submit control lookup, so the destructive-action guard works inside iframes ([#1399](https://github.com/reticlehq/reticle/pull/1399))
- **[Soup v0.76.0](https://github.com/MakazhanAlpamys/Soup/blob/v0.76.0/CHANGELOG.md)**: one shared loopback allowlist, so IPv6 loopback judge URLs work ([#1554](https://github.com/MakazhanAlpamys/Soup/pull/1554))

<!-- OPEN-SOURCE:START -->
**Merged upstream** (most-starred first)
- [openclaw/openclaw](https://github.com/openclaw/openclaw/pull/165066) ★ 392k: fix(auto-reply): surface silent inbound media staging failures
- [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup/pull/1554) ★ 9.2k: fix(net): use one shared loopback set for every outbound gate
- [homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp/pull/2652) ★ 5.1k: fix(validation): tell agents how to fix rejected config tool calls
- [microsoft/PyRIT](https://github.com/microsoft/PyRIT/pull/3048) ★ 4.6k: FIX: preserve child-result links when execution fails in SequentialAttack
- [reticlehq/reticle](https://github.com/reticlehq/reticle/pull/1399) ★ 1.3k: fix(browser): find submit controls across realms in submitControlFor

**In review**
- [BerriAI/litellm](https://github.com/BerriAI/litellm/pull/45889) ★ 61k: feat(router): yield session-affinity pin when pinned deployment is saturated
- [BerriAI/litellm](https://github.com/BerriAI/litellm/pull/45198) ★ 61k: fix(router): re-pin stale session pin when pinned deployment is unhealthy
- [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope/pull/3117) ★ 33k: fix(tool): stop suggesting tool-wide allow rules for base tools

<sub>13 pull requests shipped across 14 projects · updated Oct 17, 2026 · [All contributions →](https://akshatshah.tech/open-source)</sub>
<!-- OPEN-SOURCE:END -->

### Tech & tools

**AI & LLM engineering**<br/>
![Claude API](https://img.shields.io/badge/Claude_API-D97757?style=flat&logo=claude&logoColor=white) ![Gemini API](https://img.shields.io/badge/Gemini_API-8E75B2?style=flat&logo=googlegemini&logoColor=white) ![OpenAI-compatible APIs](https://img.shields.io/badge/OpenAI--compatible_APIs-412991?style=flat&logo=openai&logoColor=white) ![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat&logo=langchain&logoColor=white) ![LiteLLM](https://img.shields.io/badge/LiteLLM-4B5563?style=flat) ![Mastra](https://img.shields.io/badge/Mastra-111827?style=flat) ![MCP](https://img.shields.io/badge/MCP-000000?style=flat&logo=modelcontextprotocol&logoColor=white) ![Ollama + Gemma](https://img.shields.io/badge/Ollama_+_Gemma-000000?style=flat&logo=ollama&logoColor=white) ![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD21E?style=flat&logo=huggingface&logoColor=black) ![RAG & vector search](https://img.shields.io/badge/RAG_%26_vector_search-7C3AED?style=flat) ![ChromaDB](https://img.shields.io/badge/ChromaDB-F59E0B?style=flat) ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=flat&logo=pydantic&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat&logo=zod&logoColor=white)

**Machine learning**<br/>
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikitlearn&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white) ![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat&logo=jupyter&logoColor=white) ![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=opencv&logoColor=white) ![AWS SageMaker](https://img.shields.io/badge/AWS_SageMaker-232F3E?style=flat) ![CUDA](https://img.shields.io/badge/CUDA-76B900?style=flat&logo=nvidia&logoColor=white)

**Languages**<br/>
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white) ![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat&logo=kotlin&logoColor=white) ![C#](https://img.shields.io/badge/C%23-512BD4?style=flat&logo=dotnet&logoColor=white) ![Swift](https://img.shields.io/badge/Swift-F05138?style=flat&logo=swift&logoColor=white) ![C++](https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white) ![SQL](https://img.shields.io/badge/SQL-336791?style=flat&logo=postgresql&logoColor=white)

**Backend & APIs**<br/>
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=springboot&logoColor=white) ![Django](https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-3BABC3?style=flat&logo=flask&logoColor=white) ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white) ![REST APIs](https://img.shields.io/badge/REST_APIs-0EA5E9?style=flat) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)

**Frontend**<br/>
![React](https://img.shields.io/badge/React-149ECA?style=flat&logo=react&logoColor=white) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) ![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white) ![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-663399?style=flat&logo=css&logoColor=white)

**Mobile & game**<br/>
![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB) ![Android](https://img.shields.io/badge/Android-3DDC84?style=flat&logo=android&logoColor=white) ![SwiftUI](https://img.shields.io/badge/SwiftUI-F05138?style=flat&logo=swift&logoColor=white) ![Unity](https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white)

**Databases**<br/>
![PostgreSQL + PostGIS](https://img.shields.io/badge/PostgreSQL_+_PostGIS-4169E1?style=flat&logo=postgresql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-FF4438?style=flat&logo=redis&logoColor=white) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)

**Cloud & DevOps**<br/>
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat) ![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat&logo=googlecloud&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

### Contributions

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/akshatshahh/akshatshahh/output/github-snake-dark.svg" />
  <img alt="Contribution graph eaten by a snake" src="https://raw.githubusercontent.com/akshatshahh/akshatshahh/output/github-snake.svg" />
</picture>

---

<p align="center"><sub>Akshat Shah · Software Engineer and AI Engineer in Los Angeles, CA · <a href="https://akshatshah.tech">akshatshah.tech</a></sub></p>
