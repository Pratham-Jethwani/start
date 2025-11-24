# Resolve360 - React TypeScript Frontend

Modern React + TypeScript application for transparent consumer dispute resolution.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Button.tsx
├── pages/           # Page components (routes)
│   ├── LandingPage.tsx
│   ├── PricingPage.tsx
│   ├── ExplorePage.tsx
│   ├── SubmitCasePage.tsx
│   ├── CaseDetailPage.tsx
│   ├── SignInPage.tsx
│   ├── SignUpPage.tsx
│   ├── MyCasesPage.tsx
│   ├── BrandDashboardPage.tsx
│   └── BrandInboxPage.tsx
├── context/         # React Context providers
│   ├── AuthContext.tsx
│   └── ToastContext.tsx
├── hooks/           # Custom React hooks
│   └── useLocalStorage.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── utils/           # Utility functions
│   ├── validation.ts
│   └── formatters.ts
├── styles/          # Global CSS
│   └── global.css
├── App.tsx          # Main app component with routes
└── main.tsx         # Application entry point
```

## 🛣️ Routes

- `/` - Landing page
- `/pricing` - Pricing plans
- `/explore` - Browse public cases
- `/submit-case` - Submit a new case
- `/case/:id` - Case detail view
- `/signin` - Sign in
- `/signup` - Sign up
- `/my-cases` - User's cases dashboard
- `/brand/dashboard` - Brand dashboard
- `/brand/inbox` - Brand cases inbox

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **React Router 6** - Client-side routing
- **CSS** - Styling (vanilla CSS with design system)

## 📝 Development Status

### ✅ Completed
- Project setup and configuration
- TypeScript types and interfaces
- Authentication context
- Toast notification system
- Shared components (Navbar, Footer, Button)
- Complete Landing Page
- Routing structure

### 🚧 In Progress
- Converting remaining HTML pages to React components
- Form handling and validation
- API integration

## 🎨 Design System

All design tokens are defined in `src/styles/global.css`:
- CSS variables for colors, spacing, typography
- Reusable component styles
- Responsive breakpoints
- Animations and transitions

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication

The app uses a context-based authentication system:
- `AuthContext` provides auth state and methods
- `useAuth()` hook for accessing auth in components
- LocalStorage for session persistence (demo mode)

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

This is a demo/prototype application. For production use, you'll need to:
1. Connect to a real backend API
2. Implement proper authentication
3. Add form validation
4. Set up error boundaries
5. Add loading states
6. Implement data fetching

## 📄 License

All rights reserved - Resolve360
