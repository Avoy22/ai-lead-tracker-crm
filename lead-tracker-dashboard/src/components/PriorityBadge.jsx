import { Flame, Sparkles } from 'lucide-react'

export default function PriorityBadge({ priority }) {
  const isHot = priority === 'Hot'
  return (
    <span className={isHot ? 'badge badge-hot' : 'badge badge-warm'}>
      {isHot ? <Flame size={12} /> : <Sparkles size={12} />}
      {priority}
    </span>
  )
}
