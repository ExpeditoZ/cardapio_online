import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavRight from "./NavRight";
import Img from "./ui/Img";
import { useCart } from "../context/CartContext.jsx";

const LOGO_PNG = "assets/brand/logo.png";
const LOGO_FALLBACK = "assets/fallbacks/logo.svg";

export default function Header() {
  const { totalCount = 0 } = useCart() || {};
  return (
    <header className="sticky top-0 z-40 bg-zinc-900/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-2 flex items-center justify-between rounded-2xl">
        <Link to="/" className="flex items-center gap-3 rounded-2xl border border-white/15 px-2 py-1">
          <div className="h-8 w-8 rounded-xl overflow-hidden ring-1 ring-white/15">
            <Img src={LOGO_PNG} fallback={LOGO_FALLBACK} alt="Logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-semibold">Cardápio Online</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-4">
          <NavLink to="/restaurants" className="px-3 py-1 rounded-full hover:bg-white/5">Restaurantes</NavLink>
          <NavLink to="/cart" className="px-3 py-1 rounded-full hover:bg-white/5">
            Carrinho{" "}
            <span className="ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white/10 text-xs px-1">
              {totalCount}
            </span>
          </NavLink>
          <NavRight />
        </nav>
      </div>
    </header>
  );
}
