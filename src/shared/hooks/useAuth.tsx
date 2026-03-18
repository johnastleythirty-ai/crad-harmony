import React, { createContext, useContext, useState, useCallback } from "react";

export type UserRole = "student" | "adviser" | "staff" | "admin";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  isLoading: false,
});

// Demo users for each role
const DEMO_USERS: Record<UserRole, User> = {
  student: { id: "s1", name: "Juan Dela Cruz", email: "juan@bestlink.edu.ph", role: "student" },
  adviser: { id: "a1", name: "Dr. Maria Santos", email: "msantos@bestlink.edu.ph", role: "adviser" },
  staff: { id: "st1", name: "Ana Reyes", email: "areyes@bestlink.edu.ph", role: "staff" },
  admin: { id: "ad1", name: "Admin User", email: "admin@bestlink.edu.ph", role: "admin" },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("crad-user");
    return stored ? JSON.parse(stored) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback((email: string, _password: string, role: UserRole) => {
    setIsLoading(true);
    setTimeout(() => {
      const u = { ...DEMO_USERS[role], email };
      setUser(u);
      localStorage.setItem("crad-user", JSON.stringify(u));
      setIsLoading(false);
    }, 800);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("crad-user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
