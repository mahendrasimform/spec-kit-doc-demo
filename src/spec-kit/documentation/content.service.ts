import type { Feature, FAQ, Example } from '../../types';

/**
 * Spec Kit Features, FAQs, and Examples
 * Source: https://github.com/github/spec-kit
 */

export const SPEC_KIT_FEATURES: Feature[] = [
  {
    title: 'Structured Specifications',
    description: 'Transform natural language requirements into structured, machine-readable specification documents with consistent format and quality standards.',
    benefits: ['Consistent artifact format', 'Versionable in Git', 'AI-interpretable context', 'Team reviewable'],
    icon: 'FileText',
  },
  {
    title: 'Spec-Driven Development',
    description: 'Specifications become executable — directly generating working implementations rather than just guiding them. Define "what" before "how".',
    benefits: ['Reduced ambiguity', 'Predictable outcomes', 'Auditable decisions', 'Reproducible results'],
    icon: 'Target',
  },
  {
    title: 'AI-Assisted Workflow',
    description: 'Deep integration with 30+ AI coding agents including GitHub Copilot, Claude Code, Gemini CLI, and Cursor. Switch agents freely.',
    benefits: ['Agent-agnostic design', 'No lock-in', 'Context-rich prompts', 'Structured handoffs'],
    icon: 'Bot',
  },
  {
    title: 'Extensions & Presets',
    description: '105 community extensions and 22 presets. Add Jira integration, V-Model traceability, architecture guards, CI gates, and more.',
    benefits: ['105+ extensions', '22+ presets', 'Community-maintained', 'Composable layers'],
    icon: 'Puzzle',
  },
  {
    title: 'Team Collaboration',
    description: 'Specs, plans, and tasks live as Markdown files in Git. Teams review specs like code, track progress via GitHub Issues, and build shared vocabulary.',
    benefits: ['Git-native workflow', 'PR-reviewable specs', 'GitHub Issues integration', 'Shared terminology'],
    icon: 'Users',
  },
  {
    title: 'Enterprise Ready',
    description: 'Air-gapped installation, private extension catalogs, compliance presets, and organizational template overrides. Works behind firewalls.',
    benefits: ['Offline installation', 'Private catalogs', 'Compliance presets', 'Windows support'],
    icon: 'Shield',
  },
  {
    title: 'Quality Checklists',
    description: 'Auto-generated quality gates that validate requirement completeness, clarity, and consistency — described as "unit tests for English".',
    benefits: ['Catches ambiguity early', 'Consistency validation', 'Completeness checks', 'Custom checklists'],
    icon: 'CheckSquare',
  },
  {
    title: 'Automation Workflows',
    description: 'Built-in and community workflows automate repetitive SDD tasks. Archive specs, reconcile drift, validate architecture, and more.',
    benefits: ['Built-in workflows', 'Custom workflows', 'CI/CD integration', 'Drift detection'],
    icon: 'Zap',
  },
];

export const SPEC_KIT_BENEFITS = [
  { title: 'Faster Development', description: 'Structured specs eliminate clarification cycles and rework. AI agents have rich context to generate accurate implementations on the first attempt.', icon: 'Rocket', stat: '60% fewer revisions' },
  { title: 'Better Planning', description: 'Multi-step refinement (Spec → Clarify → Plan → Tasks) catches issues before a single line of code is written — where fixes are cheapest.', icon: 'Map', stat: 'Issues caught pre-code' },
  { title: 'Improved Collaboration', description: 'Git-native artifacts that teams read, review, and contribute to via pull requests. Specifications become living team documentation.', icon: 'GitBranch', stat: 'Everyone can contribute' },
  { title: 'Reduced Rework', description: 'Implementation tasks trace back to specifications. Changes are scoped and justified. The analyze command verifies alignment before coding.', icon: 'RefreshCw', stat: 'Full traceability' },
  { title: 'Standardized Processes', description: 'Consistent SDD workflow across projects, teams, and tech stacks. Presets enforce organizational standards automatically.', icon: 'LayoutTemplate', stat: '22 presets available' },
  { title: 'Easier Maintenance', description: 'Specifications document the "why" behind every feature. Future maintainers understand intent, not just implementation.', icon: 'Wrench', stat: 'Intent preserved' },
];

