<div align="center">

# 🌐 Muhammad Rishal P — Portfolio

**Systems Programming • Local AI & RAG • Terminal Tooling • Embedded IoT**

[![Live Site](https://img.shields.io/badge/Live-rishal.me-10b981?style=for-the-badge&logo=vercel&logoColor=white)](https://rishal.me)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=for-the-badge)](LICENSE)

<p align="center">
  A high-performance, responsive personal developer portfolio engineered with a modern dark terminal aesthetic, emerald accents, dynamic project filtering, and interactive in-browser PDF resume previews.
</p>

[Explore Projects](#-featured-projects) • [Technical Arsenal](#-technical-arsenal) • [Resume Engine](#-resume-engine-papr) • [Development](#-local-development)

</div>

---

## ✨ Features

- **⚡ Blazing Fast**: Built with React 19, Vite 6, and modern Tailwind CSS v4 with sub-second HMR and minimal asset overhead.
- **🏷️ Domain-Based Filtering**: Seamlessly filter open-source projects across *Systems & CLI*, *AI & Voice*, *Backend & Cloud*, and *Hardware & IoT*.
- **📄 Draggable In-Browser Resume Modal**: Interactive preview of the single-page resume with responsive aspect ratios, drag-and-drop movement, and direct PDF download.
- **🦀 Powered by `papr`**: Automated resume generation compiled directly from Markdown to publication-grade PDF using the custom [papr](https://crates.io/crates/papr-cli) typesetting tool.
- **🌍 Production Domain Integration**: Continuous deployment configured via Vercel with automatic edge routing to [rishal.me](https://rishal.me).

---

## 🛠️ Technical Arsenal

| Category | Technologies & Tools |
| :--- | :--- |
| **Languages** | Python, C / C++, Java, Dart, JS / TS, SQL, NASM Assembly |
| **Systems & AI** | Local LLMs (Ollama GPU), SQLite FTS5 BM25 RAG, Piper TTS (ONNX), Ratatui TUI, Tokio Async, Web Audio API |
| **Backend & Cloud** | FastAPI, Node.js, Express.js, Docker, SQLite (WAL Mode), PostgreSQL, REST APIs |
| **Hardware & IoT** | ESP32, Tasmota, MQTT (Mosquitto), Linux (Hyprland / Wayland IPC), Embedded C, Flutter |

---

## 🚀 Featured Projects

- **[Mini Project](https://github.com/rishalsha/Project-Mini)** — AI-based portfolio generator & job recommendation platform with LangChain resume parsing, bcrypt authentication, and SQLite3 persistence.
- **[GitHubCLI (ghcli)](https://github.com/rishalsha/GitHubCLI)** — Fast, keyboard-driven Ratatui terminal UI written in Rust for managing GitHub repositories.
- **[IPadDock](https://github.com/rishalsha/IPadDock)** — Hardware and software setup repurposing a retired iPad Gen 4 into a permanent battle-station dashboard, multi-machine stream deck, and MQTT telemetry center.
- **[J.A.R.V.I.S.](https://github.com/rishalsha/Jarvis)** — 100% private local voice AI companion powered by local RTX 3060 GPU inference, 75ms Piper TTS, real-time RAG memory vault (<1ms SQLite FTS5 recall), and Arc Reactor HUD.
- **[qmit](https://github.com/rishalsha/qmit)** *(Crates.io)* — AI-powered Conventional Commit CLI tool written in Rust that analyzes staged Git diffs and outputs standardized commit messages.
- **[GPT-CLI](https://github.com/rishalsha/GPT-CLI)** — Lightning-fast terminal AI assistant in Go with real-time Markdown streaming, multi-turn chat, and Unix piping.
- **[EasyBin](https://github.com/rishalsha/EasyBin)** — Lightweight web pastebin and payload storage service for sharing code snippets and JSON documents.
- **[papr](https://github.com/rishalsha/papr)** *(Crates.io)* — High-speed CLI tool compiling Markdown, multi-file LaTeX (Tectonic/XeTeX), and plain text into publication-grade PDFs.
- **[JsonBin](https://github.com/rishalsha/JsonBin)** — Self-hosted JSON storage engine compatible with JSONBin.io v3 API with FastAPI, SQLite WAL mode, and Docker.
- **[SpeedTest](https://github.com/rishalsha/SpeedTest)** — High-performance Rust network benchmark and latency monitor featuring an interactive Ratatui TUI and headless CLI modes.
- **[Habitat](https://github.com/rishalsha/Habitat)** — IoT smart home ecosystem powered by ESP32 microcontrollers, Tasmota firmware, and Flutter for local IP control.
- **[Rumbly](https://github.com/IamShaDoW666/rumbly)** — Backend sandboxing execution engine for compiling and running NASM assembly code safely in the cloud.

---

## 📄 Resume Engine (`papr`)

The single-page resume displayed and served on the site is maintained in [`resume.md`](resume.md) and compiled using [papr](https://github.com/rishalsha/papr):

```bash
# Recompile the resume PDF
papr resume.md -o "public/Muhammad Rishal P.pdf" -t modern

# Sync root copy
cp "public/Muhammad Rishal P.pdf" resume.pdf
```

---

## 💻 Local Development

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/rishalsha/MyPortfolio.git
cd MyPortfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Production Build

```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 License

Distributed under the Apache-2.0 License. Designed and developed by **Muhammad Rishal P** &copy; 2026.
