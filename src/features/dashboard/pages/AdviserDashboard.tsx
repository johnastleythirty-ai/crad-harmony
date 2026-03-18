import React, { useState, useEffect } from "react";
import { useAuth } from "@/shared/hooks/useAuth";
import { StatSkeleton } from "@/shared/components/Skeletons";
import { StatusBadge } from "@/shared/components/StatusBadge";
import { FileText, Users, CheckCircle2, Clock, AlertCircle, Calendar, ArrowRight } from "lucide-react";

const mockPending = [
  { id: "R-2024-005", title: "Smart Parking System Using ESP32", student: "Pedro Garcia", submitted: "Mar 14, 2026", status: "pending" as const },
  { id: "R-2024-006", title: "Mobile App for Campus Navigation", student: "Anna Lim", submitted: "Mar 12, 2026", status: "review" as const },
  { id: "R-2024-007", title: "E-Waste Management Platform", student: "Mark Tan", submitted: "Mar 10, 2026", status: "pending" as const },
];

export const AdviserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { label: "Assigned Students", value: "12", icon: <Users size={18} />, color: "text-primary" },
    { label: "Pending Reviews", value: "3", icon: <Clock size={18} />, color: "text-warning" },
    { label: "Approved", value: "8", icon: <CheckCircle2 size={18} />, color: "text-success" },
    { label: "Upcoming Defense", value: "2", icon: <Calendar size={18} />, color: "text-secondary" },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-7 w-48 skeleton-shimmer rounded" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => <StatSkeleton key={i} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-foreground">Welcome, {user?.name?.split(" ").pop()}! 📚</h1>
        <p className="text-sm text-muted-foreground">Manuscripts and research awaiting your review</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 animate-slide-up">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
              <span className={s.color}>{s.icon}</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <FileText size={16} className="text-primary" /> Pending Reviews
          </h2>
        </div>
        <div className="divide-y divide-border">
          {mockPending.map((r) => (
            <div key={r.id} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer min-h-[44px]">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-mono">{r.id}</span> · {r.student}
                </p>
              </div>
              <StatusBadge variant={r.status}>{r.status}</StatusBadge>
              <span className="text-xs text-muted-foreground hidden sm:block">{r.submitted}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
