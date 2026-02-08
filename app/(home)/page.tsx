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
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6">
        <div className="animate-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
          <img
            src="/veto-darkmode-icon.png"
            alt=""
            className="mb-10 h-14 hidden dark:block"
          />
          <img
            src="/veto-lightmode-icon.png"
            alt=""
            className="mb-10 h-14 dark:hidden"
          />
        </div>

        <h1 className="mb-6 max-w-3xl text-center text-4xl font-medium tracking-[-0.03em] leading-[1.1] md:text-6xl animate-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          The permission layer for AI agents
        </h1>

        <p className="mb-12 max-w-2xl text-center text-lg text-fd-muted-foreground leading-relaxed md:text-xl animate-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
          Intercept, validate, and control every tool call your agents make.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          <Link
            href="/docs"
            className="btn-primary px-8 py-4 text-sm font-semibold tracking-wide"
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
            className="group relative border border-fd-border bg-fd-card p-8 transition-all duration-200 hover:border-fd-primary animate-in opacity-0 [animation-fill-mode:forwards]"
            style={{ animationDelay: `${500 + i * 100}ms` }}
          >
            <h3 className="mb-3 text-xl font-semibold tracking-tight">{card.title}</h3>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">{card.description}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-32 animate-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
        <div className="border border-fd-border bg-fd-card">
          <div className="flex items-center justify-between border-b border-fd-border px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-[#ff5f57]" />
              <span className="h-3 w-3 bg-[#febc2e]" />
              <span className="h-3 w-3 bg-[#28c840]" />
            </div>
            <span className="text-xs text-fd-muted-foreground font-mono">veto.ts</span>
          </div>
          <pre className="overflow-x-auto p-8 text-sm leading-loose">
            <code className="font-mono">
              <span className="text-purple-400 dark:text-purple-400 text-purple-600">import</span>{' '}
              <span className="text-fd-foreground">{'{ Veto }'}</span>{' '}
              <span className="text-purple-400 dark:text-purple-400 text-purple-600">from</span>{' '}
              <span className="text-green-600 dark:text-green-400">{`'veto-sdk'`}</span>
              {'\n\n'}
              <span className="text-purple-400 dark:text-purple-400 text-purple-600">const</span>{' '}
              <span className="text-blue-600 dark:text-blue-400">veto</span>{' '}
              <span className="text-fd-muted-foreground">=</span>{' '}
              <span className="text-purple-400 dark:text-purple-400 text-purple-600">await</span>{' '}
              <span className="text-blue-600 dark:text-blue-400">Veto</span>
              <span className="text-fd-muted-foreground">.</span>
              <span className="text-yellow-600 dark:text-yellow-300">init</span>
              <span className="text-fd-muted-foreground">()</span>
              {'\n'}
              <span className="text-purple-400 dark:text-purple-400 text-purple-600">const</span>{' '}
              <span className="text-blue-600 dark:text-blue-400">safe</span>{' '}
              <span className="text-fd-muted-foreground">=</span>{' '}
              <span className="text-blue-600 dark:text-blue-400">veto</span>
              <span className="text-fd-muted-foreground">.</span>
              <span className="text-yellow-600 dark:text-yellow-300">wrap</span>
              <span className="text-fd-muted-foreground">(</span>
              <span className="text-blue-600 dark:text-blue-400">tools</span>
              <span className="text-fd-muted-foreground">)</span>
            </code>
          </pre>
        </div>
      </section>

      <footer className="border-t border-fd-border px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-6 text-fd-muted-foreground">
            <span className="font-medium">Plaw Inc</span>
            <span className="text-fd-border">·</span>
            <a
              href="https://github.com/vetoai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              GitHub
            </a>
            <span className="text-fd-border">·</span>
            <a
              href="https://runveto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
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
