export const TODAY_ISO = '2026-04-29'

export const LEADS = [
  {
    id: 'L001',
    name: 'Sarah Chen',
    company: 'Northside Dental',
    website: 'northsidedental.com',
    email: 'sarah@northsidedental.com',
    industry: 'Healthcare',
    status: 'Drafted',
    notes: 'Interested in patient retention automation',
    lastContact: '2026-04-22',
    nextFollowUp: '2026-05-02',
    template: 'healthcare_intro',
    subject: 'Boost patient retention at Northside Dental',
    body: 'Hi Sarah, noticed Northside Dental is growing...',
    score: 55,
    priority: 'Warm',
  },
  {
    id: 'L002',
    name: 'Mike Adams',
    company: 'GreenFit Gym',
    website: 'greenfitgym.com',
    email: 'mike@greenfitgym.com',
    industry: 'Fitness',
    status: 'Contacted',
    notes: 'Replied positively, scheduling a call',
    lastContact: '2026-04-26',
    nextFollowUp: '2026-04-29',
    template: 'fitness_intro',
    subject: 'Member onboarding ideas for GreenFit',
    body: 'Hi Mike, GreenFit has a great brand...',
    score: 85,
    priority: 'Hot',
  },
  {
    id: 'L003',
    name: 'Emily Carter',
    company: 'Carter Realty',
    website: 'carterrealty.com',
    email: 'emily@carterrealty.com',
    industry: 'Real Estate',
    status: 'Replied',
    notes: 'Wants pricing for full automation suite',
    lastContact: '2026-04-25',
    nextFollowUp: '2026-05-01',
    template: 'realestate_intro',
    subject: 'Lead nurturing sequences for Carter Realty',
    body: 'Hi Emily, congrats on the new listings...',
    score: 105,
    priority: 'Hot',
  },
  {
    id: 'L004',
    name: 'David Lee',
    company: 'Urban Cafe',
    website: 'urbancafe.com',
    email: 'david@urbancafe.com',
    industry: 'Restaurant',
    status: 'Converted',
    notes: 'Signed up for monthly plan',
    lastContact: '2026-04-20',
    nextFollowUp: '2026-05-15',
    template: 'restaurant_intro',
    subject: 'Reservation reminders for Urban Cafe',
    body: 'Hi David, Urban Cafe has amazing reviews...',
    score: 135,
    priority: 'Hot',
  },
  {
    id: 'L005',
    name: 'Olivia Brown',
    company: 'BrightSmile Clinic',
    website: 'brightsmileclinic.com',
    email: 'olivia@brightsmileclinic.com',
    industry: 'Healthcare',
    status: 'Drafted',
    notes: 'Initial draft prepared, awaiting review',
    lastContact: '2026-04-23',
    nextFollowUp: '2026-05-03',
    template: 'healthcare_intro',
    subject: 'Smart reminders for BrightSmile Clinic',
    body: 'Hi Olivia, BrightSmile reviews are excellent...',
    score: 55,
    priority: 'Warm',
  },
  {
    id: 'L006',
    name: 'James Wilson',
    company: 'Peak Performance Gym',
    website: 'peakperformance.com',
    email: 'james@peakperformance.com',
    industry: 'Fitness',
    status: 'Contacted',
    notes: 'Following up on initial outreach',
    lastContact: '2026-04-26',
    nextFollowUp: '2026-04-29',
    template: 'fitness_intro',
    subject: 'Personalized member journeys at Peak Performance',
    body: 'Hi James, Peak Performance has strong retention...',
    score: 85,
    priority: 'Hot',
  },
]

export const EMAIL_QUEUE = {
  Drafted: 2,
  Sent: 4,
  Approved: 0,
  Failed: 0,
}

export const STATUS_COLORS = {
  Drafted: '#94a3b8',
  Contacted: '#3b82f6',
  Replied: '#8b5cf6',
  Converted: '#10b981',
}

export const PRIORITY_COLORS = {
  Hot: '#ef4444',
  Warm: '#f59e0b',
}

export const QUEUE_COLORS = {
  Drafted: '#94a3b8',
  Sent: '#10b981',
  Approved: '#3b82f6',
  Failed: '#ef4444',
}

export function formatDate(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
