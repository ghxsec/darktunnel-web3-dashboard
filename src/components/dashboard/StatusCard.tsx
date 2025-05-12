
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type StatusCardProps = {
  title: string;
  status: "active" | "inactive" | "warning";
  metric: string;
  metricLabel: string;
  icon: React.ReactNode;
  className?: string;
};

export function StatusCard({ title, status, metric, metricLabel, icon, className }: StatusCardProps) {
  const statusColors = {
    active: "bg-green-500",
    inactive: "bg-red-500",
    warning: "bg-yellow-500"
  };
  
  const statusText = {
    active: "Active",
    inactive: "Inactive",
    warning: "Warning"
  };

  return (
    <Card className={cn("glass-card p-4 h-full", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-sm text-muted-foreground">{title}</h3>
            <div className="flex items-center gap-1">
              <div className={cn(
                "w-2 h-2 rounded-full",
                status === "active" && "animate-pulse-glow",
                statusColors[status]
              )} />
              <span className="text-xs font-medium text-muted-foreground">{statusText[status]}</span>
            </div>
          </div>
          <div className="flex items-end gap-1">
            <p className="text-2xl font-bold">{metric}</p>
            <p className="text-xs text-muted-foreground mb-1">{metricLabel}</p>
          </div>
        </div>
        <div className="text-primary">{icon}</div>
      </div>
    </Card>
  );
}
