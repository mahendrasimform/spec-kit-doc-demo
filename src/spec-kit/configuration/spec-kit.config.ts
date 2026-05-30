/**
 * Spec Kit Configuration
 * Official: https://github.com/github/spec-kit
 * Version: 0.8.18
 */

export const SPEC_KIT_CONFIG = {
  version: '0.8.18',
  repoUrl: 'https://github.com/github/spec-kit',
  docsUrl: 'https://github.github.io/spec-kit/',
  releaseUrl: 'https://github.com/github/spec-kit/releases/tag/v0.8.18',
  latestReleasesUrl: 'https://github.com/github/spec-kit/releases',
  issuesUrl: 'https://github.com/github/spec-kit/issues',
  discussionsUrl: 'https://github.com/github/spec-kit/discussions',
  videoOverviewUrl: 'https://www.youtube.com/watch?v=a9eR1xsfvHg',
  stats: {
    stars: '107K+',
    contributors: '200+',
    integrations: 30,
    extensions: 105,
    presets: 22,
    forks: '9.5K+',
  },
  installCommand: 'uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.8.18',
  uvxCommand: 'uvx --from git+https://github.com/github/spec-kit.git specify init my-project --integration copilot',
  initCommand: 'specify init <project-name> --integration copilot',
  versionCommand: 'specify version',
  supportedAgents: [
    'GitHub Copilot', 'Claude Code', 'Gemini CLI', 'OpenAI Codex',
    'Windsurf', 'Cursor', 'Kiro', 'Codebuddy', 'Pi Coding Agent',
    'Forge', 'Antigravity', 'Junie', 'Aider', 'Continue', 'Zed',
    'Generic (any tool)',
  ],
  prerequisites: [
    { name: 'Python 3.11+', url: 'https://www.python.org/downloads/', description: 'Required for specify-cli' },
    { name: 'uv', url: 'https://docs.astral.sh/uv/', description: 'Recommended package manager' },
    { name: 'Git', url: 'https://git-scm.com/downloads', description: 'Version control' },
    { name: 'Node.js 18+', url: 'https://nodejs.org/', description: 'For JS/TS projects' },
    { name: 'AI Coding Agent', url: 'https://github.github.io/spec-kit/reference/integrations.html', description: 'Copilot, Claude, Gemini, etc.' },
  ],
} as const;

export const SPEC_KIT_DIRECTORIES = {
  specify: '.specify/',
  templates: '.specify/templates/',
  scripts: '.specify/scripts/',
  extensions: '.specify/extensions/',
  presets: '.specify/presets/',
  workflows: '.specify/workflows/',
  integrations: '.specify/integrations/',
  memory: '.specify/memory/',
  overrides: '.specify/templates/overrides/',
} as const;

export const COPILOT_PROMPTS_DIR = '.github/prompts/';
export const CLAUDE_COMMANDS_DIR = '.claude/commands/';
export const GEMINI_COMMANDS_DIR = '.gemini/commands/';
