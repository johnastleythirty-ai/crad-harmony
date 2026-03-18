import React from "react";
import { Megaphone, Plus, Pin } from "lucide-react";
import { useSnackbar } from "@/shared/components/SnackbarProvider";

const announcements = [
  { id: "1", title: "Research Submission Deadline Extended", content: "The deadline for research submission has been extended to April 15, 2026.", date: "Mar 15, 2026", pinned: true },
  { id: "2", title: "Defense Schedule for March", content: "Defense schedules for March 2026 have been posted. Please check the Defense Schedule page.", date: "Mar 10, 2026", pinned: false },
  { id: "3", title: "System Maintenance Notice", content: "CRAD system will be down for maintenance on March 20, 2026 from 10PM-12AM.", date: "Mar 8, 2026", pinned: false },
];

export const AnnouncementsPage: React.FC = () => {
  const { show } = useSnackbar();
  return (
    <div className="max-w-2xl mx-auto space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Megaphone size={20} className="text-primary" /> Announcements
          </h1>
          <p className="text-sm text-muted-foreground">Post and manage system announcements</p>
        </div>
        <button onClick={() => show("New announcement form opened (demo)", "info")}
          className="h-9 px-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5">
          <Plus size={14} /> New Post
        </button>
      </div>
      <div className="space-y-3">
        {announcements.map((a) => (
          <div key={a.id} className="bg-card border border-border rounded-xl p-4 animate-slide-up">
            <div className="flex items-center gap-2 mb-1">
              {a.pinned && <Pin size={12} className="text-primary" />}
              <p className="text-sm font-semibold text-foreground">{a.title}</p>
            </div>
            <p className="text-sm text-muted-foreground">{a.content}</p>
            <p className="text-[11px] text-muted-foreground mt-2">{a.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
