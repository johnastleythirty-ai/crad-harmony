import React from "react";
import { CreditCard, CheckCircle2, XCircle } from "lucide-react";
import { useSnackbar } from "@/shared/components/SnackbarProvider";
import { StatusBadge } from "@/shared/components/StatusBadge";

const payments = [
  { id: "PAY-004", student: "Juan Dela Cruz", research: "R-2024-001", amount: "₱2,500", date: "Mar 15, 2026", status: "pending" as const },
  { id: "PAY-005", student: "Anna Lim", research: "R-2024-006", amount: "₱2,500", date: "Mar 14, 2026", status: "pending" as const },
];

export const VerifyPaymentsPage: React.FC = () => {
  const { show } = useSnackbar();
  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <CreditCard size={20} className="text-primary" /> Verify Payments
        </h1>
        <p className="text-sm text-muted-foreground">Review and verify student payment submissions</p>
      </div>
      <div className="space-y-3">
        {payments.map((p) => (
          <div key={p.id} className="bg-card border border-border rounded-xl p-4 animate-slide-up">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-foreground">{p.student}</p>
                <p className="text-xs text-muted-foreground"><span className="font-mono">{p.id}</span> · {p.research} · {p.amount}</p>
              </div>
              <StatusBadge variant={p.status}>{p.status}</StatusBadge>
            </div>
            <div className="flex gap-2">
              <button onClick={() => show("Payment verified!", "success")} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-success/10 text-success text-xs font-semibold hover:bg-success/20 transition-colors min-h-[44px]">
                <CheckCircle2 size={14} /> Verify
              </button>
              <button onClick={() => show("Payment rejected", "error")} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-destructive/10 text-destructive text-xs font-semibold hover:bg-destructive/20 transition-colors min-h-[44px]">
                <XCircle size={14} /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
