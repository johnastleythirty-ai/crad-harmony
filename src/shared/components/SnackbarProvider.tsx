import React, { createContext, useContext, useState, useCallback } from "react";
import { X } from "lucide-react";

interface Snackbar {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  action?: { label: string; onClick: () => void };
}

interface SnackbarContextType {
  show: (message: string, type?: Snackbar["type"], action?: Snackbar["action"]) => void;
}

const SnackbarContext = createContext<SnackbarContextType>({ show: () => {} });

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [snackbars, setSnackbars] = useState<Snackbar[]>([]);

  const show = useCallback((message: string, type: Snackbar["type"] = "info", action?: Snackbar["action"]) => {
    const id = Date.now().toString();
    setSnackbars((prev) => [...prev, { id, message, type, action }]);
    setTimeout(() => setSnackbars((prev) => prev.filter((s) => s.id !== id)), 5000);
  }, []);

  const dismiss = useCallback((id: string) => {
    setSnackbars((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const typeColors: Record<Snackbar["type"], string> = {
    success: "border-l-4 border-l-success bg-card",
    error: "border-l-4 border-l-destructive bg-card",
    warning: "border-l-4 border-l-warning bg-card",
    info: "border-l-4 border-l-primary bg-card",
  };

  return (
    <SnackbarContext.Provider value={{ show }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 max-w-sm">
        {snackbars.map((s, i) => (
          <div
            key={s.id}
            className={`${typeColors[s.type]} rounded-lg shadow-lg p-4 flex items-center gap-3 animate-slide-up glass-surface`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <span className="text-sm font-medium text-card-foreground flex-1">{s.message}</span>
            {s.action && (
              <button
                onClick={s.action.onClick}
                className="text-xs font-semibold text-primary hover:underline whitespace-nowrap"
              >
                {s.action.label}
              </button>
            )}
            <button onClick={() => dismiss(s.id)} className="p-1 rounded-md hover:bg-muted transition-colors">
              <X size={14} className="text-muted-foreground" />
            </button>
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
              style={{ animation: "shrinkWidth 5s linear forwards" }}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes shrinkWidth {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
