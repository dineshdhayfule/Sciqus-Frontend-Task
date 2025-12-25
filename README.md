# Platform Dashboard

A modern, responsive dashboard application built with Next.js 16, React 19, and Tailwind CSS. This platform provides a comprehensive analytics and management interface with a clean, intuitive design.

## 🚀 Features

- **Dashboard Overview**: Real-time metrics including revenue growth, user statistics, and key performance indicators
- **Analytics**: Detailed charts and graphs for tracking revenue trends, user growth, and category distribution
- **Settings**: User account management and notification preferences
- **Help & Support**: FAQ section and support resources
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Built-in theme support with next-themes
- **Modern UI**: Powered by Radix UI components and Tailwind CSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v10 or higher)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Frontend
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `pnpm dev` - Start the development server (with Turbopack)
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
Frontend/
├── app/                      # Next.js app directory
│   ├── dashboard/           # Dashboard routes
│   │   ├── analytics/       # Analytics page
│   │   ├── settings/        # Settings page
│   │   ├── help/           # Help & Support page
│   │   ├── layout.tsx      # Dashboard layout with navbar
│   │   └── page.tsx        # Dashboard home page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── ui/                 # UI components (shadcn/ui)
│   ├── header.tsx          # Header navigation
│   └── sidebar.tsx         # Sidebar navigation
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
├── styles/                  # Additional styles
└── package.json            # Project dependencies

```

## 🎨 Tech Stack

### Core

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### UI & Styling

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Data Visualization

- **[Recharts](https://recharts.org/)** - Charting library

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation

### Analytics

- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics

## 🎯 Key Features Explained

### Navigation

The application features a persistent navigation system:

- **Header**: Top navigation bar with quick access to main sections
- **Sidebar**: Left-side navigation menu (collapsible on mobile)
- Both navigation components are integrated into the dashboard layout

### Dashboard

- Key metrics display (Revenue Growth, Total Users)
- Platform features overview
- Monthly performance tracking
- User testimonials
- Quick action buttons

### Analytics

- Revenue trend line chart
- User growth bar chart
- Category distribution visualization
- Customizable date ranges

### Settings

- Account profile management
- Notification preferences
- Password and security options
- Data privacy controls

### Help & Support

- Comprehensive FAQ section
- Support resources and documentation links
- Contact information

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

The application is fully responsive and optimized for:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop (1024px and up)
- 🖥️ Large screens (1280px and up)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request