import React, { useState, useEffect } from "react";
import { useAuth } from "@/shared/hooks/useAuth";
import { StatSkeleton } from "@/shared/components/Skeletons";
import { Users, FileText, ShieldCheck, Settings, TrendingUp, Activity, BookOpen, Calendar } from "lucide-react";

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { label: "Total Users", value: "1,247", icon: <Users size={18} />, change: "+23 this week", color: "text-primary" },
    { label: "Total Research", value: "342", icon: <FileText size={18} />, change: "+8 this month", color: "text-secondary" },
    { label: "Active Defense", value: "12", icon: <Calendar size={18} />, change: "This semester", color: "text-success" },
    { label: "System Health", value: "99.9%", icon: <Activity size={18} />, change: "All services up", color: "text-success" },
  ];

  const recentLogs = [
    { action: "User 'pedro.garcia' submitted research R-2024-008", time: "2 min ago", type: "info" },
    { action: "Payment PAY-004 verified by staff 'areyes'", time: "15 min ago", type: "success" },
    { action: "Defense schedule updated for Mar 28", time: "1h ago", type: "info" },
    { action: "New user registration: 'maria.lopez@bestlink.edu.ph'", time: "2h ago", type: "info" },
    { action: "Research R-2024-003 approved by adviser 'msantos'", time: "3h ago", type: "success" },
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
        <h1 className="text-xl lg:text-2xl font-bold text-foreground">Admin Dashboard ⚡</h1>
        <p className="text-sm text-muted-foreground">System overview and management</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 animate-slide-up">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
              <span className={s.color}>{s.icon}</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{s.change}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <ShieldCheck size={16} className="text-primary" /> Recent Activity Logs
          </h2>
        </div>
        <div className="divide-y divide-border">
          {recentLogs.map((log, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 min-h-[44px]">
              <div className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${log.type === "success" ? "bg-success" : "bg-primary"}`} />
              <p className="text-sm text-foreground flex-1">{log.action}</p>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
