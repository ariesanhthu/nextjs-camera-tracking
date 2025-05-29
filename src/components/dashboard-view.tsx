import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, TrendingUp, Activity } from "lucide-react"
import Cam from "./camera-video"
import Joystick from 'rc-joystick';

export function DashboardView() {
  const stats = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+8%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      title: "Active Sessions",
      value: "1,234",
      change: "-3%",
      icon: Activity,
      trend: "down",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.5%",
      icon: BarChart3,
      trend: "up",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your application.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Live Camera</CardTitle>
          </CardHeader>
          <CardContent>
            <Cam/>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center">
          <CardContent>
            <Joystick />
          </CardContent>
        </Card>
      </div>
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge variant={stat.trend === "up" ? "default" : "destructive"}>{stat.change}</Badge>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Baby cry</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">Generate Report</p>
                <p className="text-xs text-muted-foreground">Create a new analytics report</p>
              </div>
              <div className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">Manage Users</p>
                <p className="text-xs text-muted-foreground">View and edit user accounts</p>
              </div>
              <div className="p-3 border rounded-lg hover:bg-accent cursor-pointer">
                <p className="text-sm font-medium">System Settings</p>
                <p className="text-xs text-muted-foreground">Configure application settings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
