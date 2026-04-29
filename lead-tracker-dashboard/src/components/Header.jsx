import { Sparkles, Calendar } from 'lucide-react'
import { TODAY_ISO, formatDate } from '../data/demoData'

export default function Header() {
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
            <span className="dot dot-live" /> Demo data
          </div>
          <div className="meta-pill">
            <Calendar size={14} /> {formatDate(TODAY_ISO)}
          </div>
        </div>
      </div>
    </header>
  )
}
