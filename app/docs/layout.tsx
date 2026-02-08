import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <img src="/veto-darkmode-icon.png" alt="Veto" width={24} height={24} />
            <span>
              <span className="text-fd-primary">veto</span>
              <span className="text-fd-muted-foreground">/docs</span>
            </span>
          </span>
        ),
        url: '/',
      }}
      links={[
        {
          text: 'GitHub',
          url: 'https://github.com/vetoai',
          external: true,
        },
        {
          text: 'runveto.com',
          url: 'https://runveto.com',
          external: true,
        },
      ]}
      sidebar={{
        footer: (
          <div className="flex flex-col gap-2 border-t border-fd-border px-4 py-4 text-xs text-fd-muted-foreground">
            <div className="flex items-center gap-3">
              <a href="https://github.com/vetoai" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">
                GitHub
              </a>
              <a href="https://runveto.com" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">
                runveto.com
              </a>
            </div>
            <p className="italic">Autonomy, authorized.</p>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
