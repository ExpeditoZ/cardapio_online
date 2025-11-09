import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { restaurants } from "../data/restaurants";
import { useMemo, useState } from "react";

const types = ["Todos", ...Array.from(new Set(restaurants.map(r => r.type)))];

export default function Restaurants() {
  const [active, setActive] = useState("Todos");

  const list = useMemo(() => {
    return active === "Todos" ? restaurants : restaurants.filter(r => r.type === active);
  }, [active]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Restaurantes</h1>

      <div className="flex gap-2 flex-wrap mb-6">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-3 py-1.5 rounded-full text-sm border transition ${
              active === t ? "border-neon.pink text-neon.pink bg-white/10" : "border-white/10 hover:border-neon.pink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((r, i) => (
          <motion.div key={r.id} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*0.03}}>
            <Link
              to={`/restaurant/${r.id}`}
              className="group block rounded-2xl overflow-hidden border border-white/10 glass hover:border-neon.pink hover:shadow-neon transition"
            >
              <div className="relative">
                <img src={r.banner} alt={r.name} className="h-40 w-full object-cover" />
                <div className="absolute left-3 top-3 text-xs px-2 py-1 rounded-full bg-black/60 border border-white/10">{r.type}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-70 transition" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <img src={r.logo} alt="" className="h-10 w-10 rounded-full object-cover border border-white/10" />
                  <h2 className="text-lg font-medium">{r.name}</h2>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <span className="underline decoration-dotted group-hover:text-neon.pink transition">Ver cardápio</span>
                  <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}