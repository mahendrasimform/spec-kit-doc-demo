import { CheckCircle, Bot, Plug } from 'lucide-react';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Card, SectionHeader, Badge } from '../components/ui/Cards';

export default function Integration() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="blue">Integration Guide</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Integration Guide
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          Integrate Spec Kit with your AI coding agent and configure your project for Spec-Driven Development.
        </p>
      </div>

      {/* How integration works */}
      <section>
        <SectionHeader title="How Integration Works" />
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
          When you run <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400">specify init --integration &lt;agent&gt;</code>,
          Spec Kit installs agent-specific command files into your project. For GitHub Copilot, these are
          <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400">.prompt.md</code> files.
          For Claude, they are <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400">slash-command.md</code> files.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <Plug size={16} className="text-emerald-500" />
              <span className="font-bold text-slate-900 dark:text-white text-sm">GitHub Copilot</span>
            </div>
            <code className="text-xs text-slate-500 font-mono">.github/prompts/speckit.*.prompt.md</code>
            <p className="text-xs text-slate-500 mt-2">Slash commands in VS Code, JetBrains, GitHub.com</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <Bot size={16} className="text-blue-500" />
              <span className="font-bold text-slate-900 dark:text-white text-sm">Claude Code</span>
            </div>
            <code className="text-xs text-slate-500 font-mono">.claude/commands/speckit-*.md</code>
            <p className="text-xs text-slate-500 mt-2">Slash commands in Claude Code terminal agent</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <Bot size={16} className="text-violet-500" />
              <span className="font-bold text-slate-900 dark:text-white text-sm">Gemini CLI</span>
            </div>
            <code className="text-xs text-slate-500 font-mono">.gemini/commands/speckit-*.md</code>
            <p className="text-xs text-slate-500 mt-2">Slash commands in Gemini CLI</p>
          </Card>
        </div>
      </section>

      {/* Step-by-step for Copilot */}
      <section>
        <SectionHeader title="GitHub Copilot Integration" badge="Most Common" />
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Initialize with Copilot</h3>
            <CodeBlock
              code={`# Navigate to your project root (or create new project)
cd my-project

# Initialize Spec Kit with Copilot integration
specify init . --integration copilot --script sh

# Or create a new directory
specify init my-project --integration copilot`}
              language="bash"
              title="Initialize with GitHub Copilot"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">2. Verify installed prompts</h3>
            <CodeBlock
              code={`ls .github/prompts/
# speckit.analyze.prompt.md         speckit.git.remote.prompt.md
# speckit.checklist.prompt.md       speckit.git.validate.prompt.md
# speckit.clarify.prompt.md         speckit.implement.prompt.md
# speckit.constitution.prompt.md    speckit.plan.prompt.md
# speckit.git.commit.prompt.md      speckit.specify.prompt.md
# speckit.git.feature.prompt.md     speckit.tasks.prompt.md
# speckit.git.initialize.prompt.md  speckit.taskstoissues.prompt.md`}
              language="bash"
              title="List installed Copilot prompt files"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">3. Use slash commands</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
              Open GitHub Copilot Chat in VS Code or your editor and use the slash commands:
            </p>
            <CodeBlock
              code={`# In GitHub Copilot Chat (VS Code):
@workspace /speckit.constitution
# Prompt: Create principles focused on React TypeScript, accessibility, performance

@workspace /speckit.specify
# Prompt: Build a user authentication system with email/password and OAuth

@workspace /speckit.plan
# Prompt: Use React 19, TypeScript 5, Tailwind CSS. Deploy to Vercel.

@workspace /speckit.tasks

@workspace /speckit.implement`}
              language="bash"
              title="Using Copilot slash commands"
            />
          </div>
        </div>
      </section>

      {/* Claude integration */}
      <section>
        <SectionHeader title="Claude Code Integration" />
        <CodeBlock
          code={`# Initialize with Claude
specify init my-project --integration claude

# Verify
ls .claude/commands/
# speckit-constitution.md  speckit-plan.md   speckit-tasks.md
# speckit-specify.md       speckit-clarify.md speckit-implement.md

# In Claude Code terminal:
/speckit-constitution Create principles for a TypeScript microservices project
/speckit-specify Build a notification service with pub/sub and email/SMS delivery
/speckit-plan Use NestJS, RabbitMQ, PostgreSQL, Redis. Deploy to AWS ECS.
/speckit-tasks
/speckit-implement`}
          language="bash"
          title="Claude Code integration"
        />
      </section>

      {/* Multiple agents */}
      <section>
        <SectionHeader title="Multiple Agent Support" />
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
          You can have multiple AI agent integrations active in the same project simultaneously:
        </p>
        <CodeBlock
          code={`# Add a second integration to an existing project
cd my-project

specify integration add claude
specify integration add gemini

# Each agent gets its own command files
# .github/prompts/ (Copilot)
# .claude/commands/ (Claude)
# .gemini/commands/ (Gemini)

# Switch between agents freely — same .specify/ artifacts work with all`}
          language="bash"
          title="Multiple integrations"
        />
      </section>

      {/* Configuration management */}
      <section>
        <SectionHeader title="Configuration Management" />
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Extensions</h3>
            <CodeBlock
              code={`# Search available extensions
specify extension search

# Install an extension (e.g., git integration)
specify extension add git

# Install CI guard extension
specify extension add ci-guard

# List installed extensions
specify extension list`}
              language="bash"
              title="Manage extensions"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Presets</h3>
            <CodeBlock
              code={`# Search available presets
specify preset search

# Install a preset (e.g., agile methodology)
specify preset add agile

# Presets customize template format, terminology, workflow
# Example: adds Agile story-points, sprint terminology to spec templates
specify preset list`}
              language="bash"
              title="Manage presets"
            />
          </div>
        </div>
      </section>

      {/* Project structure */}
      <section>
        <SectionHeader title="Integration Layer Architecture" />
        <CodeBlock
          code={`# The Spec Kit integration layer (created by specify init)
.specify/
├── templates/
│   ├── constitution-template.md   # Template for /speckit.constitution
│   ├── spec-template.md           # Template for /speckit.specify
│   ├── plan-template.md           # Template for /speckit.plan
│   ├── tasks-template.md          # Template for /speckit.tasks
│   ├── checklist-template.md      # Template for /speckit.checklist
│   └── overrides/                 # Project-local template overrides
│
├── scripts/
│   └── bash/                      # Generated automation scripts (.sh)
│       ├── implement.sh
│       ├── tasks.sh
│       └── ...
│
├── memory/
│   └── constitution.md            # Your project's governing principles
│
├── extensions/
│   └── templates/                 # Installed extension templates
│
├── presets/
│   └── templates/                 # Installed preset overrides
│
├── workflows/                     # Automation workflow definitions
├── integrations/                  # Integration metadata
└── init-options.json              # How this project was initialized`}
          language="text"
          title="Spec Kit project structure"
        />
      </section>

      {/* Environment variables */}
      <section>
        <SectionHeader title="Environment Variables" />
        <div className="space-y-3">
          {[
            { name: 'SPECKIT_INTEGRATION', description: 'Default integration to use (overrides auto-detection)', example: 'copilot' },
            { name: 'SPECKIT_SCRIPT_TYPE', description: 'Default script type (sh or ps)', example: 'sh' },
            { name: 'SPECKIT_WORKFLOW_RUN_ID', description: 'Override workflow run ID (useful in CI/CD pipelines)', example: 'ci-run-${GITHUB_RUN_ID}' },
          ].map((env, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-1">
                <code className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">{env.name}</code>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{env.description}</p>
              <code className="text-xs text-slate-600 dark:text-slate-400 font-mono">Example: {env.name}="{env.example}"</code>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Card>
          <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-500" /> Integration Complete — Start Building
          </h3>
          <div className="space-y-2 text-sm">
            <a href="/workflows" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline">→ Workflows: Run your first /speckit.constitution</a>
            <a href="/commands" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline">→ Commands Reference: All slash commands explained</a>
            <a href="/examples" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline">→ Examples: See complete end-to-end workflows</a>
          </div>
        </Card>
      </section>
    </div>
  );
}
