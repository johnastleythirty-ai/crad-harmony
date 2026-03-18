import React from "react";
import { MessageSquare, Send } from "lucide-react";
import { useSnackbar } from "@/shared/components/SnackbarProvider";

const remarks = [
  { id: "1", research: "R-2024-005", student: "Pedro Garcia", message: "Please revise the methodology section. The sampling technique needs justification.", date: "Mar 14, 2026" },
  { id: "2", research: "R-2024-006", student: "Anna Lim", message: "Good progress on Chapter 2. Please add more related literature from 2024-2025.", date: "Mar 12, 2026" },
];

export const RemarksPage: React.FC = () => {
  const { show } = useSnackbar();
  return (
    <div className="max-w-2xl mx-auto space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <MessageSquare size={20} className="text-primary" /> Remarks & Feedback
        </h1>
        <p className="text-sm text-muted-foreground">View and add feedback for your advisees</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h2 className="text-sm font-semibold text-foreground">Add New Remark</h2>
        <select className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors">
          <option value="">Select student/research</option>
          <option>Pedro Garcia - R-2024-005</option>
          <option>Anna Lim - R-2024-006</option>
        </select>
        <textarea placeholder="Write your feedback..." rows={3}
          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors resize-none" />
        <button onClick={() => show("Remark sent!", "success")}
          className="h-10 px-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
          <Send size={14} /> Send Remark
        </button>
      </div>

      <div className="space-y-3">
        {remarks.map((r) => (
          <div key={r.id} className="bg-card border border-border rounded-xl p-4 animate-slide-up">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted-foreground font-mono">{r.research} · {r.student}</p>
              <span className="text-xs text-muted-foreground">{r.date}</span>
            </div>
            <p className="text-sm text-foreground">{r.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
