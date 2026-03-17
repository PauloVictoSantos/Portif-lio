import { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"

interface SectionBadgeProps {
  icon: ReactNode
  text: string
  className?: string
}

export default function SectionBadge({ icon, text, className }: SectionBadgeProps) {
  return (
    <Badge
      className={`w-fit flex justify-center p-2 items-center gap-2 border border-[#60519b]/40 shadow-lg shadow-[#60519b]/20 ${className}`}
    >
      {icon}
      <p>{text}</p>
    </Badge>
  )
}