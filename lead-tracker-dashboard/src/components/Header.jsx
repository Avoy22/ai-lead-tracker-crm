import { Sparkles, Calendar } from 'lucide-react'
import { TODAY_ISO, formatDate } from '../data/demoData'

const SOURCE_LABEL = {
  loading: 'Loading…',
  live: 'Live data',
  demo: 'Demo data',
}

export default function Header({ dataSource = 'demo', today }) {
  const label = SOURCE_LABEL[dataSource] || SOURCE_LABEL.demo
  const dotClass = dataSource === 'live' ? 'dot dot-live' : 'dot'
  const displayDate = today || TODAY_ISO

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="brand-title">AI Lead Tracker Dashboard</h1>
            <p className="brand-sub">
              Google Sheets CRM + Email Personalization System
            </p>
          </div>
        </div>
        <div className="header-meta">
          <div className="meta-pill">
            <span className={dotClass} /> {label}
          </div>
          <div className="meta-pill">
            <Calendar size={14} /> {formatDate(displayDate)}
          </div>
        </div>
      </div>
    </header>
  )
}
