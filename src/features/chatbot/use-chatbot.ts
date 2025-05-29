import { useState } from "react"
import { sendChatMessage } from "./chat"
import { TextSplit } from "@/lib/textsplit"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Xin chào! Tôi là trợ lý AI, tôi có thể giúp bạn giải đáp các thắc mắc liên quan đến hệ thống của chúng tôi!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      // Chuyển đổi messages sang dạng role-content cho API
      const apiMessages = [
        ...messages.map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.content,
        })),
        { role: "user", content: inputValue },
      ]
      const botRes = await sendChatMessage(apiMessages)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: await TextSplit(botRes.content) || "(Không có phản hồi từ bot)",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          content: err.message || "Lỗi không xác định khi gửi tin nhắn.",
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    handleSendMessage,
  }
} 