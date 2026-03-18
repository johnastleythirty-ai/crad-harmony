import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const statusVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        pending: "bg-warning/15 text-warning border border-warning/20",
        approved: "bg-success/15 text-success border border-success/20",
        rejected: "bg-destructive/15 text-destructive border border-destructive/20",
        review: "bg-secondary/15 text-secondary border border-secondary/20",
        draft: "bg-muted text-muted-foreground border border-border",
        active: "bg-primary/15 text-primary border border-primary/20",
        archived: "bg-muted text-muted-foreground border border-border",
        completed: "bg-success/15 text-success border border-success/20",
      },
    },
    defaultVariants: { variant: "draft" },
  }
);

interface Props extends VariantProps<typeof statusVariants> {
  children: React.ReactNode;
  className?: string;
}

export const StatusBadge: React.FC<Props> = ({ variant, children, className }) => (
  <span className={cn(statusVariants({ variant }), className)}>{children}</span>
);
