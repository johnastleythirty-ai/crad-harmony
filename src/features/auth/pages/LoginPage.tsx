import React, { useState } from "react";
import { useAuth, type UserRole } from "@/shared/hooks/useAuth";
import logo from "@/assets/logo.png";

export const LoginPage: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || `${role}@bestlink.edu.ph`, password, role);
  };

  const roles: { value: UserRole; label: string; desc: string }[] = [
    { value: "student", label: "Student", desc: "Submit & track research" },
    { value: "adviser", label: "Adviser", desc: "Review & approve manuscripts" },
    { value: "staff", label: "Staff", desc: "Manage schedules & payments" },
    { value: "admin", label: "Admin", desc: "Full system administration" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-down">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center p-2">
              <img src={logo} alt="BCP" className="h-full w-full object-contain" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">CRAD Management System</h1>
          <p className="text-sm text-muted-foreground mt-1">Bestlink College of the Philippines</p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role selector */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                Sign in as
              </label>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setRole(r.value)}
                    className={`p-3 rounded-lg border text-left transition-all min-h-[44px] ${
                      role === r.value
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                        : "border-border hover:border-primary/30 hover:bg-muted/30"
                    }`}
                  >
                    <p className={`text-sm font-semibold ${role === r.value ? "text-primary" : "text-foreground"}`}>
                      {r.label}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{r.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`${role}@bestlink.edu.ph`}
                className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-[11px] text-muted-foreground text-center mt-4">
            Demo: Select a role and click Sign In
          </p>
        </div>
      </div>
    </div>
  );
};
