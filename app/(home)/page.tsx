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
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        <svg
          width="48"
          height="48"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-8"
        >
          <circle cx="16" cy="16" r="16" fill="#0a0a0a" stroke="#1f1f1f" strokeWidth="1" />
          <g transform="translate(16, 16)">
            <rect x="-6" y="-1.5" width="12" height="3" rx="1.5" fill="#f97316" />
            <rect x="-1.5" y="-6" width="3" height="12" rx="1.5" fill="#f97316" />
          </g>
        </svg>
        <h1 className="mb-4 text-center text-4xl font-medium tracking-[-0.03em] leading-[1.1] md:text-5xl">
          The permission layer for AI agents
        </h1>
        <p className="mb-10 max-w-xl text-center text-lg text-fd-muted-foreground md:text-xl">
          Intercept, validate, and control every tool call your agents make.
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs"
            className="btn-primary px-6 py-3 text-sm font-medium text-white"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/vetoai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3 text-sm font-medium"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-4xl gap-4 px-6 pb-24 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary"
          >
            <h3 className="mb-2 text-lg font-medium">{card.title}</h3>
            <p className="text-sm text-fd-muted-foreground">{card.description}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 pb-24">
        <div className="border border-fd-border bg-fd-card">
          <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3">
            <span className="h-3 w-3 bg-[#ff5f57]" />
            <span className="h-3 w-3 bg-[#febc2e]" />
            <span className="h-3 w-3 bg-[#28c840]" />
            <span className="ml-2 text-xs text-fd-muted-foreground font-mono">veto.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
            <code className="font-mono">
              <span className="text-fd-muted-foreground">import</span>{' '}
              <span className="text-fd-foreground">{'{ Veto }'}</span>{' '}
              <span className="text-fd-muted-foreground">from</span>{' '}
              <span className="text-fd-primary">{`'veto-sdk'`}</span>
              {'\n'}
              <span className="text-fd-muted-foreground">const</span>{' '}
              <span className="text-fd-foreground">veto</span>{' '}
              <span className="text-fd-muted-foreground">=</span>{' '}
              <span className="text-fd-muted-foreground">await</span>{' '}
              <span className="text-fd-foreground">Veto</span>
              <span className="text-fd-muted-foreground">.</span>
              <span className="text-fd-foreground">init</span>
              <span className="text-fd-muted-foreground">()</span>
              {'\n'}
              <span className="text-fd-muted-foreground">const</span>{' '}
              <span className="text-fd-foreground">safe</span>{' '}
              <span className="text-fd-muted-foreground">=</span>{' '}
              <span className="text-fd-foreground">veto</span>
              <span className="text-fd-muted-foreground">.</span>
              <span className="text-fd-foreground">wrap</span>
              <span className="text-fd-muted-foreground">(</span>
              <span className="text-fd-foreground">tools</span>
              <span className="text-fd-muted-foreground">)</span>
            </code>
          </pre>
        </div>
      </section>

      <footer className="border-t border-fd-border px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-sm text-fd-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Plaw Inc</span>
            <span className="text-fd-border">|</span>
            <a
              href="https://github.com/vetoai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              GitHub
            </a>
            <span className="text-fd-border">|</span>
            <a
              href="https://runveto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              runveto.com
            </a>
          </div>
          <p className="italic">Autonomy, authorized.</p>
        </div>
      </footer>
    </div>
  );
}
