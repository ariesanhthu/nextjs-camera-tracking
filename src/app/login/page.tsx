"use client"

import type React from "react"

import { useState } from "react"
import Spline from "@splinetool/react-spline"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { useMobile } from "@/hooks/use-mobile"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const isMobile = useMobile()
  const [splineLoaded, setSplineLoaded] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* 3D Spline Element - Left Side */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-screen bg-slate-900">
        {!splineLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <Spline
          scene="https://prod.spline.design/1IlFdymlxdRtMUOu/scene.splinecode"
          onLoad={() => setSplineLoaded(true)}
          className={`w-full h-full ${splineLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        />
      </div>

      {/* Login Form - Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    
                  </div>
                  <Input id="password" type="password" autoComplete="current-password" disabled={isLoading} required />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
              </div>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" type="button" disabled={isLoading} className="w-full">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <div className="flex items-center justify-between">
                <a href="#" className="text-sm text-muted-foreground hover:underline">
                    Forgot password?
                </a>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-primary hover:underline">
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
