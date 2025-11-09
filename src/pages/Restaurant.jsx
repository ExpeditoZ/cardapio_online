
import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { restaurants } from "../data/restaurants";

export default function Restaurant() {
  const { id } = useParams();
  const [q, setQ] = useState("");
  const data = useMemo(() => restaurants.find((r) => r.id === id), [id]);
  if (!data) return <p className="py-8 text-white/70">Restaurante não encontrado.</p>;

  const allItems = data.categories.flatMap((c) => c.items);
  const matches = q ? allItems.filter(i => i.name.toLowerCase().includes(q.toLowerCase())) : [];

  return (
    <div>
      <section className="rounded-2xl overflow-hidden border border-white/10 glass mb-4 sm:mb-6">
        <img src={data.banner} alt={data.name} className="h-40 sm:h-44 w-full object-cover" />
        <div className="p-4 flex items-center gap-3">
          <img src={data.logo} alt="" className="h-11 w-11 rounded-full object-cover border border-white/10" />
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">{data.name}</h1>
            <p className="text-xs sm:text-sm text-white/70">{data.address} • <span className="underline">{data.instagram}</span></p>
          </div>
        </div>
      </section>

      {/* Atalhos (responsivo) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
        {[{k:"Categorias",s:"Produtos",i:"🍚"},{k:"Combos",s:"Diversos",i:"🥡"},{k:"Promoções",s:"Ofertas",i:"🏷️"}]
          .map((b) => (
          <div key={b.k} className="rounded-2xl p-3 sm:p-4 border border-white/10 glass flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl">{b.i}</span>
            <div><div className="text-xs sm:text-sm">{b.k}</div><div className="text-[10px] sm:text-xs text-white/70">{b.s}</div></div>
          </div>
        ))}
      </div>

      {/* Busca global (opcional) */}
      <div className="mb-4 sm:mb-6">
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Digite o nome do Produto"
          className="w-full bg-transparent border-b border-white/20 focus:border-neon.pink outline-none px-1 sm:px-2 py-3" />
      </div>

      {/* Título */}
      <h2 className="text-center text-base sm:text-lg mb-4 sm:mb-6">
        <span className="text-white/70">~~~~~~ </span>
        <span className="font-semibold">CATEGORIAS</span>
        <span className="text-white/70"> ~~~~~~</span>
      </h2>

      {/* Lista de categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        {data.categories.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.04 }}
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Link to={`/restaurant/${data.id}/category/${c.id}`} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
              <img src={c.items[0]?.img} alt="" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="text-neon.pink font-medium truncate">{c.title}</div>
                <div className="text-xs sm:text-sm text-white/70 truncate">{c.subtitle}</div>
                <div className="text-[11px] sm:text-xs text-white/60 mt-1">{c.count} Itens</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Resultado rápido da BUSCA (aparece só se digitar) */}
      {q && (
        <div className="mt-6">
          <h3 className="text-sm text-white/70 mb-2">Resultados</h3>
          <ul className="text-sm text-white/80 list-disc ml-5 space-y-1">
            {matches.slice(0,8).map((m)=> <li key={m.id}>{m.name}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
