"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User } from "lucide-react"
import { useChatbot } from "./use-chatbot"
import { BlockMessenger } from "./block-messenger"

export function ChatbotView() {
  const { messages, inputValue, setInputValue, isLoading, handleSendMessage } = useChatbot()

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="space-y-6">
      <Card className="h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span>AI Assistant</span>
          </CardTitle>
          <CardDescription>Ask questions, get help, or just have a conversation.</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col space-y-4 overflow-y-auto">
          <ScrollArea className="flex-1 pr-4 overflow-y-auto">
            <BlockMessenger messages={messages} isLoading={isLoading} />
          </ScrollArea>

          <div className="flex items-center space-x-2">
            <Input
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
