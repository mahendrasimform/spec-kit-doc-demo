import type { Command } from '../../types';

/**
 * Spec Kit Commands Reference
 * Source: https://github.com/github/spec-kit
 */
export const CORE_COMMANDS: Command[] = [
  {
    command: '/speckit.constitution',
    description: 'Create or update project governing principles and development guidelines. Sets architecture, quality standards, and conventions that guide all subsequent development.',
    parameters: '[focus-description]',
    example: '/speckit.constitution Create principles focused on code quality, testing standards, user experience consistency, and performance requirements',
    output: 'Creates .specify/memory/constitution.md with project principles',
    type: 'core',
  },
  {
    command: '/speckit.specify',
    description: 'Define what you want to build — requirements, user stories, and acceptance criteria. Focus on the "what" and "why", not the tech stack.',
    parameters: '<description-of-feature>',
    example: '/speckit.specify Build an application that helps users organize photos into albums grouped by date, with drag-and-drop reordering',
    output: 'Creates .specify/specs/<feature>.md specification artifact',
    type: 'core',
  },
  {
    command: '/speckit.plan',
    description: 'Create a technical implementation plan with your chosen tech stack and architecture decisions. Reads the spec artifact and generates a detailed technical plan.',
    parameters: '<tech-stack-and-constraints>',
    example: '/speckit.plan Use React with TypeScript, Tailwind CSS, and React Router. Deploy to Vercel. Use local SQLite for metadata.',
    output: 'Creates .specify/plans/<feature>.md with full technical plan',
    type: 'core',
  },
  {
    command: '/speckit.tasks',
    description: 'Generate an actionable, ordered task list from the implementation plan. Each task is atomic and independently implementable.',
    parameters: '(no parameters needed)',
    example: '/speckit.tasks',
    output: 'Creates .specify/tasks/<feature>.md with numbered task list',
    type: 'core',
  },
  {
    command: '/speckit.taskstoissues',
    description: 'Convert the generated task list into GitHub issues for project tracking and team execution. Requires GitHub CLI (gh) to be configured.',
    parameters: '[--repo <owner/repo>]',
    example: '/speckit.taskstoissues',
    output: 'Creates GitHub issues from .specify/tasks/<feature>.md',
    type: 'core',
  },
  {
    command: '/speckit.implement',
    description: 'Execute all tasks to build the feature according to the plan. The AI agent works through the task list systematically, implementing each item.',
    parameters: '(no parameters needed)',
    example: '/speckit.implement',
    output: 'Full feature implementation matching the spec and plan',
    type: 'core',
  },
];

export const OPTIONAL_COMMANDS: Command[] = [
  {
    command: '/speckit.clarify',
    description: 'Ask structured questions to de-risk ambiguous areas before planning. Identifies gaps, edge cases, and assumptions in the specification.',
    parameters: '(run before /speckit.plan)',
    example: '/speckit.clarify',
    output: 'List of clarification questions + updated spec with answers',
    type: 'optional',
  },
  {
    command: '/speckit.analyze',
    description: 'Cross-artifact consistency and coverage analysis. Checks that specs, plans, and tasks are aligned and nothing is missing.',
    parameters: '(run after /speckit.tasks, before /speckit.implement)',
    example: '/speckit.analyze',
    output: 'Consistency report identifying gaps between artifacts',
    type: 'optional',
  },
  {
    command: '/speckit.checklist',
    description: 'Generate quality checklists that validate requirements completeness, clarity, and consistency — like "unit tests for English". Catches ambiguity early.',
    parameters: '[checklist-focus]',
    example: '/speckit.checklist',
    output: 'Quality checklist for reviewing the spec artifact',
    type: 'optional',
  },
];

export const MANAGEMENT_COMMANDS: Command[] = [
  {
    command: 'specify init',
    description: 'Initialize a new Spec Kit project in a directory. Sets up all required directories, templates, and agent integration.',
    parameters: '<project-name> [--integration <agent>] [--script <sh|ps>]',
    example: 'specify init my-app --integration copilot --script sh',
    output: 'Creates .specify/, .github/prompts/ (for Copilot), and project structure',
    type: 'management',
  },
  {
    command: 'specify version',
    description: 'Display CLI version and system information. Use to verify you have the official Spec Kit build.',
    parameters: '',
    example: 'specify version',
    output: 'CLI version, Python version, Platform, Architecture',
    type: 'management',
  },
  {
    command: 'specify check',
    description: 'Check that all required tools are installed for your chosen integration.',
    parameters: '[--integration <agent>]',
    example: 'specify check --integration copilot',
    output: 'Tool availability report',
    type: 'management',
  },
  {
    command: 'specify extension add',
    description: 'Install a community extension to add new capabilities and commands.',
    parameters: '<extension-name>',
    example: 'specify extension add git',
    output: 'Extension installed and commands registered in agent directory',
    type: 'management',
  },
  {
    command: 'specify extension search',
    description: 'Search available community extensions in the catalog.',
    parameters: '[query]',
    example: 'specify extension search jira',
    output: 'List of matching extensions with descriptions',
    type: 'management',
  },
  {
    command: 'specify preset add',
    description: 'Install a community preset to customize Spec Kit workflows and templates.',
    parameters: '<preset-name>',
    example: 'specify preset add agile',
    output: 'Preset applied — template overrides active',
    type: 'management',
  },
  {
    command: 'specify integration list',
    description: 'List all available AI coding agent integrations supported by your installed version.',
    parameters: '',
    example: 'specify integration list',
    output: 'Table of supported agents with notes',
    type: 'management',
  },
  {
    command: 'specify workflow run',
    description: 'Run an automation workflow (e.g., the built-in speckit workflow).',
    parameters: '<workflow-name>',
    example: 'specify workflow run speckit',
    output: 'Workflow executed',
    type: 'management',
  },
];

export const ALL_COMMANDS = [...CORE_COMMANDS, ...OPTIONAL_COMMANDS, ...MANAGEMENT_COMMANDS];
