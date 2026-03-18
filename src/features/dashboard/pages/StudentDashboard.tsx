import React, { useState, useEffect } from "react";
import { useAuth } from "@/shared/hooks/useAuth";
import { useSnackbar } from "@/shared/components/SnackbarProvider";
import { StatSkeleton, CardSkeleton } from "@/shared/components/Skeletons";
import { StatusBadge } from "@/shared/components/StatusBadge";
import {
  FileText, Upload, CreditCard, Calendar, Bell, TrendingUp,
  Clock, CheckCircle2, AlertCircle, BookOpen, ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data
const mockResearch = [
  { id: "R-2024-001", title: "IoT-Based Smart Classroom Monitoring System", status: "review" as const, date: "Mar 15, 2026" },
  { id: "R-2024-002", title: "AI-Powered Student Performance Predictor", status: "pending" as const, date: "Mar 10, 2026" },
  { id: "R-2024-003", title: "Blockchain-Based Credential Verification", status: "approved" as const, date: "Feb 28, 2026" },
];

const mockNotifications = [
  { id: "1", message: "Your manuscript has been reviewed", time: "2h ago", read: false },
  { id: "2", message: "Defense schedule posted for March 25", time: "5h ago", read: false },
  { id: "3", message: "Payment verified for R-2024-001", time: "1d ago", read: true },
];

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const { show } = useSnackbar();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      show("Welcome back, " + (user?.name || "Student") + "!", "info");
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Total Research", value: "3", icon: <FileText size={18} />, change: "+1 this month", color: "text-primary" },
    { label: "Pending Review", value: "1", icon: <Clock size={18} />, change: "Awaiting adviser", color: "text-warning" },
    { label: "Approved", value: "1", icon: <CheckCircle2 size={18} />, change: "Ready for defense", color: "text-success" },
    { label: "Upcoming Defense", value: "1", icon: <Calendar size={18} />, change: "Mar 25, 2026", color: "text-secondary" },
  ];

  const quickActions = [
    { label: "Submit Research", icon: <FileText size={16} />, path: "/research/submit" },
    { label: "Upload Manuscript", icon: <Upload size={16} />, path: "/manuscripts/upload" },
    { label: "Upload Payment", icon: <CreditCard size={16} />, path: "/payments" },
    { label: "View Schedule", icon: <Calendar size={16} />, path: "/defense" },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="h-7 w-48 skeleton-shimmer rounded" />
          <div className="h-4 w-72 skeleton-shimmer rounded" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => <StatSkeleton key={i} />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight">
          Good day, {user?.name?.split(" ")[0]}! 👋
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">Here's your research progress overview</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow animate-slide-up">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
              <span className={stat.color}>{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-sm font-semibold text-foreground mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => navigate(action.path)}
              className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:bg-muted/30 hover:border-primary/20 transition-all min-h-[44px] group"
            >
              <span className="text-muted-foreground group-hover:text-primary transition-colors">{action.icon}</span>
              <span className="text-sm font-medium text-foreground">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Research list */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <BookOpen size={16} className="text-primary" />
              My Research
            </h2>
            <button onClick={() => navigate("/research/my")} className="text-xs text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight size={12} />
            </button>
          </div>
          <div className="divide-y divide-border">
            {mockResearch.map((r) => (
              <div key={r.id} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer min-h-[44px]">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
                  <p className="text-xs text-muted-foreground font-mono">{r.id}</p>
                </div>
                <StatusBadge variant={r.status}>{r.status}</StatusBadge>
                <span className="text-xs text-muted-foreground hidden sm:block">{r.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Bell size={16} className="text-primary" />
              Notifications
            </h2>
            <span className="text-[10px] bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-bold">2 new</span>
          </div>
          <div className="divide-y divide-border">
            {mockNotifications.map((n) => (
              <div key={n.id} className={`px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer min-h-[44px] ${!n.read ? "bg-primary/[0.02]" : ""}`}>
                <div className="flex items-start gap-2">
                  {!n.read && <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{n.message}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{n.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
