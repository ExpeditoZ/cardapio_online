import { useCart } from "../context/CartContext";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, updateQty, removeItem, total, clear } = useCart();
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function checkout() {
    if (!user) {
      alert("Faça login para finalizar o pedido.");
      return;
    }
    if (!items.length) return;

    setLoading(true);
    try {
      // salva pedido no Firestore (opcional)
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        items: items.map(({ id, name, price, qty }) => ({ id, name, price, qty })),
        total,
        createdAt: serverTimestamp(),
        status: "created",
      });

      // limpa o carrinho e redireciona
      clear();
      alert("Pedido registrado com sucesso!");
      navigate("/restaurants");
    } catch (e) {
      alert("Erro ao salvar pedido: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  if (!items.length) {
    return <p className="py-8 text-white/70">Seu carrinho está vazio.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {items.map((i) => (
        <div
          key={i.id}
          className="flex items-center justify-between p-4 rounded-xl glass border border-white/10"
        >
          <div>
            <strong className="block">{i.name}</strong>
            <span className="text-sm text-white/70">R$ {i.price.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              value={i.qty}
              onChange={(e) => {
                const val = Math.max(1, Number(e.target.value) || 1);
                updateQty(i.id, val);
              }}
              className="w-16 bg-transparent border border-white/10 rounded-lg px-2 py-1"
            />
            <button
              onClick={() => removeItem(i.id)}
              className="text-sm underline"
              style={{ color: "var(--neon-pink, #ff52d9)" }}
            >
              Remover
            </button>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 glass">
        <span>Total</span>
        <strong>R$ {total.toFixed(2)}</strong>
      </div>

      <button
        onClick={checkout}
        disabled={loading}
        className="w-full py-3 rounded-xl bg-gradient-to-br from-neon.purple to-neon.pink shadow-neon hover:opacity-90 transition font-medium disabled:opacity-50"
      >
        {loading ? "Salvando..." : "Finalizar pedido"}
      </button>
    </div>
  );
}
