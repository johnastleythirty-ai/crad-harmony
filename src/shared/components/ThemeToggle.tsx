import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/shared/hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-lg flex items-center justify-center hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-foreground animate-scale-in" />
      ) : (
        <Moon size={18} className="text-foreground animate-scale-in" />
      )}
    </button>
  );
};
