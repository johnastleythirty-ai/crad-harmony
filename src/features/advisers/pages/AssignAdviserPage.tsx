import React from "react";
import { Users, UserPlus } from "lucide-react";
import { useSnackbar } from "@/shared/components/SnackbarProvider";

const unassigned = [
  { id: "S-101", name: "Carlos Mendoza", research: "R-2024-008", title: "Cloud-Based Library System" },
  { id: "S-102", name: "Rica Santos", research: "R-2024-009", title: "AI Chatbot for Student Services" },
];

const advisers = ["Dr. Maria Santos", "Prof. Jose Cruz", "Dr. Ana Reyes", "Prof. Mark Luna"];

export const AssignAdviserPage: React.FC = () => {
  const { show } = useSnackbar();
  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Users size={20} className="text-primary" /> Assign Adviser
        </h1>
        <p className="text-sm text-muted-foreground">Assign advisers to student research groups</p>
      </div>
      <div className="space-y-3">
        {unassigned.map((s) => (
          <div key={s.id} className="bg-card border border-border rounded-xl p-4 animate-slide-up">
            <p className="text-sm font-medium text-foreground">{s.name}</p>
            <p className="text-xs text-muted-foreground font-mono mb-3">{s.research} - {s.title}</p>
            <div className="flex items-center gap-2">
              <select className="flex-1 h-10 px-3 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors">
                <option value="">Select adviser</option>
                {advisers.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              <button onClick={() => show("Adviser assigned!", "success")}
                className="h-10 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5">
                <UserPlus size={14} /> Assign
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
