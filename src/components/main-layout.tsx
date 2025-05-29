"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MessageSquare, LayoutDashboard, FileText, UserIcon, LogOut, Settings, ChevronDown } from "lucide-react"
import { DashboardView } from "@/components/dashboard-view"
import { ReportsView } from "@/components/reports-view"
import { ChatbotView } from "@/features/chatbot/chatbot-view"
import { useRouter } from "next/navigation"
import { UserProvider, useUser } from "@/contexts/user-context"

export function MainLayout() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")
  const { user, setUser } = useUser()

  useEffect(() => {
    // Giả lập login thành công
    setUser({ name: "Thu", email: "aries.anhthu@gmail.com", avatar: "/avatar.png" })
    setActiveTab("dashboard")
  }, [setUser])

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  const handleLogout = () => {
    setUser(null)
    setActiveTab("login")
  }

  const tabs = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      component: <DashboardView />,
    },
    {
      id: "reports",
      label: "Reports",
      icon: FileText,
      component: <ReportsView />,
    },
    {
      id: "chatbot",
      label: "Chatbot",
      icon: MessageSquare,
      component: <ChatbotView />,
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden w-full">
      {/* Header */}
      <div className="flex justify-center items-center">
        <header className="relative z-10 w-fit bg-background p-4 m-2 shadow-sm">
          {/* Tooltip Login label */}
          {!user && (
            <span
              className="absolute top-2 right-6 text-lg font-medium text-foreground bg-background px-3 py-1 rounded-md shadow"
              style={{ zIndex: 20 }}
            >
              Login
            </span>
          )}

          <div className="flex justify-between items-center bg-primary/30 border border-muted rounded-xl px-3 py-2 gap-3">
            {/* Menu trái */}
            <div className="flex-1 flex justify-center items-center gap-3">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center space-x-2 rounded-md text-base"
                  disabled={!user && tab.id !== "login"}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </Button>
              ))}
              
              {/* Khối User */}

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 rounded-md text-base"
                    >
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="hidden sm:inline max-w-20 truncate">{user.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <UserIcon className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push("/login")}
                  className="flex items-center space-x-2 rounded-md text-base"
                >
                  <UserIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Login</span>
                </Button>
              )}
            </div>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {user && tabs.find((tab) => tab.id === activeTab)?.component}
      </main>
    </div>
  )
}
