import { useMemo } from 'react'
import { Calendar, CircleAlert, CircleCheck } from 'lucide-react'
import { TODAY_ISO, formatDate } from '../data/demoData'
import PriorityBadge from './PriorityBadge'
import StatusBadge from './StatusBadge'

export default function FollowUpsCard({ leads = [], today }) {
  const todayIso = today || TODAY_ISO
  const followUpsToday = useMemo(
    () => leads.filter((l) => l.nextFollowUp === todayIso),
    [leads, todayIso]
  )

  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h3>
            <Calendar size={16} className="inline-icon" /> Follow-ups Due Today
          </h3>
          <p className="card-sub">
            Leads scheduled for outreach on {formatDate(todayIso)}
          </p>
        </div>
        <span className="count-pill">{followUpsToday.length}</span>
      </div>
      {followUpsToday.length === 0 ? (
        <div className="empty-state">
          <CircleCheck size={28} />
          <p>You&apos;re all caught up. No follow-ups due today.</p>
        </div>
      ) : (
        <div className="followup-list">
          {followUpsToday.map((l) => (
            <div key={l.id} className="followup-item">
              <div className="followup-left">
                <CircleAlert size={18} className="followup-alert" />
                <div>
                  <div className="lead-name">{l.name}</div>
                  <div className="lead-sub">
                    {l.company} · {l.industry}
                  </div>
                </div>
              </div>
              <div className="followup-right">
                <PriorityBadge priority={l.priority} />
                <StatusBadge status={l.status} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
