import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialCartState = {
  items: [],
  total: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex > -1) {
        const updatedItems = state.items.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
        return { ...state, items: updatedItems };
      } else {
        // Item not in cart, add new item
        return { ...state, items: [...state.items, action.payload] };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return initialCartState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