export const FAQS: FAQ[] = [
  { id: 'faq-1', question: 'What is Spec Kit?', answer: 'Spec Kit is GitHub\'s open-source toolkit for Spec-Driven Development (SDD). It provides a structured methodology and CLI tool (specify-cli) that guides teams through creating specifications before writing code. It works with 30+ AI coding agents including GitHub Copilot, Claude, and Gemini.', category: 'General' },
  { id: 'faq-2', question: 'How is Spec Kit different from vibe coding?', answer: 'Vibe coding means generating code from ad-hoc prompts without structure. Spec Kit enforces a multi-step process: first define what to build (spec), then how to build it (plan), then break it into tasks, then implement. Each step produces a structured Markdown artifact that feeds the next step, giving AI agents rich context instead of one-shot guesses.', category: 'General' },
  { id: 'faq-3', question: 'Is Spec Kit free and open source?', answer: 'Yes. Spec Kit is fully open source under the MIT license, hosted at github.com/github/spec-kit. It has 107K+ GitHub stars, 9.5K+ forks, and 200+ contributors.', category: 'General' },
  { id: 'faq-4', question: 'How do I install Spec Kit?', answer: 'Install using uv: `uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.8.18`. Then initialize a project: `specify init my-project --integration copilot`. See the Installation Guide for pipx and air-gapped alternatives.', category: 'Installation' },
  { id: 'faq-5', question: 'What are the prerequisites?', answer: 'You need Python 3.11+, uv (recommended) or pipx, Git, and a supported AI coding agent (GitHub Copilot, Claude Code, Gemini CLI, etc.). Node.js is only needed if you\'re building JavaScript/TypeScript projects.', category: 'Installation' },
  { id: 'faq-6', question: 'Can I install Spec Kit in an air-gapped environment?', answer: 'Yes. Spec Kit supports enterprise and air-gapped installation via locally built Python wheel bundles. See the air-gapped installation guide at github.com/github/spec-kit/blob/main/docs/install/air-gapped.md.', category: 'Installation' },
  { id: 'faq-7', question: 'Does Spec Kit work on Windows?', answer: 'Yes. PowerShell (.ps1) scripts are supported alongside Bash (.sh) scripts. Windows is the default for PowerShell; Linux/macOS default to Bash. Specify automatically detects your OS.', category: 'Installation' },
  { id: 'faq-8', question: 'Which AI coding agents does Spec Kit support?', answer: 'Spec Kit supports 30+ agents including GitHub Copilot, Claude Code, Gemini CLI, OpenAI Codex, Windsurf, Cursor, Kiro, Forge, Codebuddy, Pi, Antigravity, Junie, Aider, Continue, and more. Run `specify integration list` to see the full list. A generic integration is available for any tool not listed.', category: 'Integration' },
  { id: 'faq-9', question: 'How do I switch between AI agents?', answer: 'Run `specify init --integration <agent>` in your project directory to add support for a new agent. You can have multiple agent integrations active simultaneously. Each agent gets its own command files directory (e.g., .github/prompts/ for Copilot, .claude/commands/ for Claude).', category: 'Integration' },
  { id: 'faq-10', question: 'What files does specify init create?', answer: 'It creates .specify/ (templates, scripts, memory, extensions, presets), and integration-specific files. For Copilot, it creates .github/prompts/ with .prompt.md files for each slash command. For Claude, it creates .claude/commands/.', category: 'Configuration' },
  { id: 'faq-11', question: 'What is the .specify/ directory?', answer: 'The .specify/ directory is the Spec Kit project root containing: templates/ (SDD templates), scripts/ (automation scripts), memory/ (constitution and project knowledge), extensions/ (installed extensions), presets/ (installed presets), and workflows/ (automation workflows).', category: 'Configuration' },
  { id: 'faq-12', question: 'Can I customize Spec Kit templates?', answer: 'Yes, through three mechanisms: (1) Project-local overrides in .specify/templates/overrides/ — one-off customizations for a single project. (2) Presets in .specify/presets/templates/ — reusable template overrides. (3) Extensions in .specify/extensions/templates/ — new commands and capabilities. Templates are resolved top-down with overrides winning.', category: 'Configuration' },
  { id: 'faq-13', question: 'What are extensions vs presets?', answer: 'Extensions add new commands and capabilities (e.g., a Jira integration command, a code-review command). Presets customize existing workflows and templates (e.g., enforce a compliance spec format, use Agile terminology). Use an extension when you want to add something new; use a preset when you want to change how existing things work.', category: 'Commands' },
  { id: 'faq-14', question: 'What is /speckit.constitution?', answer: 'The constitution command creates your project\'s governing principles document stored at .specify/memory/constitution.md. It defines architecture decisions, coding standards, quality requirements, and team conventions that guide all subsequent specifications, plans, and tasks.', category: 'Commands' },
  { id: 'faq-15', question: 'What is /speckit.clarify?', answer: 'The clarify command (formerly /quizme) analyzes your specification and asks structured questions to identify ambiguous areas, missing edge cases, and unstated assumptions. It\'s optional but recommended before /speckit.plan to de-risk the planning phase.', category: 'Commands' },
  { id: 'faq-16', question: 'What is /speckit.analyze?', answer: 'The analyze command performs a cross-artifact consistency check after /speckit.tasks. It verifies that implementation tasks fully cover the specification requirements and the plan is consistent with both. Run it before /speckit.implement to catch gaps early.', category: 'Commands' },
  { id: 'faq-17', question: 'Can Spec Kit work with any programming language?', answer: 'Yes. Spec Kit is language-agnostic. The SDD methodology works with any tech stack — React, Next.js, Python, .NET, Go, Rust, etc. You specify your tech stack in /speckit.plan and the AI agent generates language-appropriate implementations.', category: 'Workflows' },
  { id: 'faq-18', question: 'What is the difference between 0-to-1 and brownfield workflows?', answer: '0-to-1 (Greenfield) builds from scratch: start with requirements and generate an entire application. Brownfield adds features to existing codebases or modernizes legacy systems. Spec Kit supports both with the same slash commands — the plan step picks up existing codebase context automatically.', category: 'Workflows' },
  { id: 'faq-19', question: 'How do I contribute community content to Spec Kit?', answer: 'You can contribute extensions (new commands/capabilities), presets (template customizations), or walkthroughs (end-to-end SDD scenarios). See the Extension Publishing Guide at github.com/github/spec-kit/blob/main/extensions/EXTENSION-PUBLISHING-GUIDE.md.', category: 'Best Practices' },
  { id: 'faq-20', question: 'How does Spec Kit handle large features?', answer: 'Large features are naturally handled by the task breakdown step (/speckit.tasks), which decomposes the implementation plan into atomic, independently implementable tasks. For very large features, you can run /speckit.implement on individual tasks, or use the analyze command to validate coverage at each checkpoint.', category: 'Best Practices' },
  { id: 'faq-21', question: 'Does Spec Kit require internet access at runtime?', answer: 'No. Once installed, Spec Kit runs entirely offline. The specify CLI operates locally, writing Markdown files to your project directory. Only the installation step requires internet access (to pull from GitHub). Air-gapped environments can install from local wheel bundles.', category: 'Best Practices' },
  { id: 'faq-22', question: 'Can I use Spec Kit in CI/CD pipelines?', answer: 'Yes. Non-interactive CI/CD runs default to GitHub Copilot integration unless you pass --integration. The specify CLI supports scripted initialization. Community extensions like CI Guard add automated compliance gates that integrate with GitHub Actions and other CI systems.', category: 'Best Practices' },
];

