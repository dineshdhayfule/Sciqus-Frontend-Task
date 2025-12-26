# SciQus Platform Dashboard

A modern, responsive, production-ready dashboard application built with Next.js 16, React 19, and Tailwind CSS. This platform provides a comprehensive analytics and management interface with smooth animations, intuitive navigation, and an exceptional mobile experience.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dineshdhayfule/Sciqus-Frontend-Task)

## 🚀 Features

### Core Features

- **Dashboard Overview**: Real-time metrics including revenue growth, user statistics, and key performance indicators
- **Analytics**: Detailed charts and graphs for tracking revenue trends, user growth, and category distribution
- **Settings**: User account management and notification preferences
- **Help & Support**: FAQ section and support resources
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### Enhanced UI/UX

- **Smooth Animations**: Page transitions and scroll-triggered fade-in effects using Framer Motion
- **Interactive Elements**: Hover effects with scale animations on cards, buttons, and navigation items
- **Mobile Gestures**: Swipe-to-close sidebar functionality for mobile devices
- **Touch Optimized**: Active states and press feedback on all interactive elements
- **Modern Navigation**: Unified sidebar navigation with search functionality in header
- **Loading States**: Beautiful skeleton loaders and smooth transitions

### Production Features

- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, sitemap, robots.txt
- **Performance**: Image optimization, SWC minification, code splitting
- **Security**: Security headers, environment variable management
- **Analytics**: Vercel Analytics integration
- **PWA Ready**: Web app manifest for installable experience
- **CI/CD**: GitHub Actions workflow for automated testing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v10 or higher)
- [Git](https://git-scm.com/)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dineshdhayfule/Sciqus-Frontend-Task.git
   cd Frontend
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your configuration:

   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   # Add other variables as needed
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `pnpm dev` - Start the development server (with Turbopack)
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm type-check` - Run TypeScript type checking
- `pnpm preview` - Build and preview production locally

## 🚢 Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your repository
4. Configure environment variables
5. Click "Deploy"

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_NAME=SciQus
# Add other variables from .env.example
```

### Post-Deployment

After deployment, update these files with your production domain:

- `app/robots.ts` - Update sitemap URL
- `app/sitemap.ts` - Update baseUrl
- `.env.local` - Update NEXT_PUBLIC_APP_URL

## 🏗️ Project Structure

```
Frontend/
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI/CD
├── app/                      # Next.js app directory
│   ├── dashboard/           # Dashboard routes (all pages)
│   │   ├── analytics/       # Analytics page with charts
│   │   ├── settings/        # Settings & preferences page
│   │   ├── help/           # Help & Support page
│   │   ├── layout.tsx      # Dashboard layout with navbar & sidebar
│   │   └── page.tsx        # Dashboard home page
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── robots.ts           # Robots.txt configuration
│   ├── sitemap.ts          # Sitemap generation
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── ui/                 # UI components (shadcn/ui)
│   ├── containers/         # Dashboard container components
│   ├── header.tsx          # Header with search & profile
│   ├── sidebar.tsx         # Sidebar navigation with swipe gestures
│   ├── page-transition.tsx # Page transition wrapper
│   └── fade-in.tsx         # Scroll-triggered fade-in animations
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
│   └── manifest.json       # PWA manifest
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── .vercelignore           # Vercel ignore rules
├── next.config.mjs         # Next.js configuration
├── vercel.json             # Vercel deployment configuration
├── tsconfig.json           # TypeScript configuration
├── DEPLOYMENT.md           # Deployment guide
├── PRODUCTION_CHECKLIST.md # Pre-deployment checklist
├── SECURITY.md             # Security policy
└── package.json            # Project dependencies
```

## 🎨 Tech Stack

### Core

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router & Turbopack
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### UI & Styling

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Data Visualization

- **[Recharts](https://recharts.org/)** - Charting library

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation

### Analytics

- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics

## 🎯 Key Features Explained

### Navigation System

The application features a modern, unified navigation:

- **Header**:
  - Company logo and branding
  - Search bar for quick access (desktop)
  - Notification bell with badge indicator
  - User profile icon
  - Mobile menu toggle button
- **Sidebar**:
  - All navigation links consolidated in sidebar
  - Smooth slide-in animation on mobile
  - Swipe-left gesture to close on mobile
  - Hover effects with scale animations
  - Active state indicators
  - Help card at bottom with call-to-action

### Page Animations

- **Page Transitions**: Smooth fade-in/slide-up animations when navigating
- **Scroll Animations**: Cards fade in as you scroll down
- **Staggered Effects**: Elements animate in sequence with delays
- **Hover States**: Scale and shadow effects on interactive elements
- **Touch Feedback**: Active press states on mobile devices

### Dashboard

- Key metrics display (Revenue Growth, Total Users)
- Animated container cards with smooth transitions
- Monthly performance tracking with carousels
- Platform features overview
- User testimonials with 5-star ratings
- Quick action buttons

### Analytics

- Revenue trend line chart (responsive)
- User growth bar chart
- Category distribution pie chart
- Key metrics cards with hover effects
- Mobile-optimized chart displays

### Settings

- Account profile management with input fields
- Notification preferences with toggles
- Password and security options
- Animated form cards
- Save buttons with hover effects

### Help & Support

- Quick resource cards with icons
- Comprehensive FAQ section with expandable items
- Contact support section
- Hover animations on all cards
- Schedule demo button

## 🔧 Configuration

### Next.js Configuration

The `next.config.mjs` file contains the Next.js configuration. Modify as needed for your deployment.

### Tailwind Configuration

Tailwind CSS is configured using the new v4 configuration in `postcss.config.mjs`.

### TypeScript Configuration

TypeScript settings are in `tsconfig.json`. The configuration is optimized for Next.js development.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 📱 Responsive Design

The application is fully responsive and optimized for all screen sizes:

### Mobile (320px - 767px)

- ✅ Hamburger menu with slide-in sidebar
- ✅ Swipe-left gesture to close sidebar
- ✅ Touch-optimized buttons with active states
- ✅ Responsive charts that adapt to screen width
- ✅ Stacked layout for better readability
- ✅ Company branding visible in header

### Tablet (768px - 1023px)

- ✅ Persistent sidebar navigation
- ✅ Two-column grid layouts
- ✅ Optimized spacing and typography
- ✅ Full feature access

### Desktop (1024px and up)

- ✅ Persistent sidebar with hover effects
- ✅ Search bar in header
- ✅ Multi-column layouts (3+ columns)
- ✅ Advanced hover interactions
- ✅ Optimal chart and data visualization

### Large Screens (1280px and up)

- ✅ Maximum width constraints for readability
- ✅ Enhanced spacing and visual hierarchy
- ✅ Full-width data tables and charts

## ✨ Animation Features

### Page-Level Animations

- **Entry Animations**: Pages fade in with upward slide on load
- **Exit Animations**: Smooth fade out when navigating away
- **Duration**: 300ms with easeInOut timing

### Component Animations

- **Fade-In on Scroll**: Components animate when they enter viewport
- **Staggered Loading**: Sequential delays (0.1s, 0.2s, etc.) for visual flow
- **Hover Effects**:
  - Cards: `scale-105` with shadow increase
  - Buttons: `scale-105` on hover, `scale-95` on press
  - Links: `scale-105` animation
- **Touch States**: Active press feedback on all interactive elements

### Mobile Gestures

- **Swipe to Close**: Sidebar closes with left swipe (>75px threshold)
- **Smooth Transitions**: 300ms duration for all animations
- **Backdrop**: Animated overlay fade on mobile sidebar

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
