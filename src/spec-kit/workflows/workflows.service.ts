import type { WorkflowStep } from '../../types';

/**
 * Spec Kit Workflows
 * Source: https://github.com/github/spec-kit/blob/main/spec-driven.md
 */

export const MAIN_WORKFLOW: WorkflowStep[] = [
  {
    id: 'constitution',
    step: 1,
    title: 'Establish Project Principles',
    command: '/speckit.constitution',
    description: 'Start by defining the governing principles, architecture guidelines, coding standards, and team conventions that will guide all development. This becomes the foundation that every subsequent artifact builds upon.',
    output: '.specify/memory/constitution.md',
  },
  {
    id: 'specify',
    step: 2,
    title: 'Create the Specification',
    command: '/speckit.specify',
    description: 'Describe what you want to build using natural language. Focus on the "what" and "why" — the user scenarios, acceptance criteria, and business value. The AI agent transforms your description into a structured specification document.',
    output: '.specify/specs/<feature>.md',
  },
  {
    id: 'clarify',
    step: 3,
    title: 'Clarify & Refine (Optional)',
    command: '/speckit.clarify',
    description: 'Optionally run clarify to identify ambiguities, missing edge cases, and unstated assumptions before committing to a technical plan. This is the cheapest place to catch issues.',
    output: 'Updated .specify/specs/<feature>.md',
  },
  {
    id: 'checklist',
    step: 4,
    title: 'Validate Specification (Optional)',
    command: '/speckit.checklist',
    description: 'Generate a quality checklist to validate requirements completeness, clarity, and consistency — like unit tests for your English specification.',
    output: 'Quality checklist for the spec artifact',
  },
  {
    id: 'plan',
    step: 5,
    title: 'Create Technical Plan',
    command: '/speckit.plan',
    description: 'Provide your tech stack preferences, architectural constraints, and organizational standards. The AI agent reads the spec and produces a detailed technical implementation plan with component designs, data models, and API contracts.',
    output: '.specify/plans/<feature>.md',
  },
  {
    id: 'tasks',
    step: 6,
    title: 'Break Down Into Tasks',
    command: '/speckit.tasks',
    description: 'Generate an ordered, atomic task list from the implementation plan. Each task is independently implementable and maps directly to a piece of the plan. Tasks are numbered and prioritized for sequential execution.',
    output: '.specify/tasks/<feature>.md',
  },
  {
    id: 'analyze',
    step: 7,
    title: 'Cross-Artifact Analysis (Optional)',
    command: '/speckit.analyze',
    description: 'Run a consistency analysis to verify that the spec, plan, and tasks are fully aligned. Catches gaps where implementation tasks do not cover all specified requirements.',
    output: 'Consistency & coverage report',
  },
  {
    id: 'implement',
    step: 8,
    title: 'Execute Implementation',
    command: '/speckit.implement',
    description: 'Execute all tasks to build the feature. The AI agent works through the task list systematically, writing code, tests, and documentation according to the plan and spec. This is where your specification becomes working software.',
    output: 'Production-ready implementation',
  },
];

export const DEVELOPMENT_PHASES = [
  {
    id: 'greenfield',
    title: '0-to-1 Development',
    subtitle: 'Greenfield',
    description: 'Start completely fresh. Generate an entire application from requirements. Ideal for new projects, prototypes, and POCs.',
    steps: ['Requirements → Spec', 'Spec → Plan', 'Plan → Tasks', 'Tasks → Implementation'],
    color: 'emerald',
  },
  {
    id: 'exploration',
    title: 'Creative Exploration',
    subtitle: 'Parallel Implementations',
    description: 'Explore multiple solutions in parallel. Compare different technology stacks, UX patterns, or architectural approaches before committing.',
    steps: ['Single Spec', '→ Multiple Plans', '→ Parallel Implementations', '→ Compare & Select'],
    color: 'blue',
  },
  {
    id: 'brownfield',
    title: 'Iterative Enhancement',
    subtitle: 'Brownfield / Modernization',
    description: 'Add features to existing codebases. Modernize legacy systems. The spec-driven approach keeps incremental changes consistent with the overall architecture.',
    steps: ['Existing Codebase', '→ Feature Spec', '→ Compatible Plan', '→ Safe Implementation'],
    color: 'violet',
  },
];
