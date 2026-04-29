import { useMemo } from 'react'
import {
  Users,
  PenSquare,
  Send,
  MessageSquare,
  CheckCircle2,
  Mail,
  Flame,
  Gauge,
} from 'lucide-react'
import { LEADS, EMAIL_QUEUE } from './data/demoData'
import Header from './components/Header'
import KpiCard from './components/KpiCard'
import ChartCard from './components/ChartCard'
import HotLeadsTable from './components/HotLeadsTable'
import FollowUpsCard from './components/FollowUpsCard'
import LeadsTable from './components/LeadsTable'
import SystemArchitecture from './components/SystemArchitecture'
import './App.css'

export default function App() {
  const stats = useMemo(() => {
    const counts = LEADS.reduce(
      (acc, l) => {
        acc.byStatus[l.status] = (acc.byStatus[l.status] || 0) + 1
        acc.byPriority[l.priority] = (acc.byPriority[l.priority] || 0) + 1
        acc.scoreTotal += l.score
        return acc
      },
      { byStatus: {}, byPriority: {}, scoreTotal: 0 }
    )
    return {
      total: LEADS.length,
      drafted: counts.byStatus.Drafted || 0,
      contacted: counts.byStatus.Contacted || 0,
      replied: counts.byStatus.Replied || 0,
      converted: counts.byStatus.Converted || 0,
      hot: counts.byPriority.Hot || 0,
      avgScore: (counts.scoreTotal / LEADS.length).toFixed(1),
    }
  }, [])

  return (
    <div className="app-shell">
      <Header />

      <main className="app-main">
        <section className="kpi-grid">
          <KpiCard icon={Users} label="Total Leads" value={stats.total} accent="#6366f1" />
          <KpiCard icon={PenSquare} label="Drafted" value={stats.drafted} accent="#94a3b8" />
          <KpiCard icon={Send} label="Contacted" value={stats.contacted} accent="#3b82f6" />
          <KpiCard icon={MessageSquare} label="Replied" value={stats.replied} accent="#8b5cf6" />
          <KpiCard icon={CheckCircle2} label="Converted" value={stats.converted} accent="#10b981" />
          <KpiCard icon={Mail} label="Sent Emails" value={EMAIL_QUEUE.Sent} accent="#0ea5e9" />
          <KpiCard icon={Flame} label="Hot Leads" value={stats.hot} accent="#ef4444" />
          <KpiCard icon={Gauge} label="Avg Score" value={stats.avgScore} accent="#f59e0b" />
        </section>

        <ChartCard />

        <section className="split-grid">
          <HotLeadsTable />
          <FollowUpsCard />
        </section>

        <LeadsTable />

        <SystemArchitecture />
      </main>

      <footer className="app-footer">
        <p>
          Portfolio demo · Static preview of a Google Sheets + Apps Script CRM system
        </p>
      </footer>
    </div>
  )
}
