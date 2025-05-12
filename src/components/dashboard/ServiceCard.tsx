
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Power } from "lucide-react";

type ServiceCardProps = {
  name: string;
  type: string;
  status: "active" | "inactive" | "expired" | "suspended";
  usagePercent: number;
  daysLeft?: number;
  icon: React.ReactNode;
  className?: string;
};

export function ServiceCard({ 
  name, 
  type, 
  status, 
  usagePercent, 
  daysLeft, 
  icon,
  className 
}: ServiceCardProps) {
  const statusColors = {
    active: "bg-green-500/20 text-green-500 border-green-500/30",
    inactive: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    expired: "bg-red-500/20 text-red-500 border-red-500/30",
    suspended: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
  };
  
  const statusText = {
    active: "Active",
    inactive: "Inactive",
    expired: "Expired",
    suspended: "Suspended"
  };

  return (
    <Card className={cn("glass-card p-5 h-full flex flex-col", className)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-accent text-primary">
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{type}</p>
          </div>
        </div>
        <Badge
          variant="outline" 
          className={cn("rounded-md px-2 py-1", statusColors[status])}
        >
          {statusText[status]}
        </Badge>
      </div>
      
      <div className="space-y-5 mt-auto">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Usage</span>
            <span className="font-medium">{usagePercent}%</span>
          </div>
          <Progress value={usagePercent} className="h-1.5" />
        </div>
        
        {daysLeft !== undefined && (
          <div className="text-sm text-muted-foreground">
            {daysLeft} days remaining
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex-1">
            Details
          </Button>
          <Button variant={status === "active" ? "destructive" : "default"} size="icon">
            <Power size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
