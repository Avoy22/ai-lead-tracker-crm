import { useMemo } from 'react'
import { Flame } from 'lucide-react'
import { LEADS } from '../data/demoData'
import StatusBadge from './StatusBadge'
import ScoreBar from './ScoreBar'

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

export default function HotLeadsTable() {
  const hotLeads = useMemo(
    () =>
      LEADS.filter((l) => l.priority === 'Hot').sort(
        (a, b) => b.score - a.score
      ),
    []
  )

  return (
    <div className="card">
      <div className="card-head">
        <div>
          <h3>
            <Flame size={16} className="inline-icon hot-icon" /> Hot Leads
          </h3>
          <p className="card-sub">High-priority opportunities ranked by score</p>
        </div>
        <span className="count-pill count-hot">{hotLeads.length}</span>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Lead</th>
              <th>Company</th>
              <th>Status</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {hotLeads.map((l) => (
              <tr key={l.id} className="row-hot">
                <td>
                  <div className="lead-cell">
                    <div className="avatar avatar-hot">{initials(l.name)}</div>
                    <div>
                      <div className="lead-name">{l.name}</div>
                      <div className="lead-id">{l.id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="lead-name">{l.company}</div>
                  <div className="lead-sub">{l.industry}</div>
                </td>
                <td>
                  <StatusBadge status={l.status} />
                </td>
                <td>
                  <ScoreBar score={l.score} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
