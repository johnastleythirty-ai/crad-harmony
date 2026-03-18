import React from "react";
import { Archive, Search, Download } from "lucide-react";
import { StatusBadge } from "@/shared/components/StatusBadge";

const archived = [
  { id: "R-2023-089", title: "Automated Attendance Using RFID", authors: "Garcia et al.", year: "2023", status: "completed" as const },
  { id: "R-2023-076", title: "Mobile POS System for SMEs", authors: "Reyes et al.", year: "2023", status: "archived" as const },
  { id: "R-2022-045", title: "E-Learning Platform with Gamification", authors: "Santos et al.", year: "2022", status: "completed" as const },
];

export const ArchivePage: React.FC = () => (
  <div className="space-y-5 animate-fade-in">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Archive size={20} className="text-primary" /> Research Archive
        </h1>
        <p className="text-sm text-muted-foreground">Browse completed and archived research</p>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-input bg-background">
        <Search size={14} className="text-muted-foreground" />
        <input placeholder="Search archive..." className="bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground w-40" />
      </div>
    </div>
    <div className="bg-card border border-border rounded-xl overflow-hidden divide-y divide-border">
      {archived.map((r) => (
        <div key={r.id} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors min-h-[44px]">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{r.title}</p>
            <p className="text-xs text-muted-foreground"><span className="font-mono">{r.id}</span> · {r.authors} · {r.year}</p>
          </div>
          <StatusBadge variant={r.status}>{r.status}</StatusBadge>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors"><Download size={14} className="text-muted-foreground" /></button>
        </div>
      ))}
    </div>
  </div>
);
