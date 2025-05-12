
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar, CartesianGrid, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const data = [
  { name: "Mon", value: 2.5 },
  { name: "Tue", value: 3.8 },
  { name: "Wed", value: 5.2 },
  { name: "Thu", value: 4.1 },
  { name: "Fri", value: 7.5 },
  { name: "Sat", value: 9.2 },
  { name: "Sun", value: 6.8 }
];

type TimeRange = "day" | "week" | "month";

export function UsageChart() {
  const [activeRange, setActiveRange] = useState<TimeRange>("week");
  
  const ranges = [
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
  ];

  return (
    <Card className="glass-card h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-md font-semibold">Data Usage</CardTitle>
        <div className="flex items-center space-x-2">
          {ranges.map((range) => (
            <Button 
              key={range.value}
              onClick={() => setActiveRange(range.value as TimeRange)}
              variant="ghost" 
              size="sm"
              className={cn(
                "text-xs px-3", 
                activeRange === range.value 
                  ? "bg-accent text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A3047" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              stroke="#64748b" 
              fontSize={12} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              stroke="#64748b" 
              fontSize={12}
              tickFormatter={(value) => `${value} GB`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "rgba(17, 24, 39, 0.9)", 
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 8,
              }}
              itemStyle={{ color: "#f3f4f6" }}
              formatter={(value) => [`${value} GB`, "Usage"]}
            />
            <Bar 
              dataKey="value" 
              fill="url(#colorGradient)" 
              radius={[4, 4, 0, 0]} 
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(142, 70%, 50%)" stopOpacity={0.8} />
                <stop offset="100%" stopColor="hsl(142, 70%, 50%)" stopOpacity={0.2} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