export const EXAMPLES: Example[] = [
  {
    id: 'react-app',
    title: 'React + TypeScript App',
    description: 'Build a production-ready React application with TypeScript using Spec Kit\'s full SDD workflow.',
    stack: 'React, TypeScript, Vite, Tailwind CSS',
    code: `# Step 1: Initialize Spec Kit in your React project
specify init my-react-app --integration copilot

cd my-react-app

# Step 2: Establish project principles (in your AI agent)
/speckit.constitution
> Create principles for a React TypeScript application:
> - TypeScript strict mode, no 'any' types
> - Tailwind CSS for styling, no CSS modules
> - React Query for server state, Zustand for client state
> - Vitest for unit tests, Playwright for E2E
> - Conventional Commits, conventional PR titles

# Step 3: Create the specification
/speckit.specify
> Build a todo application where users can:
> - Create tasks with title, description, due date, priority
> - Organize tasks into projects
> - Mark tasks complete, archive, or delete them
> - Filter by status, priority, and project
> - Persist data in localStorage

# Step 4: Create technical plan
/speckit.plan
> Use React 19 with TypeScript 5.4, Vite, Tailwind CSS v4.
> Zustand for state, React Query for future API readiness.
> Component library: shadcn/ui. Deploy to Vercel.

# Step 5: Generate tasks
/speckit.tasks

# Step 6: Implement
/speckit.implement`,
    output: 'A complete React TypeScript todo app with state management, filtering, persistence, and tests.',
    explanation: 'This workflow produces structured artifacts at each step: constitution.md sets coding standards, todos-feature.md captures requirements, todos-plan.md defines the React component hierarchy and state design, and todos-tasks.md provides 15-20 atomic implementation tasks.',
  },
  {
    id: 'nextjs',
    title: 'Next.js Full-Stack App',
    description: 'Build a full-stack Next.js application with API routes, database integration, and authentication.',
    stack: 'Next.js 15, TypeScript, Prisma, PostgreSQL',
    code: `# Initialize Spec Kit
specify init blog-platform --integration claude

cd blog-platform

# Establish principles
/speckit.constitution
> TypeScript strict mode, Next.js App Router, Prisma ORM,
> PostgreSQL, NextAuth.js, shadcn/ui, Zod validation,
> Jest for unit tests, Cypress for E2E

# Specify the feature
/speckit.specify
> Build a blog platform where:
> - Authors can write, edit, publish, and delete posts
> - Posts support Markdown with syntax highlighting
> - Readers can view posts, search by tag/author
> - Comment system with moderation
> - RSS feed auto-generated

# Clarify ambiguities (optional but recommended)
/speckit.clarify

# Technical plan
/speckit.plan
> Next.js 15 App Router, Prisma + PostgreSQL on Supabase,
> NextAuth.js v5, Tiptap editor, gray-matter for Markdown.
> Deploy to Vercel with edge functions.

# Generate tasks and implement
/speckit.tasks
/speckit.implement`,
    output: 'Full-stack blog platform with auth, database, API, and deployment configuration.',
    explanation: 'The clarify step is especially valuable here — it surfaces questions about draft vs published state, comment threading depth, moderation workflow, and RSS pagination before the plan is written.',
  },
  {
    id: 'nodejs-api',
    title: 'Node.js REST API',
    description: 'Build a production-ready Node.js REST API with Express, validation, and testing.',
    stack: 'Node.js, Express, TypeScript, Zod, Jest',
    code: `# Initialize for Node.js backend
specify init user-api --integration gemini

cd user-api

# Set backend principles
/speckit.constitution
> Express + TypeScript, Zod validation, Prisma ORM,
> Jest for unit/integration tests, OpenAPI documentation,
> JWT authentication, rate limiting, structured logging

# Specify the API
/speckit.specify
> Build a user management REST API with:
> - CRUD operations for users (name, email, role, status)
> - JWT authentication (login, logout, refresh)
> - Role-based authorization (admin, editor, viewer)
> - Pagination, filtering, sorting for user list
> - Password reset via email
> - Audit log for all mutations

# Create technical plan
/speckit.plan
> Express 4, TypeScript 5, Prisma + PostgreSQL,
> passport-jwt, nodemailer, zod, pino logger.
> OpenAPI 3.1 spec auto-generated. Docker Compose for dev.

/speckit.tasks
/speckit.implement`,
    output: 'Production-ready REST API with auth, authorization, validation, logging, and OpenAPI docs.',
    explanation: 'Spec Kit generates the full Express application including route handlers, middleware, Prisma schema, database migrations, JWT strategy, email templates, and test suites.',
  },
  {
    id: 'brownfield',
    title: 'Adding Features to Existing App',
    description: 'Use Spec Kit\'s brownfield workflow to safely add new features to an existing codebase.',
    stack: 'Any existing codebase',
    code: `# In your existing project root
specify init . --integration copilot

# The existing codebase provides context for the plan step.
# Constitution captures EXISTING standards, not new ones.
/speckit.constitution
> Document existing patterns:
> - React 18, TypeScript, CSS Modules (existing — don't change)
> - Add new features as React functional components
> - New features must be accessible (WCAG 2.1 AA)
> - Tests required for all new business logic

# Specify only the NEW feature
/speckit.specify
> Add a notification center to the existing dashboard:
> - Bell icon in header showing unread count badge
> - Dropdown list of notifications (title, message, time, read status)
> - Mark individual or all as read
> - Notification categories: system, user activity, alerts
> - Persist preferences in user settings

# Plan accounts for existing code
/speckit.plan
> Extend the existing Redux store with a notifications slice.
> Add to the existing API client (axios instance).
> Follow existing CSS Module naming conventions.
> No new dependencies — use existing react-query setup.

/speckit.tasks
/speckit.analyze  # Verify no conflicts with existing features
/speckit.implement`,
    output: 'New notification center feature that integrates seamlessly with the existing application.',
    explanation: 'The brownfield workflow is where Spec Kit shines — the plan step reads your existing codebase to produce an implementation plan that matches your actual patterns, rather than inventing new ones.',
  },
  {
    id: 'team-collab',
    title: 'Team Collaboration Workflow',
    description: 'Using Spec Kit in a team environment with GitHub Issues and pull request reviews.',
    stack: 'Team workflow, GitHub Issues',
    code: `# Engineer creates the spec (can be reviewed by PM/designers)
/speckit.specify
> New onboarding flow for enterprise customers:
> SSO configuration wizard, 3-step process,
> supports SAML 2.0 and OIDC providers,
> IT admin persona, handles error states and rollback

# Spec gets committed and reviewed via PR
git add .specify/specs/enterprise-onboarding.md
git commit -m "spec: enterprise SSO onboarding wizard"
git push && gh pr create --title "Spec: Enterprise Onboarding"

# After spec is approved → create plan
/speckit.plan
> Extend existing auth system. SAML via samlify,
> OIDC via node-openid-client. Database: add sso_configurations
> table. Feature-flag gated. Full test coverage required.

# Convert tasks to GitHub Issues for sprint tracking
/speckit.tasks
/speckit.taskstoissues
# → Creates 18 GitHub issues in the sprint backlog

# Engineers pick issues and implement with full context
/speckit.implement`,
    output: 'Enterprise SSO feature tracked as GitHub Issues with full specification, plan, and task traceability.',
    explanation: 'The team workflow uses Git as the collaboration medium. Specifications are reviewed like code via pull requests, giving non-technical stakeholders visibility into what\'s being built and why before implementation begins.',
  },
];
