// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.PROD ? 'https://your-backend-url.herokuapp.com' : 'http://localhost:5000');

// API Endpoints
export const API_ENDPOINTS = {
  USERS: {
    SIGNUP: `${API_BASE_URL}/users/signup`,
    LOGIN: `${API_BASE_URL}/users/login`,
  },
  PIZZAS: {
    CREATE: `${API_BASE_URL}/pizzas/create`,
    ALL: `${API_BASE_URL}/allpizzas`,
    QUANTITY: (pizzaId) => `${API_BASE_URL}/api/pizzas/${pizzaId}/quantity`,
  },
  CART: {
    ADD: `${API_BASE_URL}/cart/add`,
    REMOVE: `${API_BASE_URL}/removepizza`,
  },
  ORDERS: {
    ADD_PIZZA: `${API_BASE_URL}/addpizza`,
  }
};
