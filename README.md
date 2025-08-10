# BDC Tracker

Professional Business Development Company (BDC) investment tracking and analytics platform.

## Overview

BDC Tracker is a comprehensive SaaS dashboard for monitoring Business Development Company investments, providing real-time analytics, portfolio management, and market insights.

## Features

- **Investment Tracking**: Monitor your BDC portfolio with real-time data
- **Market Analytics**: Comprehensive BDC market trends and sector analysis
- **Portfolio Management**: Track performance, dividends, and allocation
- **Data Visualization**: Interactive charts and reports
- **Professional Dashboard**: Clean, responsive interface built for investors

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Charts**: Recharts for data visualization
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Authentication**: Supabase Auth (when connected)
- **Database**: Supabase (when connected)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bdc-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── DataTable.tsx    # Reusable data table with sorting/filtering
│   ├── LineChart.tsx    # Reusable chart component
│   └── ErrorBoundary.tsx # Global error handling
├── pages/
│   ├── Landing.tsx      # Landing page (/)
│   ├── BDCs.tsx         # BDC companies listing (/bdcs)
│   ├── Investments.tsx  # Portfolio tracking (/investments)
│   ├── Trends.tsx       # Market trends (/trends)
│   ├── Admin.tsx        # Admin dashboard (/admin)
│   ├── Docs.tsx         # Documentation (/docs)
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
└── assets/              # Images and static assets
```

## Routes

- `/` - Landing page with hero section and features
- `/bdcs` - BDC companies data and analytics
- `/investments` - Portfolio tracking and management
- `/trends` - Market trends and sector analysis
- `/admin` - System administration (protected)
- `/docs` - Documentation and help

## Key Components

### DataTable
Reusable table component with:
- Sorting by columns
- Search/filtering
- Pagination
- Responsive design

### LineChart
Recharts-based chart component with:
- Multiple data series
- Customizable colors
- Responsive container
- Tooltip and legend support

### Layout System
- Responsive navbar with mobile menu
- Footer with version/commit info
- Professional design system
- Dark/light mode support

## Design System

The app uses a professional financial theme with:
- Primary blue color scheme
- Clean typography
- Consistent spacing
- Professional shadows and transitions
- Responsive grid system

## Supabase Integration

To enable backend features (authentication, database):

1. Click the green Supabase button in Lovable
2. Connect your Supabase project
3. This enables:
   - User authentication
   - Data persistence
   - Real-time updates
   - File storage

## Environment Variables

### Setup

1. Copy `.env.example` to `.env` and fill in:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

2. For Vercel deployment, go to Project Settings → Environment Variables and add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

3. Development:
   ```bash
   npm install
   npm run dev
   ```

### Security Note

Never commit real Supabase keys to the repository. If keys were previously hardcoded:
1. Rotate keys in Supabase: Settings → API → "Reset" anon key
2. Update new keys in your local `.env` and Vercel env vars
3. Commit changes without keys (only `.env.example`)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- shadcn/ui for components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary. All rights reserved.

## Support

For questions or support, please refer to the documentation at `/docs` or contact our support team.