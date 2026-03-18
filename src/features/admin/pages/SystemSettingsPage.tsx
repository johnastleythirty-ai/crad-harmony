import React from "react";
import { Settings, Save } from "lucide-react";
import { useSnackbar } from "@/shared/components/SnackbarProvider";

export const SystemSettingsPage: React.FC = () => {
  const { show } = useSnackbar();
  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Settings size={20} className="text-primary" /> System Settings
        </h1>
        <p className="text-sm text-muted-foreground">Configure system-wide settings</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-5 space-y-5">
        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Institution Name</label>
          <input defaultValue="Bestlink College of the Philippines" className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Current Academic Year</label>
          <input defaultValue="2025-2026" className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Research Fee (₱)</label>
          <input defaultValue="2500" type="number" className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors" />
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border">
          <div>
            <p className="text-sm font-medium text-foreground">Maintenance Mode</p>
            <p className="text-xs text-muted-foreground">Disable student access during maintenance</p>
          </div>
          <button className="h-6 w-11 rounded-full bg-muted relative transition-colors">
            <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-muted-foreground transition-transform" />
          </button>
        </div>
        <button onClick={() => show("Settings saved!", "success")}
          className="h-11 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
          <Save size={16} /> Save Settings
        </button>
      </div>
    </div>
  );
};
