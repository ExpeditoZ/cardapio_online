// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartCtx = createContext();
const STORAGE_KEY = "cart:v1";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  function addItem(product, qty = 1) {
    if (!product?.id) return;
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: (next[idx].qty || 0) + qty };
        return next;
      }
      return [...prev, { ...product, qty }];
    });
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQty(id, qty) {
    const safe = Math.max(1, Number(qty) || 1);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: safe } : i)));
  }

  // ✅ limpa tudo
  function clear() {
    setItems([]);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }

  const total = useMemo(
    () => items.reduce((s, i) => s + (i.price || 0) * (i.qty || 0), 0),
    [items]
  );
  const totalCount = useMemo(
    () => items.reduce((s, i) => s + (i.qty || 0), 0),
    [items]
  );

  return (
    <CartCtx.Provider
      value={{ items, addItem, removeItem, updateQty, clear, total, totalCount }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  return useContext(CartCtx);
}
