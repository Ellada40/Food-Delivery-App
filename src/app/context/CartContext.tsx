import { createContext, useContext, useState, ReactNode } from "react";
import { MenuItem } from "../data/mockData";

interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, restaurantId: string, restaurantName: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (menuItem: MenuItem, restaurantId: string, restaurantName: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.menuItem.id === menuItem.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { menuItem, quantity: 1, restaurantId, restaurantName }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.menuItem.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.menuItem.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
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
