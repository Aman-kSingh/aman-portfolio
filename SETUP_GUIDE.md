# Complete Setup & Customization Guide

## 📦 Step-by-Step Setup

### 1. Install Node.js
- Download from [nodejs.org](https://nodejs.org/)
- Verify installation: `node --version` (should be 18.0+)

### 2. Setup Your Portfolio

```bash
# Navigate to the project folder
cd aman-portfolio

# Install all dependencies
npm install

# Start development server
npm run dev
```

Your site will be running at `http://localhost:3000`

## ✏️ Customization Checklist

### 🎯 Must Change

- [ ] **Your Name** in `components/Hero.tsx` (line 51)
- [ ] **Your Email** in `components/Hero.tsx` (line 103)
- [ ] **Social Links** in `components/Hero.tsx` (lines 99-101)
- [ ] **Your Bio** in `components/About.tsx` (lines 31-50)
- [ ] **Tech Stack** in `components/About.tsx` (line 54)
- [ ] **Projects** in `components/Projects.tsx` (lines 6-34)
- [ ] **Contact Email** in `components/Contact.tsx` (lines 89, 105)
- [ ] **Social Links** in `components/Footer.tsx` (lines 44-47)
- [ ] **Site Title** in `app/layout.tsx` (line 12)

### 🎨 Optional Changes

- [ ] Colors in `tailwind.config.js`
- [ ] Stats numbers in `components/Stats.tsx`
- [ ] Services in `components/Services.tsx`
- [ ] Add your own project images

## 🖼️ Adding Project Images

### Option 1: Use Unsplash (Quick)
Keep the existing Unsplash URLs or find new ones at [unsplash.com](https://unsplash.com)

### Option 2: Your Own Images
1. Create `/public/images` folder
2. Add your images there
3. Update image paths:
```typescript
image: '/images/my-project.png'
```

## 🔗 Update Social Links

Find and replace these in multiple files:

- **GitHub:** `https://github.com/yourusername`
- **LinkedIn:** `https://linkedin.com/in/yourusername`
- **Twitter:** `https://twitter.com/yourusername`
- **Email:** `your.email@example.com`

Files to update:
1. `components/Hero.tsx`
2. `components/CommandPalette.tsx`
3. `components/Footer.tsx`

## 🎨 Color Customization

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Your main color
    600: '#0284c7', // Darker shade
    // ... add more shades
  },
}
```

Then use in components:
```jsx
className="bg-primary-500 text-white"
```

## 📧 Email Form Setup

The contact form is ready but needs a backend. Options:

### Option 1: EmailJS (Free)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your keys
3. Install: `npm install @emailjs/browser`
4. Update `components/Contact.tsx`

### Option 2: Formspree (Easy)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your endpoint
3. Update form action

### Option 3: Your Own API
Create an API route in `app/api/contact/route.ts`

## 🚀 Deployment Guide

### Vercel (Easiest - Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Click "Deploy"
   - Done! 🎉

### Netlify

1. Push to GitHub (same as above)
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

## 🎯 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before uploading
   - Use Next.js Image component

2. **Reduce Bundle Size**
   - Only import icons you use
   - Code split large components

3. **Add Loading States**
   - Show skeleton loaders
   - Add suspense boundaries

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check for TypeScript errors
npm run build
```

## 📱 Testing

1. **Desktop browsers:** Chrome, Firefox, Safari
2. **Mobile:** Test on actual devices
3. **Responsive:** Use browser dev tools (F12)
4. **Performance:** Use Lighthouse in Chrome DevTools

## 🔒 Security

Before deployment:
- [ ] Remove any API keys from code
- [ ] Use environment variables
- [ ] Don't commit `.env.local`
- [ ] Review all public URLs

## 📊 Analytics (Optional)

Add Google Analytics:
1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Install: `npm install @next/third-parties`
3. Add to `app/layout.tsx`

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Next Steps

After basic setup:
1. Add a blog section
2. Integrate CMS (Contentful, Sanity)
3. Add dark/light mode toggle
4. Create more pages (Resume, Uses, etc.)
5. Add animations
6. Implement blog with MDX
7. Add SEO optimization

## 🤝 Need Help?

- Check GitHub issues
- Join Next.js Discord
- Stack Overflow
- Twitter: #nextjs #webdev

---

Good luck with your portfolio! 🚀
