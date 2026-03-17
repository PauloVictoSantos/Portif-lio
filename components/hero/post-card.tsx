"use client"

import { motion, type Variants } from "framer-motion"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import type { ReactNode } from "react"

interface PostCardProps {
  children: ReactNode
  username?: string
  caption?: string
  avatar?: string
  className?: string
  style?: React.CSSProperties
  variants?: Variants
  custom?: number
}

export function PostCard({
  children,
  username,
  caption,
  avatar,
  className = "",
  style,
  variants,
  custom,
}: PostCardProps) {
  return (
    <motion.div
      variants={variants}
      custom={custom}
      className={`rounded-2xl border border-white/20 bg-white/70 shadow-xl shadow-black/5 backdrop-blur-xl ${className}`}
      style={style}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      {/* Header */}
      {username && (
        <div className="flex items-center gap-2 px-3 pt-3 pb-2">

          {/* Avatar */}
          <div className="h-7 w-7 overflow-hidden rounded-full">
            {avatar ? (
              <img
                src={avatar}
                alt="avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-linear-to-br from-neutral-800 to-neutral-600" />
            )}
          </div>

          <span className="text-xs font-semibold text-neutral-900">
            {username}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="px-3 pb-2">{children}</div>

      {/* Actions */}
      <div className="flex items-center justify-between px-3 pb-3">
        <div className="flex items-center gap-3">
          <Heart className="h-4 w-4 text-neutral-700" />
          <MessageCircle className="h-4 w-4 text-neutral-700" />
          <Send className="h-4 w-4 text-neutral-700" />
        </div>
        <Bookmark className="h-4 w-4 text-neutral-700" />
      </div>

      {/* Caption */}
      {caption && (
        <div className="px-3 pb-3">
          <p className="text-xs text-neutral-700">
            {username && (
              <span className="font-semibold text-neutral-900">
                {username}{" "}
              </span>
            )}
            {caption}
          </p>
        </div>
      )}
    </motion.div>
  )
}