# AI Lead Tracker CRM

A Google Sheets + Apps Script CRM system with a modern React dashboard for lead tracking, email workflow visibility, lead scoring, follow-up monitoring, and sales pipeline reporting.

This project was built as a portfolio-ready automation system for small businesses, agencies, consultants, clinics, real estate teams, fitness studios, and service providers who need a lightweight CRM without expensive software.

---

## Project Overview

AI Lead Tracker CRM helps businesses manage leads, generate personalized outreach email drafts, track follow-up status, identify hot leads, and monitor sales progress through a clean dashboard.

The system has two main parts:

1. **Google Sheets CRM + Apps Script Automation**
   - Stores lead data
   - Generates email drafts
   - Tracks lead status
   - Manages an email queue
   - Calculates lead scores and priority
   - Displays dashboard metrics

2. **React Dashboard**
   - Shows CRM metrics in a modern SaaS-style interface
   - Visualizes leads by status
   - Shows hot/warm priority split
   - Displays email queue performance
   - Provides searchable and filterable lead tables
   - Shows follow-ups due today
   - Explains the system architecture

---

## Live Demo Status

The React dashboard currently uses static demo data for portfolio presentation.

The Google Sheets + Apps Script version is functional separately and acts as the CRM backend and automation layer.

Future upgrade: connect the React dashboard to Google Sheets through an Apps Script Web App API.

---

## Features

### Google Sheets CRM

- Lead database
- Lead status tracking
- Follow-up date tracking
- Email draft generation
- Email queue
- Sent/draft email status tracking
- Lead score calculation
- Hot/Warm priority labels
- Dashboard metrics
- Apps Script menu automation

### React Dashboard

- KPI cards
- Leads by status chart
- Priority split chart
- Email queue chart
- Hot leads section
- Follow-ups due today section
- Searchable lead table
- Status filter
- Priority filter
- Responsive layout
- System architecture card

---

## Dashboard Metrics

The dashboard tracks:

- Total leads
- Drafted leads
- Contacted leads
- Replied leads
- Converted leads
- Sent emails
- Hot leads
- Average lead score
- Draft emails
- Follow-ups due today
- Reply rate
- Conversion rate

---

## Lead Scoring System

Leads are scored based on CRM activity and quality signals.

Example scoring logic:

| Signal | Score |
|---|---:|
| Website exists | +10 |
| Notes/pain point exists | +15 |
| Email draft generated | +10 |
| Status: New | +5 |
| Status: Drafted | +20 |
| Status: Contacted | +35 |
| Status: Replied | +70 |
| Status: Converted | +100 |
| Follow-up due today | +15 |

Priority levels:

| Score | Priority |
|---:|---|
| 80+ | Hot |
| 50–79 | Warm |
| 20–49 | Normal |
| Below 20 | Low |

---

## Demo Data

The dashboard uses realistic demo leads:

| ID | Name | Company | Industry | Status | Score | Priority |
|---|---|---|---|---|---:|---|
| L001 | Sarah Chen | Northside Dental | Healthcare | Drafted | 55 | Warm |
| L002 | Mike Adams | GreenFit Gym | Fitness | Contacted | 85 | Hot |
| L003 | Emily Carter | Carter Realty | Real Estate | Replied | 105 | Hot |
| L004 | David Lee | Urban Cafe | Restaurant | Converted | 135 | Hot |
| L005 | Olivia Brown | BrightSmile Clinic | Healthcare | Drafted | 55 | Warm |
| L006 | James Wilson | Peak Performance Gym | Fitness | Contacted | 85 | Hot |

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Recharts
- Lucide React
- Google Sheets
- Google Apps Script

---

## System Architecture

```text
Google Sheets CRM → Apps Script Automation → React Dashboard