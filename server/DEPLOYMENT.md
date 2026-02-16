# MASF Backend Deployment Guide - Render

## 📋 Prerequisites
- GitHub account
- Render account (free tier works)
- Gmail App Password for email service

---

## 🚀 Step-by-Step Deployment

### **Step 1: Prepare Your Code**

✅ **Already done:**
- `.gitignore` created
- `package.json` has proper start script
- Environment variables are in `.env` (will be set on Render)

---

### **Step 2: Push to GitHub**

1. **Initialize Git** (if not already done):
   ```bash
   cd d:\masf\MASF\server
   git init
   git add .
   git commit -m "Initial backend setup for MASF"
   ```

2. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Repository name: `MASF-backend` (or any name)
   - Make it **Private** (recommended for security)
   - Don't initialize with README (we already have one)
   - Click **Create repository**

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/MASF-backend.git
   git branch -M main
   git push -u origin main
   ```

---

### **Step 3: Deploy on Render**

1. **Go to Render Dashboard:**
   - Visit: https://render.com
   - Sign in or create account (use GitHub to sign in)

2. **Create New Web Service:**
   - Click **"New +"** button → Select **"Web Service"**
   - Connect your GitHub account if not connected
   - Find and select your `MASF-backend` repository
   - Click **"Connect"**

3. **Configure Service:**
   
   Fill in the following:
   
   | Field | Value |
   |-------|-------|
   | **Name** | `masf-backend` (or any name) |
   | **Region** | Choose closest to Pakistan (e.g., Singapore) |
   | **Branch** | `main` |
   | **Root Directory** | Leave blank |
   | **Runtime** | `Node` |
   | **Build Command** | `npm install` |
   | **Start Command** | `npm start` |
   | **Plan** | `Free` |

4. **Add Environment Variables:**
   
   Scroll down to **"Environment Variables"** section:
   
   - Click **"Add Environment Variable"**
   - Add these **3 variables**:
   
   ```
   PORT = 5000
   EMAIL_USER = masfpakistan@gmail.com
   EMAIL_PASS = your-gmail-app-password
   ```
   
   ⚠️ **IMPORTANT**: Use your actual Gmail App Password (16 characters)

5. **Create Web Service:**
   - Click **"Create Web Service"** button
   - Wait 3-5 minutes for deployment ⏳

---

### **Step 4: Get Your Backend URL**

Once deployed, you'll see:
- ✅ **Live Status**: "Deploy succeeded"
- 🌐 **Your backend URL**: `https://masf-backend-xxxx.onrender.com`

Copy this URL! You'll need it for the frontend.

---

### **Step 5: Test Your Backend**

1. **Test the server:**
   ```
   https://your-backend-url.onrender.com/
   ```
   Should show: "MASF Backend is running"

2. **Test Contact API:**
   - Send POST request to: `https://your-backend-url.onrender.com/api/contact`

3. **Test Donation API:**
   - Send POST request to: `https://your-backend-url.onrender.com/api/donation`

---

### **Step 6: Update Frontend**

Update your frontend API URLs:

**File: `frontend/src/app/contact/page.tsx`**
```typescript
// Change from:
const response = await fetch('http://localhost:5000/api/contact', {

// To:
const response = await fetch('https://your-backend-url.onrender.com/api/contact', {
```

**File: `frontend/src/app/donate/page.tsx`**
```typescript
// Change from:
const response = await fetch('http://localhost:5000/api/donation', {

// To:
const response = await fetch('https://your-backend-url.onrender.com/api/donation', {
```

---

## ⚙️ Important Notes

### **1. Free Tier Limitations:**
- Backend sleeps after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- 750 hours/month free (enough for 24/7 if only one service)

### **2. Keeping Backend Awake (Optional):**
Use a service like **UptimeRobot** or **Cron-job.org**:
- Ping your backend URL every 10 minutes
- Prevents sleep
- 100% free

### **3. CORS Configuration:**
Your backend already allows localhost:3000. After deploying frontend, add its URL to CORS:

**File: `server/server.js`**
```javascript
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://your-frontend-vercel-url.vercel.app'  // Add this
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));
```

---

## 🐛 Troubleshooting

### **Issue: "Application failed to respond"**
- Check environment variables are set correctly
- Check logs: Click on your service → "Logs" tab

### **Issue: "Email not sending"**
- Verify EMAIL_USER and EMAIL_PASS in Render dashboard
- Check Gmail App Password is correct
- Check logs for specific error

### **Issue: "File upload fails"**
- Render's free tier has limited storage
- Files are deleted on restart (expected behavior)
- For persistent storage, upgrade to paid plan or use cloud storage

---

## 📊 Monitoring

In Render Dashboard, you can:
- View logs in real-time
- Monitor CPU/Memory usage
- See deployment history
- Manually deploy latest commit

---

## 🔄 Updating Your Backend

When you make changes:

1. **Commit and push:**
   ```bash
   git add .
   git commit -m "Updated email templates"
   git push
   ```

2. **Render auto-deploys!** (if enabled)
   - Or manually click "Deploy latest commit" in dashboard

---

## ✅ Deployment Checklist

Before deployment:
- [ ] Gmail App Password is ready
- [ ] Code pushed to GitHub
- [ ] Render account created
- [ ] All environment variables noted down

After deployment:
- [ ] Backend URL works (shows "MASF Backend is running")
- [ ] Test contact form email
- [ ] Test donation submission
- [ ] Update frontend URLs
- [ ] Test from frontend

---

Need help? Check Render docs: https://docs.render.com
