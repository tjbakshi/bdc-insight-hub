import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export function Footer() {
  // In a real app, these would come from environment variables or build process
  const version = '1.0.0';
  const commitHash = 'abc123f';

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="font-bold">BDC Tracker</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for tracking Business Development Company investments.
          </p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>v{version}</span>
          <span>•</span>
          <span className="font-mono">{commitHash}</span>
        </div>
      </div>
    </footer>
  );
}