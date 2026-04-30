import { useMemo } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import { TrendingUp, Flame, Inbox } from 'lucide-react'
import {
  STATUS_COLORS,
  PRIORITY_COLORS,
  QUEUE_COLORS,
} from '../data/demoData'

const TOOLTIP_STYLE = {
  borderRadius: 10,
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 14px rgba(15,23,42,0.08)',
  fontSize: 12,
}

const AXIS_TICK = { fill: '#64748b', fontSize: 12 }

export default function ChartCard({ leads = [], emailQueue = {} }) {
  const statusChartData = useMemo(
    () =>
      ['Drafted', 'Contacted', 'Replied', 'Converted'].map((s) => ({
        name: s,
        value: leads.filter((l) => l.status === s).length,
      })),
    [leads]
  )

  const priorityChartData = useMemo(
    () => [
      { name: 'Hot', value: leads.filter((l) => l.priority === 'Hot').length },
      { name: 'Warm', value: leads.filter((l) => l.priority === 'Warm').length },
    ],
    [leads]
  )

  const queueChartData = useMemo(
    () =>
      ['Drafted', 'Sent', 'Approved', 'Failed'].map((k) => ({
        name: k,
        value: emailQueue[k] || 0,
      })),
    [emailQueue]
  )

  return (
    <section className="charts-grid">
      <div className="card chart-card chart-wide">
        <div className="card-head">
          <div>
            <h3>Leads by Status</h3>
            <p className="card-sub">Distribution across the outreach pipeline</p>
          </div>
          <TrendingUp size={18} className="card-head-icon" />
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={statusChartData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" vertical={false} />
              <XAxis dataKey="name" tick={AXIS_TICK} axisLine={false} tickLine={false} />
              <YAxis allowDecimals={false} tick={AXIS_TICK} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: 'rgba(99,102,241,0.06)' }} contentStyle={TOOLTIP_STYLE} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={56}>
                {statusChartData.map((entry) => (
                  <Cell key={entry.name} fill={STATUS_COLORS[entry.name]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card chart-card">
        <div className="card-head">
          <div>
            <h3>Priority Split</h3>
            <p className="card-sub">Hot vs Warm leads</p>
          </div>
          <Flame size={18} className="card-head-icon" />
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={priorityChartData}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={2}
                stroke="none"
              >
                {priorityChartData.map((entry) => (
                  <Cell key={entry.name} fill={PRIORITY_COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip contentStyle={TOOLTIP_STYLE} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card chart-card">
        <div className="card-head">
          <div>
            <h3>Email Queue</h3>
            <p className="card-sub">Outreach pipeline status</p>
          </div>
          <Inbox size={18} className="card-head-icon" />
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={queueChartData}
              layout="vertical"
              margin={{ top: 5, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" horizontal={false} />
              <XAxis type="number" allowDecimals={false} tick={AXIS_TICK} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" tick={AXIS_TICK} axisLine={false} tickLine={false} width={70} />
              <Tooltip cursor={{ fill: 'rgba(99,102,241,0.06)' }} contentStyle={TOOLTIP_STYLE} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} maxBarSize={28}>
                {queueChartData.map((entry) => (
                  <Cell key={entry.name} fill={QUEUE_COLORS[entry.name]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
