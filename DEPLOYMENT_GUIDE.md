# 🍕 Pizza Shop - Complete Deployment Guide

## 🎯 Current Status
- ✅ **Frontend**: Already deployed on Vercel
- ⏳ **Backend**: Ready to deploy
- ✅ **Database**: MongoDB Atlas (already configured)
- ✅ **Code**: Pushed to GitHub

---

## 🚀 Quick Deployment Steps

### **Option A: Render (Recommended - Free)**

1. **Go to [render.com](https://render.com)**
2. **Sign up/Login** with GitHub
3. **New Web Service** → Connect GitHub repo: `YuvrajGupta1808/PizzaShop`
4. **Configure**:
   ```
   Name: pizza-shop-backend
   Environment: Node
   Branch: main
   Root Directory: PizzaPointBackend
   Build Command: npm install
   Start Command: npm start
   ```

5. **Environment Variables**:
   ```
   MONGO_URI = mongodb+srv://Gupta:Yuvi1234@pizzapoint.kznvrdq.mongodb.net/?retryWrites=true&w=majority&appName=PizzaPoint
   ```

6. **Deploy** → Get URL like: `https://pizza-shop-backend-xyz.onrender.com`

### **Option B: Railway**

1. **Go to [railway.app](https://railway.app)**
2. **New Project** → Deploy from GitHub → Select your repo
3. **Root Directory**: `PizzaPointBackend`
4. **Environment Variables**: Same as above
5. **Deploy** → Get URL

---

## 🔄 After Backend Deployment

### **Update Frontend API URL**

1. **Get your backend URL** from Render/Railway
2. **Update** `PizzaShopFrontend/src/config.js`:
   ```javascript
   export const API_BASE_URL = 'https://your-actual-backend-url.onrender.com';
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update API URL for production"
   git push origin main
   ```

4. **Vercel will auto-deploy** the updated frontend

---

## 🌐 Final URLs

After deployment, you'll have:
- **Frontend**: https://pizza-shop-frontend-xyz.vercel.app
- **Backend API**: https://pizza-shop-backend-xyz.onrender.com
- **Database**: MongoDB Atlas (cloud)

---

## 🧪 Testing Production

Test these endpoints after deployment:
- `GET /` - API status
- `GET /health` - Health check
- `POST /users/signup` - User registration
- `POST /users/login` - User login
- `GET /allpizzas` - Pizza list

---

## 📱 Features Available Online

✅ **User Authentication** (signup/login)
✅ **Pizza Customization** 
✅ **Shopping Cart**
✅ **Order Management**
✅ **Reservations**
✅ **Feedback System**
✅ **Responsive Design**

---

## 🔧 Troubleshooting

**Backend not starting?**
- Check environment variables
- Verify MongoDB Atlas IP whitelist (set to 0.0.0.0/0 for all IPs)
- Check logs in Render/Railway dashboard

**Frontend not connecting to backend?**
- Verify API_BASE_URL in config.js
- Check CORS settings in backend
- Test API endpoints directly

---

## 💡 Pro Tips

1. **MongoDB Atlas**: Whitelist all IPs (0.0.0.0/0) for cloud deployment
2. **Environment Variables**: Never commit sensitive data to GitHub
3. **Monitoring**: Use Render/Railway dashboards to monitor performance
4. **SSL**: Both services provide HTTPS automatically
5. **Custom Domain**: Available on paid plans

Your Pizza Shop is now ready to go live! 🎉
