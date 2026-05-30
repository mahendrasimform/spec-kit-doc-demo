import { AlertTriangle, CheckCircle } from 'lucide-react';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Badge, SectionHeader } from '../components/ui/Cards';

const ISSUES = [
  {
    category: 'Installation',
    color: 'red',
    problems: [
      {
        problem: 'command not found: uv',
        solution: 'uv is not installed or not in PATH.',
        steps: [
          'Install uv: curl -LsSf https://astral.sh/uv/install.sh | sh',
          'Add to PATH: export PATH="$HOME/.local/bin:$PATH"',
          'Add permanently to ~/.bashrc or ~/.zshrc',
          'Restart your terminal',
        ],
        code: 'export PATH="$HOME/.local/bin:$PATH"\nuv --version',
      },
      {
        problem: 'command not found: specify',
        solution: 'specify is not in PATH after uv tool install.',
        steps: [
          'Ensure ~/.local/bin is in PATH (same as uv fix above)',
          'Re-run: uv tool install specify-cli --from git+...',
          'Try: uv tool list to see if specify-cli is listed',
        ],
        code: 'export PATH="$HOME/.local/bin:$PATH"\nspecify version',
      },
      {
        problem: 'Python version error: requires 3.11+',
        solution: 'Your system Python is too old. uv manages its own Python, so this usually only affects pipx installs.',
        steps: [
          'Use uv instead of pipx (uv manages Python internally)',
          'Or install Python 3.11+ from python.org',
          'Verify: python3 --version',
        ],
        code: 'python3 --version\n# Should be 3.11 or higher',
      },
      {
        problem: 'Git authentication error during install',
        solution: 'Git credential manager is not configured.',
        steps: [
          'Install Git Credential Manager for Linux',
          'Or use HTTPS with token: git config credential.helper store',
          'See: github.com/git-ecosystem/git-credential-manager',
        ],
        code: 'git config --global credential.helper store',
      },
    ],
  },
  {
    category: 'Configuration',
    color: 'amber',
    problems: [
      {
        problem: 'Error: Not a spec-kit project (no .specify/ directory)',
        solution: 'You are running specify commands from outside a Spec Kit project.',
        steps: [
          'Navigate to the project root containing .specify/',
          'Or run specify init to initialize a new project',
          'Check: ls -la | grep .specify',
        ],
        code: 'cd my-project\nspecify version  # Should work now',
      },
      {
        problem: 'Slash commands not appearing in AI agent',
        solution: 'Integration files were not created or the agent has not picked them up.',
        steps: [
          'Verify: ls .github/prompts/ (for Copilot)',
          'Or: ls .claude/commands/ (for Claude)',
          'Re-run: specify init . --integration copilot',
          'Reload/restart your AI agent',
        ],
        code: 'specify init . --integration copilot\nls .github/prompts/',
      },
      {
        problem: 'Templates not customized as expected',
        solution: 'Override priority may not be what you expect.',
        steps: [
          'Check resolution order: overrides/ > presets/ > extensions/ > core',
          'Put custom templates in .specify/templates/overrides/',
          'Verify preset is installed: specify preset list',
        ],
        code: 'ls .specify/templates/overrides/\nspecify preset list',
      },
    ],
  },
  {
    category: 'Workflows',
    color: 'blue',
    problems: [
      {
        problem: '/speckit.implement does not produce expected output',
        solution: 'The tasks file may be incomplete, or the AI agent needs more context.',
        steps: [
          'Run /speckit.analyze first to check cross-artifact consistency',
          'Ensure all tasks in .specify/tasks/ are clearly written',
          'Try running /speckit.implement for individual tasks',
          'Check if the constitution and plan files exist',
        ],
        code: '/speckit.analyze\n/speckit.implement  # Then retry',
      },
      {
        problem: 'Artifacts are out of sync (spec vs plan vs tasks)',
        solution: 'Requirements changed after artifacts were created.',
        steps: [
          'Run /speckit.analyze to identify inconsistencies',
          'Update the spec, then re-run /speckit.plan',
          'Re-run /speckit.tasks after plan update',
          'Run /speckit.analyze again before implementing',
        ],
        code: '/speckit.analyze\n# Review the report, update spec\n/speckit.plan  # Regenerate plan\n/speckit.tasks  # Regenerate tasks',
      },
      {
        problem: '/speckit.taskstoissues fails',
        solution: 'GitHub CLI (gh) is not installed or not authenticated.',
        steps: [
          'Install gh: https://cli.github.com/',
          'Authenticate: gh auth login',
          'Verify: gh auth status',
          'Ensure you have write access to the repository',
        ],
        code: 'gh auth login\ngh auth status\ngh repo view',
      },
    ],
  },
  {
    category: 'Enterprise / Air-Gapped',
    color: 'violet',
    problems: [
      {
        problem: 'Cannot access github.com during installation',
        solution: 'Install from a locally-built wheel bundle.',
        steps: [
          'On a machine with internet: git clone https://github.com/github/spec-kit.git',
          'Build wheel: cd spec-kit && uv build',
          'Transfer the .whl file to air-gapped environment',
          'Install: uv tool install specify-cli --from ./specify_cli-0.8.18-py3-none-any.whl',
        ],
        code: '# On internet-connected machine:\ngit clone https://github.com/github/spec-kit.git\ncd spec-kit\nuv build\n\n# Transfer dist/*.whl to air-gapped machine\n# On air-gapped machine:\nuv tool install specify-cli --from ./specify_cli-*.whl',
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  red: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400',
  amber: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400',
  blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400',
  violet: 'bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-400',
};

export default function Troubleshooting() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="amber">Support</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Troubleshooting
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          Solutions for common installation, configuration, and workflow issues.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-sm text-emerald-800 dark:text-emerald-300">
        If your issue is not listed here, open a GitHub issue at{' '}
        <a href="https://github.com/github/spec-kit/issues" target="_blank" rel="noopener noreferrer" className="underline font-medium">
          github.com/github/spec-kit/issues
        </a>.
        The Spec Kit team welcomes bug reports and questions.
      </div>

      {ISSUES.map((section, i) => (
        <section key={i}>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold mb-5 border ${colorMap[section.color]}`}>
            <AlertTriangle size={14} /> {section.category} Issues
          </div>
          <div className="space-y-6">
            {section.problems.map((prob, j) => (
              <div key={j} className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="flex items-start gap-2.5 p-4 bg-red-50 dark:bg-red-950/20 border-b border-slate-200 dark:border-slate-700">
                  <AlertTriangle size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <code className="text-sm font-mono font-medium text-red-700 dark:text-red-400">{prob.problem}</code>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400">{prob.solution}</p>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Resolution Steps</p>
                    <ul className="space-y-1.5">
                      {prob.steps.map((step, k) => (
                        <li key={k} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Command</p>
                    <CodeBlock code={prob.code} language="bash" id={`prob-${i}-${j}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Diagnostic commands */}
      <section>
        <SectionHeader title="Diagnostic Commands" subtitle="Run these to gather information when opening a bug report." />
        <CodeBlock
          code={`# Check Spec Kit installation
specify version

# Check all required tools
specify check

# Check if you're in a valid project
ls .specify/ 2>/dev/null && echo "✓ Valid project" || echo "✗ Not a spec-kit project"

# Check installed integrations
specify integration list 2>/dev/null || echo "Run from a spec-kit project"

# Check installed extensions
specify extension list 2>/dev/null || echo "Run from a spec-kit project"

# Check Python environment
uv --version
python3 --version

# Check Git
git --version
git config --global user.name`}
          language="bash"
          title="Diagnostic commands"
        />
      </section>
    </div>
  );
}
