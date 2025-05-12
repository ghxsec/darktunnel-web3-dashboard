
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { UsageChart } from "@/components/dashboard/UsageChart";
import { 
  Network, 
  Shield, 
  Lock, 
  Key, 
  Globe,
  ArrowUpRight,
  Server,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const statusItems = [
    { 
      title: "Active Connections",
      status: "active" as const,
      metric: "4",
      metricLabel: "services",
      icon: <Network size={24} />
    },
    { 
      title: "Data Usage",
      status: "active" as const,
      metric: "45.8 GB",
      metricLabel: "of 100 GB",
      icon: <ArrowUpRight size={24} />
    },
    { 
      title: "Server Status",
      status: "active" as const,
      metric: "Online",
      metricLabel: "all servers",
      icon: <Server size={24} />
    },
    { 
      title: "Next Renewal",
      status: "warning" as const,
      metric: "5",
      metricLabel: "days",
      icon: <Clock size={24} />
    }
  ];

  const services = [
    {
      name: "Singapore SSH",
      type: "SSH Tunnel",
      status: "active" as const,
      usagePercent: 65,
      daysLeft: 15,
      icon: <Network size={20} />
    },
    {
      name: "Japan VMess",
      type: "V2Ray VMess",
      status: "active" as const,
      usagePercent: 32,
      daysLeft: 30,
      icon: <Lock size={20} />
    },
    {
      name: "US Shadowsocks",
      type: "Shadowsocks",
      status: "inactive" as const,
      usagePercent: 0,
      daysLeft: 45,
      icon: <Globe size={20} />
    },
    {
      name: "Germany Vless",
      type: "Xray Vless",
      status: "active" as const,
      usagePercent: 78,
      daysLeft: 7,
      icon: <Key size={20} />
    },
    {
      name: "UK Trojan",
      type: "Trojan-Go",
      status: "expired" as const,
      usagePercent: 100,
      icon: <Shield size={20} />
    },
    {
      name: "Canada Wireguard",
      type: "Wireguard",
      status: "suspended" as const,
      usagePercent: 85,
      icon: <Network size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-background bg-gradient-mesh">
      <Sidebar />
      
      <div className="pl-16 md:pl-64">
        <Header />
        
        <main className="container p-4 md:p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome back, John</h2>
            <p className="text-muted-foreground">
              Here's an overview of your secure connection services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statusItems.map((item, index) => (
              <StatusCard key={index} {...item} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <UsageChart />
            </div>
            <div>
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="text-md font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="default" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Create New Service
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <Key className="mr-2 h-4 w-4" />
                    Regenerate Keys
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <Network className="mr-2 h-4 w-4" />
                    Test Connection
                  </Button>
                  <Separator className="my-2" />
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Lock className="mr-2 h-4 w-4 text-primary" />
                      Security Status
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Your connection is secure. All services are properly encrypted and protected.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-4">Your Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
