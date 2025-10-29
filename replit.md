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

**3D & Animation Layer**
- Custom 3D background components using HTML5 Canvas for particle effects and visual elements
- Framer Motion for page transitions, scroll-based reveals, and micro-interactions
- Design inspired by Linear (typography) and Stripe (color restraint) with custom immersive 3D elements

**State Management**
- TanStack Query (React Query) for server state management, caching, and API interactions
- React Hook Form with Zod resolvers for form state and validation
- Local component state with React hooks for UI-specific state

**Design System**
- Dark-first theme with deep space black backgrounds and neon cyan/blue accents
- Typography using Inter/DM Sans for body, Space Grotesk/Orbitron for display text
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

### October 29, 2025 - Legal Pages Added
- Created `/legal/eula` page (End-User License Agreement) with formatted content from provided PDF
- Created `/legal/privacy` page (Privacy Policy) with formatted content from provided PDF
- Both pages use Background3D wrapper, Card components, and match existing design system
- Added routes in App.tsx for legal pages
- Updated Footer.tsx to link to legal pages under "Company" section
- Pages include cross-navigation buttons and "Back to Home" functionality
- All pages tested and verified with automated browser tests