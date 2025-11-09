
import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { restaurants } from "../data/restaurants";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

export default function Category() {
  const { id, cid } = useParams();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [addingId, setAddingId] = useState(null);

  const rest = useMemo(() => restaurants.find((r) => r.id === id), [id]);
  const category = rest?.categories.find((c) => c.id === cid);

  if (!rest || !category) return <p className="py-8 text-white/70">Categoria não encontrada.</p>;

  async function handleAdd(p) {
    setAddingId(p.id);
    addItem({ id: p.id, name: p.name, price: p.price });
    showToast(`Adicionado: ${p.name}`);
    setTimeout(() => setAddingId(null), 700);
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <Link to={`/restaurant/${rest.id}`} className="px-3 py-2 rounded-lg border border-white/10 hover:border-neon.pink">← Voltar</Link>
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">{rest.name}</h1>
          <p className="text-xs sm:text-sm text-white/70">{category.title}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {category.items.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.03 }}
            className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src={p.img} className="h-28 w-full object-cover" alt={p.name} />
            <div className="p-3">
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-sm text-white/70 mb-3">R$ {p.price.toFixed(2)}</p>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => handleAdd(p)}
                className={`w-full py-2 rounded-lg bg-gradient-to-br from-neon.purple to-neon.pink transition ${addingId===p.id ? "opacity-80" : ""}`}
              >
                {addingId === p.id ? "Adicionado!" : "Adicionar"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
