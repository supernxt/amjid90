# Super Next Technologies - Design Guidelines

## Design Approach
**Reference-Based + Custom 3D Immersive Experience**
- Inspiration: Linear's typography precision + Stripe's color restraint + custom 3D elements
- Focus: Immersive 3D scenes with enterprise-grade professional presentation
- Primary differentiation: Advanced 3D visualizations showcasing technical capabilities

## Color Palette

### Dark Theme (Primary)
- **Background**: Deep space black with subtle gradients
- **Primary Brand**: Neon cyan/blue (190 95% 65%)
- **Accent Glow**: Electric white/cyan glow effects for 3D elements
- **Text**: White (0 0% 100%) primary, cyan-tinted (190 30% 80%) secondary
- **Cards/Surfaces**: Dark navy with subtle transparency (210 40% 12%)
- **Interactive Elements**: Neon blue hover states with glow

### Trust & Status Colors
- **Success/Uptime**: Green (142 76% 45%)
- **Premium Features**: Cyan gradient overlays
- **CTAs**: Electric blue with white glow (200 100% 60%)

## Typography

### Font System
- **Primary**: Inter or DM Sans (Google Fonts CDN)
- **Display/Hero**: Space Grotesk or Orbitron for futuristic tech feel
- **Code/Technical**: JetBrains Mono for technical specs

### Scale
- **Hero Headlines**: text-6xl md:text-7xl lg:text-8xl, font-bold
- **Section Headers**: text-4xl md:text-5xl, font-semibold
- **Body**: text-base md:text-lg, leading-relaxed
- **Captions**: text-sm, opacity-80

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 8, 12, 16, 20, 24, 32** (e.g., p-8, gap-12, my-20)

### Container Strategy
- Full-width 3D scenes: `w-full h-screen` for hero sections
- Content containers: `max-w-7xl mx-auto px-4 md:px-8`
- Text-focused sections: `max-w-4xl mx-auto`
- Multi-column grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`

### Vertical Rhythm
- Hero sections: `min-h-screen` with 3D canvas background
- Content sections: `py-20 md:py-32`
- Component spacing: `space-y-12 md:space-y-16`

## Component Library

### Navigation (Sticky Top Bar)
- Fixed header with glassmorphic background (backdrop-blur-xl bg-black/50)
- Logo left, 11 tab navigation center, Contact/WhatsApp button right
- Tabs: Home | AI Solutions | Wireless Hotspot | Infrastructure | Website Development | Templates & Use Cases | Pricing | Case Studies | Support | About | Contact
- Mobile: Hamburger menu with slide-in panel

### 3D Hero Scenes (React Three Fiber)
- **Home**: Floating neural network morphing into city mesh with data streams
- **AI Solutions**: Particle system forming AI agent icons
- **Wireless**: Radio wave visualizations with AP nodes
- **Infrastructure**: Network topology 3D graph with animated connections
- Camera controls: Gentle auto-rotation, mouse parallax interaction

### Card Systems

**3D Flip Cards** (AI Solutions, Templates)
- Front: Icon + Title + Brief description
- Back: Detailed features + CTA button
- Hover: 3D rotate transform with glow effect
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

**Hover Lift Cards** (Value Tiles, Features)
- Glassmorphic background with border glow
- Transform scale on hover (scale-105)
- Shadow elevation increase
- Neon border animation

**Pricing Cards**
- Tiered display with "Most Popular" badge for Pro tier
- Feature comparison checkmarks with cyan accent
- Prominent CTAs with different variants per tier
- Badge overlay for "Free Domain Hosting" offers

### CTAs & Interactive Elements

**Primary CTAs**: 
- "Talk to AI Assistant" - Neon cyan with pulse animation
- "Book a Demo" - Solid cyan with white text
- "Request Proposal" - Outline variant with blur backdrop on images

**Floating Contact Cluster** (Bottom Right)
- WhatsApp icon button (048864215)
- Phone call button
- Stacked vertically with consistent spacing (gap-3)
- Semi-transparent dark background with blur

**Magnetic Buttons**: Subtle cursor-follow effect on hover for primary actions

### Footer Integration

**Fixed Voice Assistant Widget**
- Bottom-right position, z-50
- ElevenLabs ConvAI embed: `<elevenlabs-convai agent-id="agent_9801k71wapq9ehvrghfwzstqjbdn">`
- Script: `https://unpkg.com/@elevenlabs/convai-widget-embed`
- Compact contact info beside widget: Call/WhatsApp, Support, Status, Privacy, Terms
- Non-blocking UI, easily dismissible

### Special Sections

**Quick Offer Strip** (Home)
- Horizontal scroll or marquee effect
- "Free 1-Year Domain Hosting • Free Domain • Free Email Hosting"
- Neon text with glow on dark background
- Prominent placement below hero

**Trust Bar**
- Client logos in grayscale with color on hover
- SLA badges, uptime percentages, ISO certifications
- Ticker animation or fade carousel

**AI Agent Categories** (Filterable)
- Tab filters: All | Marketing | Operations | Product | Sales | Support
- Active tab with neon underline indicator
- Smooth fade transitions between filtered sets

**Wireless Hotspot Features Tabs**
- Horizontal tab navigation within the page
- Captive Portal | Security | Performance | Monetization | Analytics
- Content slides in from right on tab change

## Animations

**Page Transitions** (Framer Motion)
- Fade in + slide up on route change
- Stagger children for card grids (staggerChildren: 0.1)
- Exit animations: fade out + slight scale down

**Scroll Reveals**
- Elements fade in + translate Y as they enter viewport
- 3D scenes: Parallax layers at different speeds
- Counter animations for statistics (count-up effect)

**3D Specific**
- Auto-rotate on idle, pause on user interaction
- Gentle floating/bobbing animations for hero objects
- Particle systems with physics-based movement

**Reduced Motion**
- Respect `prefers-reduced-motion` media query
- Fallback to crossfade transitions only
- Disable 3D auto-animations

## Images

**Hero Sections**: 
- Abstract 3D renders or neural network visualizations (procedurally generated via Three.js preferred)
- Fallback: High-resolution tech-themed imagery if 3D fails to load

**Case Studies**: 
- Before/after screenshots with overlay metrics
- Client logos and project mockups

**About/Team**: 
- Professional team photos with neon accent borders
- Office/lab environment shots with blue color grade

## Accessibility & Performance

- Keyboard navigation with visible focus rings (cyan glow)
- ARIA labels for 3D interactive elements
- Lazy-load 3D scenes below fold
- Texture compression and LOD for models
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Lighthouse score ≥ 90 across metrics

## Responsive Breakpoints

- Mobile: < 768px (stack all, simplified 3D or static fallback)
- Tablet: 768px - 1024px (2-column grids, reduced 3D complexity)
- Desktop: 1024px+ (full 3D experience, multi-column layouts)
- Ultra-wide: 1920px+ (max-w-[1920px] container constraint)