import Link from 'next/link';

const cards = [
  {
    title: 'SDKs',
    description: 'TypeScript and Python clients for any AI framework',
    href: '/docs/sdk',
  },
  {
    title: 'Rules',
    description: 'YAML-based policies for deterministic validation',
    href: '/docs/rules',
  },
  {
    title: 'API',
    description: 'REST endpoint for real-time tool call validation',
    href: '/docs/api',
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-fd-background text-fd-foreground">
      {/* Subtle grid background */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div className="animate-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
          <svg
            width="56"
            height="56"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-10"
          >
            <circle cx="16" cy="16" r="16" fill="#0a0a0a" stroke="#1f1f1f" strokeWidth="1" />
            <g transform="translate(16, 16)">
              <rect x="-6" y="-1.5" width="12" height="3" rx="1.5" fill="#f97316" />
              <rect x="-1.5" y="-6" width="3" height="12" rx="1.5" fill="#f97316" />
            </g>
          </svg>
        </div>

        <h1 className="mb-6 max-w-3xl text-center text-4xl font-medium tracking-[-0.03em] leading-[1.1] md:text-6xl animate-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          The permission layer for AI agents
        </h1>

        <p className="mb-12 max-w-2xl text-center text-lg text-fd-muted-foreground leading-relaxed md:text-xl animate-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
          Intercept, validate, and control every tool call your agents make. Built for teams deploying autonomous AI in production.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          <Link
            href="/docs"
            className="btn-primary px-8 py-4 text-sm font-semibold text-white tracking-wide"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/vetoai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 text-sm font-semibold tracking-wide"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-6 px-6 pb-32 md:grid-cols-3">
        {cards.map((card, i) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative border border-fd-border bg-fd-card p-8 transition-all duration-200 hover:border-fd-primary hover:bg-fd-card/80 animate-in opacity-0 [animation-fill-mode:forwards]"
            style={{ animationDelay: `${500 + i * 100}ms` }}
          >
            <div className="absolute inset-0 bg-fd-primary/0 group-hover:bg-fd-primary/5 transition-colors duration-200" />
            <div className="relative">
              <h3 className="mb-3 text-xl font-semibold tracking-tight">{card.title}</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">{card.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-fd-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                  <path d="M1 6h10m0 0L6 1m5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-32 animate-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Get started in seconds</h2>
          <p className="text-sm text-fd-muted-foreground">Wrap your tools and enforce policies instantly</p>
        </div>
        <div className="border border-fd-border bg-fd-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-fd-border px-4 py-3 bg-fd-muted/30">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-[#ff5f57]" />
              <span className="h-3 w-3 bg-[#febc2e]" />
              <span className="h-3 w-3 bg-[#28c840]" />
            </div>
            <span className="text-xs text-fd-muted-foreground font-mono">veto.ts</span>
          </div>
          <pre className="overflow-x-auto p-8 text-sm leading-loose">
            <code className="font-mono">
              <span className="text-purple-400">import</span>{' '}
              <span className="text-fd-foreground">{'{ Veto }'}</span>{' '}
              <span className="text-purple-400">from</span>{' '}
              <span className="text-green-400">{`'veto-sdk'`}</span>
              {'\n\n'}
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">veto</span>{' '}
              <span className="text-fd-muted-foreground">=</span>{' '}
              <span className="text-purple-400">await</span>{' '}
              <span className="text-blue-400">Veto</span>
              <span className="text-fd-muted-foreground">.</span>
              <span className="text-yellow-300">init</span>
              <span className="text-fd-muted-foreground">()</span>
              {'\n'}
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">safe</span>{' '}
              <span className="text-fd-muted-foreground">=</span>{' '}
              <span className="text-blue-400">veto</span>
              <span className="text-fd-muted-foreground">.</span>
              <span className="text-yellow-300">wrap</span>
              <span className="text-fd-muted-foreground">(</span>
              <span className="text-blue-400">tools</span>
              <span className="text-fd-muted-foreground">)</span>
            </code>
          </pre>
        </div>
      </section>

      <footer className="border-t border-fd-border bg-fd-card/50 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-6 text-fd-muted-foreground">
            <span className="font-medium">Plaw Inc</span>
            <span className="text-fd-border">·</span>
            <a
              href="https://github.com/vetoai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <span className="text-fd-border">·</span>
            <a
              href="https://runveto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground hover:underline underline-offset-4"
            >
              runveto.com
            </a>
          </div>
          <p className="text-xs text-fd-muted-foreground/80 italic tracking-wide">Autonomy, authorized.</p>
        </div>
      </footer>
    </div>
  );
}
