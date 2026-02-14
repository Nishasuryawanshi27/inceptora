# Inceptora - Production Deployment Guide

## 🚀 Vercel Deployment Instructions

### Prerequisites
- GitHub/GitLab/Bitbucket account
- Vercel account (free tier works)
- Supabase project

### Step 1: Environment Variables

Add these environment variables in your Vercel project settings:

```bash
VITE_SUPABASE_URL=https://xuimjildgbjplzzxusre.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1aW1qaWxkZ2JqcGx6enh1c3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MzQwNTIsImV4cCI6MjA4MzExMDA1Mn0.0ztrBIYAFYzLq9Q6_BPgquha4AOwfsKcK8Eghg6_tt8
```

### Step 2: Deploy to Vercel

#### Option A: CLI Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option B: Git-based Deployment
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com/new)
3. Select your repository
4. Add environment variables
5. Click "Deploy"

### Step 3: Build Configuration

Vercel will automatically detect the Vite configuration. The build settings are:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

## 📦 Manual Build (Local Testing)

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Stack Information

### Framework & Tools
- **Frontend:** Vite + React 18.3.1 + TypeScript
- **Routing:** React Router DOM v7
- **CSS:** Tailwind CSS v4.1.12
- **Auth:** Supabase Auth (Google OAuth + Email OTP)
- **Backend:** Supabase (PostgreSQL + Realtime + Storage)

### Key Dependencies
- **UI Components:** Radix UI, Material UI
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React, Material Icons
- **Forms:** React Hook Form
- **Charts:** Recharts
- **State:** React Hooks + Context

## 🛠️ Local Development

```bash
# Start development server
npm run dev

# Access at http://localhost:5173
```

## 🌐 Environment Variables

### Development (.env.local)
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Production (Vercel)
Add the same variables in Vercel Dashboard under:
**Project Settings → Environment Variables**

## ✅ Production Checklist

- [x] React Router DOM configured
- [x] index.html created
- [x] main.tsx entry point created
- [x] vercel.json for SPA routing
- [x] Environment variables setup
- [x] vite.config.ts with base: '/'
- [x] Build scripts in package.json
- [x] Supabase integration
- [x] .gitignore configured

## 🐛 Troubleshooting

### Issue: 404 on page refresh
**Solution:** The `vercel.json` rewrites all routes to `/index.html` for SPA routing.

### Issue: Environment variables not working
**Solution:** 
- In Vite, use `VITE_` prefix
- Access via `import.meta.env.VITE_VARIABLE_NAME`
- Restart dev server after changing .env

### Issue: Build fails
**Solution:**
- Clear node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`
- Try build: `npm run build`

## 📊 Performance Optimizations

- Code splitting configured (react-vendor, ui-vendor chunks)
- Tree shaking enabled
- Lazy loading for routes (can be added)
- Image optimization via ImageWithFallback component

## 🔐 Security Headers

Security headers are configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

## 📱 Mobile Optimization

- Responsive design (mobile-first)
- Touch-friendly UI (large targets)
- Smooth animations (60 FPS)
- Progressive Web App ready

## 🎨 Design System

- **Primary:** Deep Navy/Ink (#0a0e27)
- **Accent 1:** Neon Teal (#2dd4bf)
- **Accent 2:** Electric Purple (#a855f7)
- **CTA:** Warm Neon Orange (#ff6b35)
- **Surface:** Soft Off-white (#f8f9fa)

## 📝 Additional Notes

- The app uses state-based navigation (can be converted to React Router pages)
- Supabase handles all backend operations
- Real-time features available via Supabase Realtime
- File uploads supported via Supabase Storage

## 🚨 Important

After deployment:
1. Test all routes
2. Verify authentication flow
3. Check Supabase connection
4. Test on mobile devices
5. Verify environment variables

## 📞 Support

For issues or questions:
- Check Vercel deployment logs
- Review Supabase dashboard
- Verify environment variables
- Test locally first with `npm run build && npm run preview`

---

**Last Updated:** January 6, 2026
**Version:** 0.0.1
**Status:** ✅ Production Ready
