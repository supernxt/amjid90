# Super Next Technologies - Project Overview

## Overview

Super Next Technologies is an enterprise technology solutions provider offering AI-powered services, wireless infrastructure, and immersive 3D web experiences. The application is a full-stack web platform built to showcase the company's services including AI agents & automations, enterprise wireless hotspots, cloud infrastructure, and custom website development.

The platform features a modern, immersive design with 3D visual elements, targeting enterprise clients in UAE/GCC regions. It serves as both a marketing website and a demonstration of the company's technical capabilities through advanced 3D visualizations and interactive components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing without full page reloads

**UI Component System**
- shadcn/ui components built on Radix UI primitives for accessible, customizable UI elements
- TailwindCSS for utility-first styling with custom design system
- Class Variance Authority (CVA) for component variant management
- Custom theme system supporting light/dark modes with CSS variables

**Background & Animation Layer**
- VideoBackground component with solid CSS gradient backgrounds matching logo red theme
- Variant-specific gradient configurations for different sections (AI, wireless, infrastructure, web, pricing, legal)
- Dark slate backgrounds with subtle red accent overlays (red-950, red-900, red-500 at various opacities)
- Animated glow orbs with red accent colors for ambient visual interest
- Subtle grid pattern overlay with red tint (opacity: 0.02)
- Framer Motion for page transitions, scroll-based reveals, and micro-interactions
- VideoSlider component with animated CSS gradients and particle effects
- Design inspired by Linear (typography) and Stripe (color restraint) with clean solid color backgrounds

**State Management**
- TanStack Query (React Query) for server state management, caching, and API interactions
- React Hook Form with Zod resolvers for form state and validation
- Local component state with React hooks for UI-specific state

**Design System**
- Dark-first theme with solid gradient backgrounds and vibrant red (#FF3333) accent matching company logo
- Typography using Inter/DM Sans for body, Space Grotesk/Orbitron for display text
- Dark slate (slate-950, slate-900) backgrounds with red accent gradients for visual hierarchy
- Consistent spacing primitives (4, 8, 12, 16, 20, 24, 32) using Tailwind units
- Responsive breakpoints: mobile-first with md, lg, xl viewports

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server with TypeScript
- Custom middleware for request logging, JSON parsing, and error handling
- Route registration pattern separating concerns between routing logic and server setup

**API Design**
- RESTful API structure with /api prefix for all application routes
- Memory-based storage layer with interface-driven design (IStorage) allowing future database integration
- Standardized error handling with status codes and JSON responses

**Development Tools**
- Vite middleware integration for HMR in development mode
- Custom logging system with timestamp formatting
- Runtime error overlay for development debugging

### Database & Data Layer

**ORM & Schema**
- Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- Neon Database serverless PostgreSQL as the target database platform
- Schema-first approach with Zod validation integration via drizzle-zod
- Migration system using drizzle-kit for schema version control

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Extensible schema design ready for additional tables (sessions, content, etc.)

**Storage Pattern**
- Abstract IStorage interface defining CRUD operations
- MemStorage implementation for development/testing without database dependency
- Designed for easy swap to database-backed storage (DrizzleStorage) when needed

### External Dependencies

**Third-Party Services**
- ElevenLabs Conversational AI widget for voice assistant functionality (agent ID: agent_9801k71wapq9ehvrghfwzstqjbdn)
- Google Fonts CDN for typography (Inter, Space Grotesk, JetBrains Mono)
- WhatsApp integration for customer communication (contact: 048864215)

**UI Libraries**
- Radix UI for accessible primitive components (dialogs, dropdowns, tooltips, etc.)
- Embla Carousel for touch-friendly carousels
- Lucide React for consistent icon system
- React Icons for additional icon coverage (WhatsApp, social media)

**Development & Build Tools**
- TypeScript for static type checking across full stack
- ESBuild for server bundle optimization in production
- PostCSS with Autoprefixer for CSS processing
- Replit-specific plugins for development (cartographer, dev banner, runtime error modal)

**Database & Infrastructure**
- @neondatabase/serverless for serverless PostgreSQL connections
- connect-pg-simple for PostgreSQL session storage (future authentication)
- drizzle-orm and drizzle-kit for database operations and migrations

**Key Integration Points**
- Session management system ready for authentication implementation
- Voice AI assistant embedded globally via custom web component
- Contact mechanisms: phone (048864215), email, WhatsApp, and AI assistant
- SEO optimization with meta tags, Open Graph, and semantic HTML structure

## Recent Changes

### January 20, 2026 - Modern Design Overhaul
- Redesigned Hero3D with floating animated icons, gradient text effects, and stats row (500+ Projects, 99.9% Uptime, 24/7 AI Support)
- Added scroll indicator animation and improved CTA button styling with gradients
- Updated Navbar with scroll-based transparency, glassmorphism effects, and improved mobile menu
- Modernized VideoSlider with glassmorphism cards, floating particles (pre-computed positions), and unique color schemes per slide
- Enhanced ValueTiles with hover effects, gradient backgrounds, "Learn more" CTAs, and links to service pages
- Expanded TrustBar to 6 stats (ISO 27001, 99.9% Uptime, Enterprise Grade, 500+ Clients, 24/7 AI Support, GCC Coverage)
- Redesigned OfferStrip with animated gradient background and sparkle effects
- Updated Footer with social links (WhatsApp, LinkedIn, Instagram), contact cards, and improved layout
- Improved VideoBackground with mesh gradients, animated orbs, and subtle noise texture
- Simplified AIVoiceWidget error handling for cleaner code
- All components follow modern AI/tech design trends: glassmorphism, gradient meshes, smooth animations

### November 3, 2025 - Solid Color Backgrounds & Red Theme
- Replaced video backgrounds with solid CSS gradient backgrounds matching logo color scheme
- Updated VideoBackground component to use variant-specific CSS gradients (dark slate with red accents)
- Updated VideoSlider component to use animated CSS gradients instead of video playback
- Removed all video elements for improved performance and accessibility
- Implemented dark slate (slate-950, slate-900) backgrounds with red accent overlays (red-950/25-40, red-500/3-6)
- Added subtle grid pattern overlay with red tint and animated glow orbs
- All 13 pages now use solid gradient backgrounds (Home, AISolutions, WirelessHotspot, Infrastructure, WebsiteDevelopment, Pricing, Contact, CaseStudies, Support, Templates, About, EULA, PrivacyPolicy)
- Changed entire color scheme from blue to vibrant red (#FF3333) matching company logo
- Updated CSS theme variables for primary (0 100% 60%) and accent (10 100% 70%) colors

### October 29, 2025 - Legal Pages Added
- Created `/legal/eula` page (End-User License Agreement) with formatted content from provided PDF
- Created `/legal/privacy` page (Privacy Policy) with formatted content from provided PDF
- Added routes in App.tsx for legal pages
- Updated Footer.tsx to link to legal pages under "Company" section
- Pages include cross-navigation buttons and "Back to Home" functionality
- All pages tested and verified with automated browser tests