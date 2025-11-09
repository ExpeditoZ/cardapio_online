
import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ToastCtx = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 1600);
  }, []);

  return (
    <ToastCtx.Provider value={{ showToast }}>
      {children}
      <div className="fixed inset-x-0 bottom-4 z-[60] pointer-events-none">
        <div className="mx-auto w-full max-w-sm px-3">
          <AnimatePresence>
            {toasts.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                className="pointer-events-auto mb-2 rounded-xl bg-zinc-900 border border-white/10 px-4 py-3 shadow-neon"
              >
                <div className="text-sm">✅ {t.message}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  return useContext(ToastCtx);
}
