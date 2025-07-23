"use client"

import { Star, MessageCircle, UserPlus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export type ProfileCardProps = {
  name: string
  role: string
  status: "online" | "offline" | "away"
  avatar: string
  tags?: string[]
  isVerified?: boolean
  followers?: number
}

export function ProfileCard({ name, role, status, avatar, tags = [], isVerified, followers }: ProfileCardProps) {
  return (
    <Card className="relative bg-white rounded-lg shadow-xl border-0 p-0 flex flex-col items-center min-w-3xs w-full mx-auto">
      {/* Status indicator */}
      <div className="absolute right-6 top-6">
        <div
          className={cn(
            "h-3 w-3 rounded-full border border-white",
            status === "online" ? "bg-green-500" : status === "away" ? "bg-amber-400" : "bg-gray-300",
          )}
        ></div>
      </div>
      {/* Verified badge */}
      {isVerified && (
        <div className="absolute right-6 top-14">
          <div className="rounded-full bg-blue-500 p-1 shadow-md">
            <Star className="h-4 w-4 fill-white text-white" />
          </div>
        </div>
      )}
      <CardContent className="flex flex-col items-center pt-10 pb-0 px-8">
        {/* Profile Photo */}
        <div className="mb-4 flex justify-center">
          <div className="relative">
            <div className="h-32 w-32 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-white p-1 shadow-lg flex items-center justify-center">
              <img src={avatar || "/placeholder.svg"} alt={name} className="h-full max-w-7xl rounded-3xl object-contain" />
            </div>
          </div>
        </div>
        {/* Profile Info */}
        <div className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 mb-1">{name}</CardTitle>
          <CardDescription className="text-base text-gray-500 mb-1">{role}</CardDescription>
          {followers && <p className="text-sm text-gray-400 mb-2">{followers.toLocaleString()} followers</p>}
        </div>
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-1 flex justify-center gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={cn(
                  "inline-block rounded-full bg-white px-4 py-1 text-sm font-medium shadow-md border border-gray-100 text-blue-600",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-4 pt-8 pb-6 max-w-7xl justify-center border-none">
        <button className="flex-1 flex items-center justify-center gap-2 rounded-full bg-white py-3 text-base font-medium text-blue-600 shadow-md transition-all hover:shadow-lg max-w-xs">
          <UserPlus className="h-5 w-5" />
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 rounded-full bg-white py-3 text-base font-medium text-gray-700 shadow-md transition-all hover:shadow-lg max-w-xs">
          <MessageCircle className="h-5 w-5" />
        </button>
      </CardFooter>
    </Card>
  )
}
