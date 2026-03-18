import React from "react";
import { StatusBadge } from "@/shared/components/StatusBadge";
import { UserCheck, CheckCircle2, XCircle } from "lucide-react";
import { useSnackbar } from "@/shared/components/SnackbarProvider";

const research = [
  { id: "R-2024-005", title: "Smart Parking System Using ESP32", student: "Pedro Garcia", status: "pending" as const },
  { id: "R-2024-006", title: "Mobile App for Campus Navigation", student: "Anna Lim", status: "review" as const },
];

export const ApproveResearchPage: React.FC = () => {
  const { show } = useSnackbar();
  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <UserCheck size={20} className="text-primary" /> Approve/Reject Research
        </h1>
        <p className="text-sm text-muted-foreground">Review and decide on research proposals</p>
      </div>
      <div className="space-y-3">
        {research.map((r) => (
          <div key={r.id} className="bg-card border border-border rounded-xl p-4 animate-slide-up">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-foreground">{r.title}</p>
                <p className="text-xs text-muted-foreground"><span className="font-mono">{r.id}</span> · {r.student}</p>
              </div>
              <StatusBadge variant={r.status}>{r.status}</StatusBadge>
            </div>
            <div className="flex gap-2">
              <button onClick={() => show("Research approved!", "success")} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-success/10 text-success text-xs font-semibold hover:bg-success/20 transition-colors min-h-[44px]">
                <CheckCircle2 size={14} /> Approve
              </button>
              <button onClick={() => show("Research rejected", "error")} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-destructive/10 text-destructive text-xs font-semibold hover:bg-destructive/20 transition-colors min-h-[44px]">
                <XCircle size={14} /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
