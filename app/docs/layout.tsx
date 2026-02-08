import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="flex items-center gap-1.5">
            <img src="/veto-darkmode.png" alt="Veto" className="h-5 hidden dark:block" />
            <img src="/veto-lightmode-full.png" alt="Veto" className="h-5 dark:hidden" />
            <span className="text-fd-muted-foreground text-sm font-normal">/docs</span>
          </span>
        ),
        url: '/',
      }}
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
