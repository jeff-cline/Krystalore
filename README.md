# Executive Krystal Ore Platform

A comprehensive Next.js platform for leadership development, personal transformation, and executive coaching by Krystal Ore.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at `http://localhost:3000` (or next available port).

## 🎨 Brand Colors

- **Primary Orange:** #FF8900 - Main CTA/accent color
- **Teal:** #34c5c5 - Secondary accent
- **Black:** #000000 - Backgrounds, text
- **Dark Gray:** #3A3A3A - Secondary backgrounds
- **Light BG:** #F6F8FA - Section backgrounds
- **White:** #FFFFFF - Text on dark, card backgrounds

## 📁 Project Structure

### Public Pages
- `/` - Landing page with hero, features, and CTAs
- `/login` - User authentication
- `/signup` - User registration with role selection
- `/quizzes` - Assessment center listing
- `/quizzes/[quiz-name]` - Individual quiz pages:
  - life-alignment
  - emotional-intelligence
  - marathon-ready
  - relationship-management
  - self-management
  - social-awareness
  - retreat-ready
  - personality

### Dashboard Pages (Member Area)
- `/dashboard` - Member home with gamification (points, badges, streaks)
- `/dashboard/courses` - Course listing and management
- `/dashboard/courses/[course-slug]` - Individual course pages
- `/dashboard/podcasts` - Podcast library
- `/dashboard/books` - Digital book library
- `/dashboard/fitness` - Beyond Limits Bootcamp hub
- `/dashboard/fitness/vault` - Video library with category filters
- `/dashboard/fitness/live` - Live workout sessions
- `/dashboard/fitness/coaching` - Personal coaching
- `/dashboard/community` - Community groups by avatar
- `/dashboard/referral` - Referral program dashboard

### Admin Pages
- `/admin/settings` - System settings with Google Drive integration
- `/admin/users` - User management and analytics
- `/admin/content` - Content management system
- `/admin/analytics` - Platform analytics dashboard

## 👥 User Roles & Access

### Demo Accounts
- **God Account:** jeff.cline@me.com (full system access)
- **Admin Account:** krystalore@crewsbeyondlimitsconsulting.com (admin panel access)
- **Members:** Any other email (dashboard access)

### Community Avatars
- **Veterans:** Military service members and veterans
- **Women Leaders:** Women in leadership positions
- **Entrepreneurs:** Business owners and founders
- **Corporate Executives:** Corporate leadership roles

## 📚 Content Categories

### Courses (14 total)
- Bombshell Bootcamp
- Relationship Remodel
- Vision Board Workshop
- Confidence on Camera
- Monday Motivation
- Just Breathe Meditation
- Million Dollar Body
- Boundaries for Leaders
- 6-Week Shred
- Healthy Habits
- Identity Crisis
- Rise Beyond Grief
- Freedom Friday
- Business Bootcamp

### Podcasts (5 series)
- Krystal Clear Life
- Your Next Mission
- Monday Motivation Live
- Freedom Friday
- Just Breathe Meditation

### Books (5 titles)
- Krystal Clear Life Planner
- Men's Tactical Life Planner
- Road to Resilience
- Leave No Milspouse Behind
- Is Manifesting Bullshit?

### Fitness Categories (Beyond Limits Bootcamp)
- Monday Motivator
- Wacky Wednesday
- Fighter Friday
- Modified (gentle options)
- Accelerated (quick sessions)
- Weighted (strength training)
- Dance (movement & rhythm)
- Holiday (seasonal specials)

## 🛠 Technical Features

### Built With
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React 19** with modern features

### Key Components
- Responsive header with navigation
- Dashboard sidebar with role-based access
- Interactive quiz system
- Gamification elements (points, badges, streaks)
- Admin panel with Google Drive integration
- Content management system
- Analytics dashboard

### Styling System
- Custom color palette in Tailwind config
- Consistent component design
- Mobile-responsive layouts
- Hover states and transitions
- Accessibility considerations

## 🔧 Configuration

### Tailwind Colors
Custom color system defined in `tailwind.config.ts`:
- `primary` (Orange #FF8900)
- `secondary` (Teal #34c5c5)
- `dark` (Black/Gray scale)

### Environment Variables
Create `.env.local` for:
- Database connections
- Authentication secrets
- Google Drive API credentials
- Payment processor keys
- Email service configuration

## 🔐 Authentication Flow

1. Users visit `/signup` and select their avatar (community)
2. Account creation with role assignment
3. Email verification (configurable)
4. Redirect to appropriate dashboard
5. Role-based access control throughout app

## 📊 Admin Features

### Google Drive Integration
- Service account authentication
- File browser interface
- Category assignment for content
- Bulk sync functionality
- Storage management

### User Management
- User listing with filters
- Role assignments
- Account status management
- Bulk operations
- Communication tools

### Content Management
- Multi-media content support
- Approval workflows
- Category organization
- Bulk upload capabilities
- Storage tracking

### Analytics
- User engagement metrics
- Content performance
- Revenue tracking
- Growth analytics
- Activity monitoring

## 🎯 Key Features

- **Gamification:** Points, badges, streaks, and achievement system
- **Community:** Avatar-based groups with focused discussions
- **Assessment:** Comprehensive quiz system with personalized results
- **Content:** Multi-format learning materials (video, audio, text)
- **Fitness:** Categorized workout library with difficulty levels
- **Referrals:** Multi-tier commission system with bonuses
- **Mobile:** Fully responsive design for all devices

## 📱 Responsive Design

The platform is fully responsive with:
- Mobile-first approach
- Touch-friendly interfaces
- Optimized layouts for all screen sizes
- Progressive enhancement

## 🔒 Security Considerations

- Input validation and sanitization
- Role-based access controls
- Secure authentication flows
- Data encryption at rest
- HTTPS enforcement
- Session management
- CSRF protection

## 📈 Performance

- Optimized bundle sizes
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- SEO optimization

## 🤝 Support & Contact

- **Email:** krystalore@thecrewscoach.com
- **Phone:** +1 716-390-6727

## 📄 License

Private platform for Krystal Ore's executive coaching business.

---

Built with ❤️ for transforming leaders and changing lives.