import { CheckCircle, AlertTriangle, Download, ExternalLink } from 'lucide-react';
import { SPEC_KIT_CONFIG } from '../spec-kit';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Card, Badge, SectionHeader } from '../components/ui/Cards';

export default function Installation() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="success">v{SPEC_KIT_CONFIG.version}</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Installation Guide
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          Install Spec Kit's specify-cli tool and initialize your first project. Supports Linux, macOS, and Windows.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-amber-800 dark:text-amber-300 flex items-start gap-2">
            <AlertTriangle size={15} className="shrink-0 mt-0.5" />
            <span>
              <strong>Official packages only:</strong> Install exclusively from{' '}
              <code className="font-mono text-xs">git+https://github.com/github/spec-kit.git</code>.
              Any packages on PyPI with the same name are <em>not</em> maintained by the Spec Kit team.
            </span>
          </p>
        </div>
      </div>

      {/* Prerequisites */}
      <section>
        <SectionHeader title="Prerequisites" />
        <div className="space-y-3">
          {SPEC_KIT_CONFIG.prerequisites.map((prereq, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">{prereq.name}</span>
                  <span className="text-xs text-slate-500">{prereq.description}</span>
                </div>
                <a href={prereq.url} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 mt-0.5">
                  {prereq.url} <ExternalLink size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Install uv */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step 1: Install uv</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
          uv is the recommended package manager for specify-cli. Install it with the official installer:
        </p>
        <CodeBlock
          code={`# Linux / macOS
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows (PowerShell)
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# Verify
uv --version`}
          language="bash"
          title="Install uv"
        />
        <p className="text-xs text-slate-500 mt-2">
          Alternative: use <a href="https://pipx.pypa.io/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">pipx</a> instead of uv.
        </p>
      </section>

      {/* Install specify-cli */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step 2: Install specify-cli</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
          Install the latest stable release (v{SPEC_KIT_CONFIG.version}):
        </p>
        <CodeBlock
          code={SPEC_KIT_CONFIG.installCommand}
          language="bash"
          title="Install specify-cli via uv"
        />

        <div className="mt-4">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Alternative: pipx</p>
          <CodeBlock
            code={`pipx install git+https://github.com/github/spec-kit.git@v${SPEC_KIT_CONFIG.version}`}
            language="bash"
            title="Install via pipx"
          />
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Alternative: One-time usage (uvx, no persistent install)</p>
          <CodeBlock
            code={`uvx --from git+https://github.com/github/spec-kit.git specify init my-project --integration copilot`}
            language="bash"
            title="Run without installing"
          />
        </div>
      </section>

      {/* Verify */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step 3: Verify Installation</h2>
        <CodeBlock
          code={`specify version
# Expected output:
# CLI Version    0.8.18
# Python         3.11+
# Platform       Linux/macOS/Windows`}
          language="bash"
          title="Verify"
        />
      </section>

      {/* Initialize */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step 4: Initialize a Project</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
          Run <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-emerald-600 dark:text-emerald-400">specify init</code> in your project directory:
        </p>
        <CodeBlock
          code={`# With GitHub Copilot (default)
specify init my-project --integration copilot

# With Claude Code
specify init my-project --integration claude

# With Gemini CLI
specify init my-project --integration gemini

# With Cursor
specify init my-project --integration cursor

# List all available integrations
specify integration list`}
          language="bash"
          title="Initialize project"
        />
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          This creates the <code className="font-mono text-xs">.specify/</code> directory structure with templates, scripts, and integration-specific command files.
        </p>
      </section>

      {/* Directory structure */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Structure After Init</h2>
        <CodeBlock
          code={`my-project/
├── .specify/
│   ├── templates/          # SDD artifact templates
│   │   ├── constitution-template.md
│   │   ├── spec-template.md
│   │   ├── plan-template.md
│   │   ├── tasks-template.md
│   │   └── checklist-template.md
│   ├── scripts/
│   │   └── bash/           # Automation scripts (.sh)
│   ├── memory/             # Project knowledge (constitution)
│   ├── extensions/         # Installed extensions
│   ├── presets/            # Installed presets
│   ├── workflows/          # Automation workflows
│   └── integrations/       # Integration config
│
├── .github/
│   └── prompts/            # GitHub Copilot slash commands
│       ├── speckit.specify.prompt.md
│       ├── speckit.plan.prompt.md
│       ├── speckit.tasks.prompt.md
│       ├── speckit.implement.prompt.md
│       └── ... (more commands)
│
└── ... (your project files)`}
          language="text"
          title="Project structure"
        />
      </section>

      {/* Supported agents */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Supported AI Coding Agents</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {SPEC_KIT_CONFIG.supportedAgents.map((agent, i) => (
            <div key={i} className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 text-center">
              {agent}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Run <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-emerald-600 dark:text-emerald-400">specify integration list</code> to see all available integrations in your installed version.
        </p>
      </section>

      {/* Troubleshooting */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Common Installation Issues</h2>
        <div className="space-y-4">
          {[
            {
              problem: 'command not found: uv',
              solution: 'uv is not installed or not in PATH. Run the uv installer and ensure ~/.local/bin is in your PATH: export PATH="$HOME/.local/bin:$PATH"',
            },
            {
              problem: 'command not found: specify',
              solution: 'After installing with uv tool install, ensure ~/.local/bin is in PATH. Run: export PATH="$HOME/.local/bin:$PATH"',
            },
            {
              problem: 'Python 3.10 not supported',
              solution: 'specify-cli requires Python 3.11+. uv manages its own Python, so this is usually not an issue when using uv. Install Python 3.11+ if using pipx.',
            },
            {
              problem: 'Git credential issues on Linux',
              solution: 'Install Git Credential Manager. See the air-gapped installation guide for details.',
            },
            {
              problem: 'Error: Not a spec-kit project',
              solution: 'Run specify commands from the project root containing the .specify/ directory. Use "cd my-project" first.',
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-red-50 dark:bg-red-950/30 border-b border-red-100 dark:border-red-900">
                <AlertTriangle size={13} className="text-red-500" />
                <code className="text-xs font-mono text-red-700 dark:text-red-400">{item.problem}</code>
              </div>
              <div className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle size={13} className="text-emerald-500 inline mr-1.5" />
                {item.solution}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section>
        <Card>
          <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Download size={16} className="text-emerald-500" /> Installation Complete — Next Steps
          </h3>
          <div className="space-y-2 text-sm">
            <a href="/integration" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline">→ Integration Guide: Configure your AI agent</a>
            <a href="/workflows" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline">→ Workflows: Run your first SDD workflow</a>
            <a href="/commands" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline">→ Commands Reference: All available commands</a>
          </div>
        </Card>
      </section>
    </div>
  );
}
