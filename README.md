# Spec Kit Documentation & Learning Portal

A production-ready React + TypeScript application serving as a complete documentation, integration, learning, and demonstration portal for **GitHub Spec Kit** — the open-source toolkit for Spec-Driven Development (SDD).

## What is Spec Kit?

[Spec Kit](https://github.com/github/spec-kit) is GitHub's open-source toolkit for **Spec-Driven Development (SDD)** — a methodology that puts specifications at the center of AI-assisted software development. Instead of jumping straight to code, you describe what to build, refine it through structured phases, and let your AI coding agent implement it.

- **107K+ GitHub stars** · **9.5K+ forks** · **200+ contributors**
- **Version**: v0.8.18 (latest)
- **Supports 30+ AI agents**: GitHub Copilot, Claude Code, Gemini CLI, Cursor, Windsurf, Kiro, and more

## Application Pages

| Page | Path | Description |
|------|------|-------------|
| Dashboard | `/` | Hero, stats, workflow overview, features, FAQ preview |
| What is Spec Kit | `/what-is-spec-kit` | Philosophy, problems solved, use cases |
| Installation Guide | `/installation` | Step-by-step install with uv/pipx, verification |
| Integration Guide | `/integration` | Copilot, Claude, Gemini integration setup |
| Architecture | `/architecture` | System design, artifact flow, template resolution |
| Features | `/features` | All Spec Kit features with comparison |
| Commands Reference | `/commands` | All slash commands and CLI commands with examples |
| Workflows | `/workflows` | SDD workflow, development phases, examples |
| Examples | `/examples` | React, Next.js, Node.js, brownfield, team workflows |
| Demo Playground | `/playground` | Interactive artifact generators (spec, plan, tasks, story, constitution) |
| Best Practices | `/best-practices` | 10 SDD principles, folder structure, Git workflow |
| Troubleshooting | `/troubleshooting` | Installation, configuration, workflow issue solutions |
| FAQ | `/faq` | 22 frequently asked questions with category filter |
| Resources | `/resources` | Official docs, GitHub, releases, community links |

## Phase 1: Spec Kit Integration

### Installation (Completed)

Spec Kit v0.8.18 is installed via the official method:

```bash
# Install uv (required)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install specify-cli
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.8.18

# Verify
specify version
# CLI Version    0.8.18
# Platform       Linux
```

### Project Initialization (Completed)

Spec Kit was initialized with GitHub Copilot integration:

```bash
specify init spec-kit-portal --integration copilot --script sh
```

This created `spec-kit-portal/` with:
- `.specify/` — templates, scripts, memory, extensions, presets, workflows
- `.github/prompts/` — 14 Copilot slash command prompt files

### Integration Layer (`src/spec-kit/`)

```
src/spec-kit/
├── configuration/
│   └── spec-kit.config.ts     # Official version, URLs, prerequisites, supported agents
├── services/
│   └── commands.service.ts    # All 14 commands with descriptions, params, examples
├── workflows/
│   └── workflows.service.ts   # 8-step SDD workflow, development phases
├── documentation/
│   └── content.service.ts     # Features, benefits, 22 FAQs, 5 examples
└── index.ts                   # Single export barrel
```

## Technology Stack

- **React 19** with **TypeScript 5** (strict mode)
- **Vite 8** — build tool
- **React Router v7** — client-side routing
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — utility-first styling
- **lucide-react** — icon library
- **specify-cli v0.8.18** — Spec Kit CLI (Python, installed via uv)

## Project Structure

```
spec-kit-doc-demo/
├── spec-kit-portal/           # Spec Kit initialized project
│   ├── .specify/              # SDD templates, scripts, memory
│   └── .github/prompts/       # Copilot slash commands
│
├── src/
│   ├── spec-kit/              # Integration layer (config, services, data)
│   │   ├── configuration/
│   │   ├── services/
│   │   ├── workflows/
│   │   └── documentation/
│   ├── components/
│   │   ├── layout/            # Layout, Sidebar, TopNav, Footer, Breadcrumb
│   │   └── ui/                # CodeBlock, Cards, Accordion, Icons
│   ├── context/               # ThemeContext (dark mode), SidebarContext
│   ├── hooks/                 # useCopyCode, useSearch
│   ├── navigation/            # nav-items.ts
│   ├── pages/                 # 14 documentation pages
│   └── types/                 # TypeScript interfaces
│
├── index.html
├── vite.config.ts
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
git clone <repo>
cd spec-kit-doc-demo
npm install
npm run dev
```

Open http://localhost:5173

### Build for Production

```bash
npm run build
npm run preview
```

## Features Implemented

### Advanced Features
- **Global Search** — Ctrl+K shortcut, real-time search across all pages and commands
- **Dark Mode / Light Mode** — persisted to localStorage, respects system preference
- **Mobile Navigation** — responsive sidebar with overlay for mobile
- **Copy Code Buttons** — on all code blocks with clipboard feedback
- **Sticky Sidebar** — on desktop, smooth scrolling content
- **Scroll to Top** — button appears after 400px scroll
- **Breadcrumb Navigation** — on all inner pages
- **Responsive Layout** — works from 320px mobile to 4K desktop

### Demo Playground
Five interactive generators that produce real Spec Kit-format Markdown artifacts:
1. **Specification Generator** — mirrors `/speckit.specify` output
2. **Implementation Plan Generator** — mirrors `/speckit.plan` output
3. **Task Breakdown Generator** — mirrors `/speckit.tasks` output
4. **User Story Generator** — BDD-format user stories
5. **Constitution Generator** — mirrors `/speckit.constitution` output

## Spec Kit Slash Commands Reference

After running `specify init`, these commands are available in your AI coding agent:

| Command | Type | Description |
|---------|------|-------------|
| `/speckit.constitution` | Core | Create project governing principles |
| `/speckit.specify` | Core | Define what to build (requirements/user stories) |
| `/speckit.plan` | Core | Create technical implementation plan |
| `/speckit.tasks` | Core | Generate actionable task list |
| `/speckit.taskstoissues` | Core | Convert tasks to GitHub Issues |
| `/speckit.implement` | Core | Execute all tasks to build the feature |
| `/speckit.clarify` | Optional | Clarify ambiguous areas before planning |
| `/speckit.analyze` | Optional | Cross-artifact consistency analysis |
| `/speckit.checklist` | Optional | Quality checklists for spec validation |

## Official Spec Kit Resources

- **GitHub Repository**: https://github.com/github/spec-kit
- **Official Docs**: https://github.github.io/spec-kit/
- **Latest Release**: https://github.com/github/spec-kit/releases/tag/v0.8.18
- **Video Overview**: https://www.youtube.com/watch?v=a9eR1xsfvHg

## License

This documentation portal is built for the Spec Kit community.
Spec Kit itself is MIT licensed — see [github/spec-kit LICENSE](https://github.com/github/spec-kit/blob/main/LICENSE).
