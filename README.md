# AI Lead Tracker CRM

A client-facing CRM analytics dashboard built with React, Google Sheets, and Google Apps Script. The system uses Google Sheets as the lead database, Apps Script as the automation and API layer, and a Vercel-hosted React dashboard to display live pipeline, outreach, and follow-up insights.

The current React dashboard is read-only. It fetches live CRM data through an Apps Script Web App API when configured, and uses demo fallback data when no live endpoint is available.

## Live Demo

[Add Vercel live link here]

## Screenshots

Add screenshots of the deployed dashboard here:

![AI Lead Tracker CRM dashboard overview](public/screenshots/ai-lead-tracker-dashboard.png)

![AI Lead Tracker CRM lead table](public/screenshots/ai-lead-tracker-leads-table.png)

![AI Lead Tracker CRM charts](public/screenshots/ai-lead-tracker-charts.png)

## Project Overview

AI Lead Tracker CRM is a lightweight sales operations system for freelancers, agencies, consultants, and small businesses that need a practical way to organize leads without paying for a full CRM platform.

The project combines a familiar spreadsheet workflow with a polished dashboard experience:

- Google Sheets stores lead records, outreach status, scores, priority labels, email queue state, and follow-up dates.
- Google Apps Script prepares CRM data, refreshes dashboard metrics, and exposes a Web App API endpoint.
- React presents the data in KPI cards, charts, filtered tables, and follow-up sections for quick client-facing review.

## Problem

Many small teams manage sales opportunities across spreadsheets, notes, inboxes, and messaging apps. That makes it easy to lose context, miss follow-ups, forget which emails are queued, and overlook high-priority leads.

Traditional CRM platforms can solve this, but they may be too expensive, complex, or heavy for early-stage outreach workflows.

## Solution

This project turns Google Sheets into a simple CRM database and connects it to a modern React dashboard. The result is a low-cost, transparent lead tracking system that keeps pipeline data visible while preserving the flexibility of spreadsheets.

The dashboard is designed for review and reporting: it surfaces lead counts, outreach status, hot leads, follow-ups due today, priority distribution, and email queue health in one place.

## Features

- Lead database managed in Google Sheets
- Lead status tracking across outreach stages
- Email draft workflow visibility
- Email queue status tracking
- Follow-up date tracking
- Lead scoring
- Hot and Warm priority labels
- Apps Script dashboard refresh workflow
- Apps Script Web App API endpoint
- React KPI cards
- Leads by status chart
- Priority split chart
- Email queue chart
- Hot leads table
- Follow-ups due today section
- Searchable lead table
- Status filter
- Priority filter
- System architecture card
- Live data badge
- Demo fallback behavior when no API endpoint is configured

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Recharts
- Lucide React
- Google Sheets
- Google Apps Script
- Apps Script Web App API
- Vercel

## System Architecture

```text
Google Sheets CRM
    stores leads, status, follow-up dates, scores, priorities, and email queue data

        |
        v

Google Apps Script
    refreshes dashboard data and exposes a Web App API

        |
        v

Apps Script Web App API
    returns structured dashboard JSON

        |
        v

React Dashboard on Vercel
    displays KPIs, charts, filtered tables, live data state, and fallback demo data
```

The React application currently performs read-only data access. It does not create, update, delete, approve, or send records from the browser.

## How It Works

1. Leads are entered and managed in Google Sheets.
2. Apps Script reads the CRM sheet and prepares dashboard-friendly data.
3. The Apps Script Web App API exposes the dashboard payload.
4. The React dashboard requests live data using the configured API URL.
5. If live data loads successfully, the dashboard displays the connected Google Sheets data.
6. If the API URL is missing or the request fails, the dashboard displays local demo data so the portfolio project remains reviewable.

## Google Sheets CRM

Google Sheets acts as the operational CRM database. It is used to manage lead records and workflow fields such as:

- Lead name
- Company
- Website
- Email
- Industry
- Outreach status
- Notes
- Last contact date
- Next follow-up date
- Email template
- Drafted subject and body
- Lead score
- Priority label

