import React from "react";
import Img from "./ui/Img";

const BANNER = "assets/brand/banner.jpg";
const BANNER_FALLBACK = "assets/fallbacks/banner.svg";

export default function TopHero({ children }) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <Img
        src={BANNER}
        fallback={BANNER_FALLBACK}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative p-6">{children}</div>
    </div>
  );
}
