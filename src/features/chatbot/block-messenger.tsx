import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, User } from "lucide-react"
import * as React from "react"

export interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

interface BlockMessengerProps {
  messages: Message[]
  isLoading: boolean
}

export function BlockMessenger({ messages, isLoading }: BlockMessengerProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start space-x-3 ${
            message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
          }`}
        >
          <Avatar className="h-8 w-8">
            {message.sender === "bot" ? (
              <>
                <AvatarFallback>
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </>
            ) : (
              <>
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </>
            )}
          </Avatar>
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
            }`}
          >
            <p className="text-sm">{message.content}</p>
            <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex items-start space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-current rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-current rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
