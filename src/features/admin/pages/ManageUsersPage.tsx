import React from "react";
import { Users, Search, MoreHorizontal } from "lucide-react";
import { StatusBadge } from "@/shared/components/StatusBadge";

const users = [
  { id: "U-001", name: "Juan Dela Cruz", email: "juan@bestlink.edu.ph", role: "student", status: "active" as const },
  { id: "U-002", name: "Dr. Maria Santos", email: "msantos@bestlink.edu.ph", role: "adviser", status: "active" as const },
  { id: "U-003", name: "Ana Reyes", email: "areyes@bestlink.edu.ph", role: "staff", status: "active" as const },
  { id: "U-004", name: "Pedro Garcia", email: "pgarcia@bestlink.edu.ph", role: "student", status: "active" as const },
  { id: "U-005", name: "Rica Santos", email: "rsantos@bestlink.edu.ph", role: "student", status: "pending" as const },
];

export const ManageUsersPage: React.FC = () => (
  <div className="space-y-5 animate-fade-in">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Users size={20} className="text-primary" /> Manage Users
        </h1>
        <p className="text-sm text-muted-foreground">View and manage system users</p>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-input bg-background">
        <Search size={14} className="text-muted-foreground" />
        <input placeholder="Search users..." className="bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground w-40" />
      </div>
    </div>
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2.5 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        <div className="col-span-1">ID</div>
        <div className="col-span-3">Name</div>
        <div className="col-span-4">Email</div>
        <div className="col-span-2">Role</div>
        <div className="col-span-1">Status</div>
        <div className="col-span-1"></div>
      </div>
      {users.map((u) => (
        <div key={u.id} className="hidden sm:grid grid-cols-12 gap-3 px-4 py-3 border-b border-border/50 hover:bg-muted/30 transition-colors items-center min-h-[44px]">
          <div className="col-span-1 text-xs font-mono text-muted-foreground">{u.id}</div>
          <div className="col-span-3 text-sm font-medium text-foreground">{u.name}</div>
          <div className="col-span-4 text-sm text-muted-foreground">{u.email}</div>
          <div className="col-span-2"><span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground capitalize">{u.role}</span></div>
          <div className="col-span-1"><StatusBadge variant={u.status}>{u.status}</StatusBadge></div>
          <div className="col-span-1 flex justify-end"><button className="p-1 hover:bg-muted rounded"><MoreHorizontal size={14} className="text-muted-foreground" /></button></div>
        </div>
      ))}
      {/* Mobile */}
      <div className="sm:hidden divide-y divide-border">
        {users.map((u) => (
          <div key={u.id} className="p-4 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">{u.name}</p>
              <StatusBadge variant={u.status}>{u.status}</StatusBadge>
            </div>
            <p className="text-xs text-muted-foreground">{u.email}</p>
            <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground capitalize">{u.role}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
