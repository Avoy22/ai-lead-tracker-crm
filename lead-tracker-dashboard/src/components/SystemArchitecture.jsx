import { FileSpreadsheet, Zap, LayoutDashboard, ArrowRight, Workflow } from 'lucide-react'

const STEPS = [
  {
    icon: FileSpreadsheet,
    label: 'Google Sheets CRM',
    sub: 'Source of truth',
    accent: '#10b981',
  },
  {
    icon: Zap,
    label: 'Apps Script Automation',
    sub: 'Drafts & follow-ups',
    accent: '#f59e0b',
  },
  {
    icon: LayoutDashboard,
    label: 'React Dashboard',
    sub: 'Live insights',
    accent: '#6366f1',
  },
]

export default function SystemArchitecture() {
  return (
    <section className="card arch-card">
      <div className="card-head">
        <div>
          <h3>
            <Workflow size={16} className="inline-icon" /> System Architecture
          </h3>
          <p className="card-sub">How data flows through the AI Lead Tracker</p>
        </div>
      </div>
      <div className="arch-flow">
        {STEPS.map((step, i) => (
          <div key={step.label} className="arch-row">
            <div className="arch-step">
              <div
                className="arch-icon"
                style={{ background: step.accent + '1a', color: step.accent }}
              >
                <step.icon size={20} />
              </div>
              <div className="arch-meta">
                <div className="arch-label">{step.label}</div>
                <div className="arch-sub">{step.sub}</div>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div className="arch-arrow" aria-hidden="true">
                <ArrowRight size={18} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
