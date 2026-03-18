import React, { useState, useEffect, useCallback } from "react";
import { Search, Command } from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  action: () => void;
  category: string;
}

interface Props {
  items: CommandItem[];
}

export const CommandPalette: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((o) => !o);
    }
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]" onClick={() => setOpen(false)}>
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={16} className="text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground"
          />
          <kbd className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono text-muted-foreground">
            <Command size={10} /> K
          </kbd>
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {Object.entries(grouped).length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">No results found.</p>
          )}
          {Object.entries(grouped).map(([category, catItems]) => (
            <div key={category} className="mb-2">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-1">
                {category}
              </p>
              {catItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { item.action(); setOpen(false); setQuery(""); }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-muted/60 transition-colors group"
                >
                  {item.icon && <span className="text-muted-foreground group-hover:text-primary transition-colors">{item.icon}</span>}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                    {item.description && <p className="text-xs text-muted-foreground truncate">{item.description}</p>}
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
