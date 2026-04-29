export default function ScoreBar({ score }) {
  const max = 150
  const pct = Math.min(100, Math.round((score / max) * 100))
  const color = score >= 100 ? '#10b981' : score >= 70 ? '#f59e0b' : '#94a3b8'
  return (
    <div className="score-cell">
      <div className="score-bar">
        <div className="score-fill" style={{ width: pct + '%', background: color }} />
      </div>
      <span className="score-num">{score}</span>
    </div>
  )
}
