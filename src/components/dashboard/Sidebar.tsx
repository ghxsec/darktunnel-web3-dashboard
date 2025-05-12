
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Network, 
  Lock, 
  Globe, 
  Key, 
  Settings,
  Menu,
  X,
  Home,
  Users,
  LayoutDashboard,
  BarChart
} from "lucide-react";

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "flex items-center w-full justify-start gap-3 px-3 py-2 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all",
        active && "bg-sidebar-accent text-primary font-medium border-l-2 border-primary"
      )}
    >
      <Icon size={18} />
      <span>{label}</span>
      {active && (
        <span className="absolute right-0 w-1 h-4 bg-primary rounded-l-md" />
      )}
    </Button>
  );
};

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
    { icon: Shield, label: "VPN Services", id: "vpn" },
    { icon: Network, label: "SSH Tunnels", id: "ssh" },
    { icon: Lock, label: "V2Ray VMess", id: "vmess" },
    { icon: Globe, label: "Shadowsocks", id: "shadowsocks" },
    { icon: Key, label: "Xray Vless", id: "vless" },
    { icon: Shield, label: "Trojan-Go", id: "trojan" },
    { icon: Network, label: "Wireguard", id: "wireguard" },
    { icon: BarChart, label: "Statistics", id: "stats" },
    { icon: Users, label: "Account", id: "account" },
    { icon: Settings, label: "Settings", id: "settings" },
  ];

  return (
    <div className={cn(
      "fixed top-0 left-0 h-screen flex flex-col bg-sidebar transition-all z-10",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <h1 className="text-xl font-bold text-gradient">SecureNet</h1>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground"
        >
          {collapsed ? <Menu size={18} /> : <X size={18} />}
        </Button>
      </div>
      
      <div className="flex flex-col gap-1 p-2 overflow-y-auto scrollbar-none flex-grow">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={collapsed ? "" : item.label}
            active={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-sidebar-border mt-auto">
        {!collapsed && (
          <div className="text-xs text-sidebar-foreground/50 text-center">
            SecureNet v1.0.0 • 2025
          </div>
        )}
      </div>
    </div>
  );
}
