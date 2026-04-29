export default function KpiCard({ icon: Icon, label, value, accent, subtle }) {
  return (
    <div className="kpi-card">
      <div
        className="kpi-icon"
        style={{ background: accent + '1a', color: accent }}
      >
        <Icon size={20} />
      </div>
      <div className="kpi-meta">
        <div className="kpi-label">{label}</div>
        <div className="kpi-value">{value}</div>
        {subtle && <div className="kpi-subtle">{subtle}</div>}
      </div>
    </div>
  )
}
