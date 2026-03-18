import React from "react";
import { BookOpen, Search } from "lucide-react";
import { StatusBadge } from "@/shared/components/StatusBadge";

const research = [
  { id: "R-2024-001", title: "IoT-Based Smart Classroom Monitoring System", student: "Juan Dela Cruz", adviser: "Dr. Santos", status: "review" as const },
  { id: "R-2024-002", title: "AI-Powered Student Performance Predictor", student: "Group 2", adviser: "Pending", status: "pending" as const },
  { id: "R-2024-003", title: "Blockchain-Based Credential Verification", student: "Group 3", adviser: "Dr. Santos", status: "approved" as const },
  { id: "R-2024-005", title: "Smart Parking System Using ESP32", student: "Pedro Garcia", adviser: "Dr. Santos", status: "pending" as const },
  { id: "R-2024-006", title: "Mobile App for Campus Navigation", student: "Anna Lim", adviser: "Prof. Cruz", status: "review" as const },
];

export const AllResearchPage: React.FC = () => (
  <div className="space-y-5 animate-fade-in">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <BookOpen size={20} className="text-primary" /> All Research
        </h1>
        <p className="text-sm text-muted-foreground">Complete overview of all research submissions</p>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-input bg-background">
        <Search size={14} className="text-muted-foreground" />
        <input placeholder="Search..." className="bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground w-32" />
      </div>
    </div>
    <div className="bg-card border border-border rounded-xl overflow-hidden divide-y divide-border">
      {research.map((r) => (
        <div key={r.id} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer min-h-[44px]">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
            <p className="text-xs text-muted-foreground"><span className="font-mono">{r.id}</span> · {r.student} · {r.adviser}</p>
          </div>
          <StatusBadge variant={r.status}>{r.status}</StatusBadge>
        </div>
      ))}
    </div>
  </div>
);
