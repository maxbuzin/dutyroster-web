"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, CheckCircle } from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      label: "Active Users",
      value: 42,
      icon: <Users className="text-primary" size={20} />,
    },
    {
      label: "Upcoming Shifts",
      value: 8,
      icon: <Calendar className="text-primary" size={20} />,
    },
    {
      label: "Completed Tasks",
      value: 27,
      icon: <CheckCircle className="text-primary" size={20} />,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center gap-3 pb-2">
              {stat.icon}
              <CardTitle className="text-base">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold">{stat.value}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 