This keeps the backend simple, editable, and easy for non-technical users to understand.

## Apps Script API

Google Apps Script provides the automation and API layer between the spreadsheet and the React dashboard.

The dashboard expects an Apps Script Web App endpoint that can return structured JSON for dashboard data. In this project, the React client calls the configured endpoint with a dashboard action query and normalizes the response for display.

No real Apps Script API URL is included in this repository. Production and demo endpoints should be stored in environment variables, not committed to source control.

## React Dashboard

The React dashboard is the client-facing analytics layer. It transforms CRM data into a clean interface with:

- KPI cards for total leads, drafted leads, contacted leads, replies, conversions, sent emails, hot leads, and average score
- Recharts visualizations for lead status, priority mix, and email queue state
- Hot leads table
- Follow-ups due today section
- Searchable and filterable lead table
- System architecture summary
- Live/demo data indicator

The dashboard is intentionally read-only at this stage to keep the browser experience safe for demos and client review.

## Lead Scoring Logic

Lead scoring is designed to help prioritize outreach. Scores are stored with each lead record and displayed in the dashboard as both an individual score and an average score metric.

Priority labels are derived from the CRM data:

- `Hot` leads are high-priority opportunities that should receive faster attention.
- `Warm` leads are active or useful opportunities that may need normal follow-up.

The current frontend displays and normalizes score and priority values from the Apps Script response or demo dataset. Scoring rules can be expanded in Apps Script or the spreadsheet workflow as the CRM matures.

## Local Setup

From the repository root:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The Vite app lives in the `lead-tracker-dashboard/` directory. The root package scripts delegate to that app directory.

## Environment Variables

Create a local environment file for the Vite app:

```bash
lead-tracker-dashboard/.env.local
```

Add the Apps Script Web App API URL:

```bash
VITE_APPS_SCRIPT_API_URL=your_apps_script_web_app_url_here
```

Important:

- Do not commit `.env.local`.
- Do not hard-code the Apps Script URL in React files.
- Keep production API URLs in Vercel environment variables.
- If `VITE_APPS_SCRIPT_API_URL` is not set, the dashboard will use demo fallback data.

## Deployment Notes

The dashboard is deployed on Vercel as a Vite React app.

Recommended deployment flow:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set the project root/build settings according to the app directory structure.
4. Use the Vite production build command.
5. Add `VITE_APPS_SCRIPT_API_URL` in Vercel project environment variables.
6. Deploy and verify the live data badge.
7. Confirm fallback behavior by testing without the API variable in a local environment.

Do not expose the Apps Script Web App URL in the README, screenshots, commits, or public issue threads.

## Responsible Outreach Note

This project is intended for organized, responsible lead management. Any outreach workflow connected to this CRM should follow applicable email, privacy, platform, and anti-spam rules.

Recommended practices:

- Contact relevant prospects only.
- Avoid deceptive or misleading email content.
- Respect unsubscribe and opt-out requests.
- Keep lead data accurate and necessary.
- Review automated drafts before sending.

## Future Improvements

- Write actions from React with authenticated Apps Script endpoints
- User authentication and role-based access
- Follow-up reminders
- Email approval workflow
- Email send history
- Import and export tools
- Advanced pipeline analytics
- CRM activity timeline
- Supabase or database-backed version for larger teams
- Error monitoring and API health checks

## Portfolio Case Study Summary

AI Lead Tracker CRM demonstrates how a practical automation system can combine spreadsheet operations, Apps Script workflows, and a modern React dashboard into a client-ready product experience.

The project is especially relevant for freelance automation, sales operations, and small business CRM use cases because it shows:

- A low-cost Google Sheets CRM backend
- A serverless Apps Script API layer
- A deployed React analytics dashboard
- Live data integration with graceful demo fallback
- Clear separation between database, automation, API, and presentation layers

This makes the project suitable for GitHub, Fiverr, Upwork, LinkedIn, and client portfolio presentations.
