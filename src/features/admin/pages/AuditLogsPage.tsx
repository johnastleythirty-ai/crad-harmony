import React from "react";
import { ShieldCheck, Search } from "lucide-react";

const logs = [
  { action: "LOGIN", user: "juan@bestlink.edu.ph", details: "Student login successful", timestamp: "2026-03-18 09:15:32", ip: "192.168.1.105" },
  { action: "SUBMIT", user: "pgarcia@bestlink.edu.ph", details: "Research R-2024-008 submitted", timestamp: "2026-03-18 09:12:15", ip: "192.168.1.112" },
  { action: "APPROVE", user: "msantos@bestlink.edu.ph", details: "Research R-2024-003 approved", timestamp: "2026-03-18 08:45:00", ip: "192.168.1.50" },
  { action: "PAYMENT", user: "areyes@bestlink.edu.ph", details: "PAY-003 verified", timestamp: "2026-03-18 08:30:22", ip: "192.168.1.55" },
  { action: "UPDATE", user: "admin@bestlink.edu.ph", details: "System settings updated", timestamp: "2026-03-17 17:00:00", ip: "192.168.1.1" },
];

export const AuditLogsPage: React.FC = () => (
  <div className="space-y-5 animate-fade-in">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <ShieldCheck size={20} className="text-primary" /> Audit Logs
        </h1>
        <p className="text-sm text-muted-foreground">System activity and security logs</p>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-input bg-background">
        <Search size={14} className="text-muted-foreground" />
        <input placeholder="Search logs..." className="bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground w-32" />
      </div>
    </div>
    <div className="bg-card border border-border rounded-xl overflow-hidden divide-y divide-border">
      {logs.map((l, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors min-h-[44px]">
          <span className="text-[10px] font-mono font-bold bg-muted px-2 py-1 rounded text-muted-foreground w-16 text-center flex-shrink-0">{l.action}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground">{l.details}</p>
            <p className="text-xs text-muted-foreground">{l.user} · {l.ip}</p>
          </div>
          <span className="text-xs text-muted-foreground font-mono whitespace-nowrap hidden sm:block">{l.timestamp}</span>
        </div>
      ))}
    </div>
  </div>
);
