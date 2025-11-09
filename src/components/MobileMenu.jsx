
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Item({ to, children, onClick, active }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 rounded-xl border transition bg-zinc-900/90 ${
        active ? "border-neon.pink text-neon.pink" : "border-white/10 hover:border-neon.pink"
      }`}
    >
      <span className="truncate">{children}</span>
      <span aria-hidden>›</span>
    </Link>
  );
}

export default function MobileMenu({ count }) {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  // Lock body scroll when menu is open (prevents content showing through on scroll)
  useEffect(() => {
    const cls = "overflow-hidden";
    if (open) {
      document.documentElement.classList.add(cls);
      document.body.classList.add(cls);
    } else {
      document.documentElement.classList.remove(cls);
      document.body.classList.remove(cls);
    }
    return () => {
      document.documentElement.classList.remove(cls);
      document.body.classList.remove(cls);
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-xl border border-white/10 hover:border-neon.pink transition touch-gap"
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[99] bg-black/75 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 h-full w-80 max-w-[86%] z-[100] transform transition-transform duration-300 bg-zinc-950 shadow-2xl border-l border-white/10 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="sticky top-0 p-4 border-b border-white/10 bg-zinc-950">
          <div className="flex items-center justify-between">
            <strong className="text-lg">Menu</strong>
            <button onClick={() => setOpen(false)} className="text-2xl" aria-label="Fechar menu">×</button>
          </div>
        </div>

        <nav className="p-4 space-y-3">
          <Item to="/" onClick={() => setOpen(false)} active={pathname === "/"}>Restaurantes</Item>
          <Item to="/cart" onClick={() => setOpen(false)}>
            <span className="flex items-center">
              Carrinho <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-white/10">{count}</span>
            </span>
          </Item>
          {user ? (
            <Item to="/profile" onClick={() => setOpen(false)}>Perfil</Item>
          ) : (
            <Item to="/login" onClick={() => setOpen(false)}>Entrar</Item>
          )}
        </nav>
      </aside>
    </>
  );
}
