# Deploy Backend to Render

## Steps:

1. **Go to [Render.com](https://render.com)** and sign up/login
2. **Create New Web Service**
3. **Connect your GitHub repo**: https://github.com/YuvrajGupta1808/PizzaShop
4. **Configure settings**:
   - **Name**: pizza-shop-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node working-server.js`
   - **Root Directory**: `PizzaPointBackend`

5. **Environment Variables**:
   ```
   MONGO_URI=mongodb+srv://Gupta:Yuvi1234@pizzapoint.kznvrdq.mongodb.net/?retryWrites=true&w=majority&appName=PizzaPoint
   PORT=10000
   ```

6. **Deploy** - Render will give you a URL like:
   `https://pizza-shop-backend-xyz.onrender.com`
