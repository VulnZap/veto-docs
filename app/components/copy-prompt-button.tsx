'use client';

import { useState, useCallback } from 'react';

const AGENT_PROMPT = `## Task: Integrate Veto SDK into this codebase

Veto is the authorization layer for AI agents — it intercepts every tool call and validates
it against rules before execution. The agent never knows the guardrail exists.

### Instructions

1. Read the full documentation: https://docs.runveto.com/llms.txt
2. Install the SDK:
   - TypeScript: \`npm install veto-sdk\`
   - Python: \`pip install veto\`
3. Initialize: \`npx veto init\` (creates \`veto/\` directory with config and rules)
4. Find where tools are defined in this codebase and wrap them with \`veto.wrap(tools)\`
5. Create sensible default rules in \`veto/rules/default.yaml\` based on the tools in use

### Key integration pattern

\`\`\`typescript
import { Veto } from 'veto-sdk';
const veto = await Veto.init();
const wrappedTools = veto.wrap(existingTools); // drop-in replacement
\`\`\`

### Reference docs

- Quick start: https://docs.runveto.com/docs/getting-started/quick-start
- YAML rule format: https://docs.runveto.com/docs/rules/yaml-format
- Framework-specific guides: https://docs.runveto.com/docs/integrations/openai-sdk
  (also: anthropic-sdk, vercel-ai, langchain, langgraph, mcp, browser-use,
   openai-agents, crewai, pydanticai, playwright, google-gemini)

### Optional: enable cloud mode

If you have a Veto API key, pass it to init for dashboard + approvals + LLM policies:
\`\`\`typescript
const veto = await Veto.init({ apiKey: process.env.VETO_API_KEY });
\`\`\``;

export function CopyPromptButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(AGENT_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {copied ? (
          <path d="M20 6 9 17l-5-5" />
        ) : (
          <>
            <rect width="14" height="14" x="8" y="8" rx="0" ry="0" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </>
        )}
      </svg>
      {copied ? 'Copied!' : 'Copy agent prompt'}
    </button>
  );
}
