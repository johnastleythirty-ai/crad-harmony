import React, { useState, useEffect } from "react";
import { useAuth } from "@/shared/hooks/useAuth";
import { StatSkeleton } from "@/shared/components/Skeletons";
import { StatusBadge } from "@/shared/components/StatusBadge";
import { CreditCard, Calendar, Users, Archive, Megaphone, Clock, CheckCircle2 } from "lucide-react";

const mockPayments = [
  { id: "PAY-001", student: "Juan Dela Cruz", research: "R-2024-001", amount: "₱2,500", status: "pending" as const },
  { id: "PAY-002", student: "Anna Lim", research: "R-2024-006", amount: "₱2,500", status: "pending" as const },
  { id: "PAY-003", student: "Pedro Garcia", research: "R-2024-005", amount: "₱2,500", status: "approved" as const },
];

export const StaffDashboard: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { label: "Pending Payments", value: "5", icon: <CreditCard size={18} />, color: "text-warning" },
    { label: "Defense This Week", value: "3", icon: <Calendar size={18} />, color: "text-secondary" },
    { label: "Unassigned Students", value: "4", icon: <Users size={18} />, color: "text-accent" },
    { label: "Archived Research", value: "142", icon: <Archive size={18} />, color: "text-muted-foreground" },
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
        <h1 className="text-xl lg:text-2xl font-bold text-foreground">Staff Dashboard 🗂️</h1>
        <p className="text-sm text-muted-foreground">Manage payments, schedules, and assignments</p>
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
        <div className="px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <CreditCard size={16} className="text-primary" /> Pending Payment Verifications
          </h2>
        </div>
        <div className="divide-y divide-border">
          {mockPayments.map((p) => (
            <div key={p.id} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer min-h-[44px]">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{p.student}</p>
                <p className="text-xs text-muted-foreground font-mono">{p.id} · {p.research}</p>
              </div>
              <span className="text-sm font-semibold text-foreground">{p.amount}</span>
              <StatusBadge variant={p.status}>{p.status}</StatusBadge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
