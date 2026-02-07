import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="text-lg font-bold tracking-tight">
            <span className="text-fd-primary">veto</span>
            <span className="text-fd-muted-foreground">/docs</span>
          </span>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
