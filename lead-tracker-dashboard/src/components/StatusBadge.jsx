import { STATUS_COLORS } from '../data/demoData'

export default function StatusBadge({ status }) {
  const color = STATUS_COLORS[status] || '#64748b'
  return (
    <span
      className="status-pill"
      style={{ color, background: color + '1a' }}
    >
      {status}
    </span>
  )
}
