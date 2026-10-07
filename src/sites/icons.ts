import { Calendar, FileText, Image, MessageSquare, Phone, Settings } from 'lucide-react'
import type { SiteIconName } from './types'

const icons = {
  phone: Phone,
  calendar: Calendar,
  'file-text': FileText,
  'message-square': MessageSquare,
  settings: Settings,
  image: Image,
} satisfies Record<SiteIconName, typeof Phone>

export function resolveSiteIcon(name: SiteIconName) {
  return icons[name]
}
