import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, Filter } from "lucide-react"

export function ReportsView() {
  const reports = [
    {
      title: "Monthly Sales Report",
      description: "Comprehensive sales analysis for the current month",
      date: "2024-01-15",
      status: "completed",
      size: "2.4 MB",
    },
    {
      title: "User Analytics Report",
      description: "User behavior and engagement metrics",
      date: "2024-01-14",
      status: "completed",
      size: "1.8 MB",
    },
    {
      title: "Financial Summary",
      description: "Revenue and expense breakdown",
      date: "2024-01-13",
      status: "processing",
      size: "3.1 MB",
    },
    {
      title: "Performance Metrics",
      description: "Application performance and uptime statistics",
      date: "2024-01-12",
      status: "completed",
      size: "1.2 MB",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground">Generate and download various reports and analytics.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <FileText className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      {/* <div className="grid gap-4">
        {reports.map((report, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </div>
                </div>
                <Badge variant={report.status === "completed" ? "default" : "secondary"}>{report.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{report.date}</span>
                  </div>
                  <span>•</span>
                  <span>{report.size}</span>
                </div>
                {report.status === "completed" && (
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  )
}
