import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { LEADS, formatDate } from '../data/demoData'
import StatusBadge from './StatusBadge'
import PriorityBadge from './PriorityBadge'
import ScoreBar from './ScoreBar'

export default function LeadsTable() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [priorityFilter, setPriorityFilter] = useState('All')

  const filteredLeads = useMemo(() => {
    const q = search.trim().toLowerCase()
    return LEADS.filter((l) => {
      if (statusFilter !== 'All' && l.status !== statusFilter) return false
      if (priorityFilter !== 'All' && l.priority !== priorityFilter) return false
      if (!q) return true
      return (
        l.name.toLowerCase().includes(q) ||
        l.company.toLowerCase().includes(q) ||
        l.industry.toLowerCase().includes(q) ||
        l.id.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q)
      )
    })
  }, [search, statusFilter, priorityFilter])

  return (
    <section className="card">
      <div className="card-head">
        <div>
          <h3>All Leads</h3>
          <p className="card-sub">Search, filter and review the full pipeline</p>
        </div>
        <span className="count-pill">
          {filteredLeads.length} of {LEADS.length}
        </span>
      </div>

      <div className="filter-row">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search by name, company, industry, ID or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="select-group">
          <label>
            Status
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Drafted</option>
              <option>Contacted</option>
              <option>Replied</option>
              <option>Converted</option>
            </select>
          </label>
          <label>
            Priority
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option>All</option>
              <option>Hot</option>
              <option>Warm</option>
            </select>
          </label>
        </div>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Company</th>
              <th>Industry</th>
              <th>Status</th>
              <th>Score</th>
              <th>Priority</th>
              <th>Next Follow-up</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={8} className="empty-row">
                  No leads match the current filters.
                </td>
              </tr>
            ) : (
              filteredLeads.map((l) => (
                <tr
                  key={l.id}
                  className={l.priority === 'Hot' ? 'row-hot-soft' : ''}
                >
                  <td className="mono">{l.id}</td>
                  <td>
                    <div className="lead-name">{l.name}</div>
                    <div className="lead-sub">{l.email}</div>
                  </td>
                  <td>{l.company}</td>
                  <td>{l.industry}</td>
                  <td>
                    <StatusBadge status={l.status} />
                  </td>
                  <td style={{ minWidth: 140 }}>
                    <ScoreBar score={l.score} />
                  </td>
                  <td>
                    <PriorityBadge priority={l.priority} />
                  </td>
                  <td>{formatDate(l.nextFollowUp)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
