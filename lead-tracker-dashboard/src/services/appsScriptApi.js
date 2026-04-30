const API_URL = (import.meta.env.VITE_APPS_SCRIPT_API_URL || '').trim()

export function hasApiUrl() {
  return Boolean(API_URL)
}

function todayIso() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function toNumber(v) {
  if (typeof v === 'number') return v
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
}

function normalizePriority(p) {
  if (!p) return 'Warm'
  const v = String(p).trim().toLowerCase()
  if (v === 'hot') return 'Hot'
  if (v === 'warm') return 'Warm'
  if (v === 'normal' || v === 'low') return 'Warm'
  return p
}

function normalizeLead(lead) {
  return {
    id: lead.id ?? '',
    name: lead.name ?? '',
    company: lead.company ?? '',
    website: lead.website ?? '',
    email: lead.email ?? '',
    industry: lead.industry ?? '',
    status: lead.status ?? 'Drafted',
    notes: lead.notes ?? '',
    lastContact: lead.lastContact ?? '',
    nextFollowUp: lead.nextFollowUp ?? '',
    template: lead.template ?? '',
    subject: lead.draftedSubject ?? '',
    body: lead.draftedBody ?? '',
    score: toNumber(lead.leadScore),
    priority: normalizePriority(lead.priority),
  }
}

function normalizeEmailQueue(metrics) {
  const m = metrics || {}
  return {
    Drafted: toNumber(m.draftEmails),
    Sent: toNumber(m.sentEmails),
    Approved: toNumber(m.approvedEmails),
    Failed: toNumber(m.failedEmails),
  }
}

export async function fetchDashboard() {
  if (!API_URL) {
    throw new Error('VITE_APPS_SCRIPT_API_URL is not set')
  }
  const res = await fetch(`${API_URL}?action=dashboard`, {
    method: 'GET',
    redirect: 'follow',
  })
  if (!res.ok) {
    throw new Error(`API responded with status ${res.status}`)
  }
  const json = await res.json()
  if (!json || json.success !== true || !json.data) {
    throw new Error('API returned an unsuccessful response')
  }
  const data = json.data
  return {
    leads: Array.isArray(data.leads) ? data.leads.map(normalizeLead) : [],
    emailQueue: normalizeEmailQueue(data.metrics),
    today: todayIso(),
    metrics: data.metrics || {},
    updatedAt: data.updatedAt || '',
  }
}
