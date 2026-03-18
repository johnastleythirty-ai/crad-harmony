import React from "react";

export const RowSkeleton: React.FC<{ cols?: number }> = ({ cols = 4 }) => (
  <div className="flex items-center gap-4 py-3 px-4 border-b border-border/50 animate-pulse">
    <div className="h-8 w-8 rounded-lg skeleton-shimmer" />
    {Array.from({ length: cols }).map((_, i) => (
      <div key={i} className="flex-1">
        <div className={`h-4 skeleton-shimmer rounded ${i === 0 ? "w-3/4" : "w-1/2"}`} />
      </div>
    ))}
    <div className="h-6 w-20 skeleton-shimmer rounded-full" />
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="rounded-lg border border-border p-5 space-y-3 animate-pulse">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full skeleton-shimmer" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-2/3 skeleton-shimmer rounded" />
        <div className="h-3 w-1/3 skeleton-shimmer rounded" />
      </div>
    </div>
    <div className="h-3 w-full skeleton-shimmer rounded" />
    <div className="h-3 w-4/5 skeleton-shimmer rounded" />
  </div>
);

export const StatSkeleton: React.FC = () => (
  <div className="rounded-lg border border-border p-4 animate-pulse">
    <div className="h-3 w-1/2 skeleton-shimmer rounded mb-2" />
    <div className="h-7 w-1/3 skeleton-shimmer rounded mb-1" />
    <div className="h-2 w-2/3 skeleton-shimmer rounded" />
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number; cols?: number }> = ({ rows = 5, cols = 4 }) => (
  <div className="space-y-0">
    <div className="flex items-center gap-4 py-3 px-4 border-b border-border">
      {Array.from({ length: cols }).map((_, i) => (
        <div key={i} className="flex-1">
          <div className="h-3 w-2/3 skeleton-shimmer rounded" />
        </div>
      ))}
    </div>
    {Array.from({ length: rows }).map((_, i) => (
      <RowSkeleton key={i} cols={cols} />
    ))}
  </div>
);

export const PageSkeleton: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <div className="h-7 w-48 skeleton-shimmer rounded" />
        <div className="h-4 w-72 skeleton-shimmer rounded" />
      </div>
      <div className="h-9 w-32 skeleton-shimmer rounded-lg" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <StatSkeleton key={i} />
      ))}
    </div>
    <div className="rounded-lg border border-border overflow-hidden">
      <TableSkeleton rows={8} cols={5} />
    </div>
  </div>
);
