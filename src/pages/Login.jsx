
import { motion } from "framer-motion";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  async function loginGoogle() {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (e) { alert("Erro no login: " + e.message); }
  }
  async function logout() { await signOut(auth); }

  return (
    <div className="grid place-items-center py-10 sm:py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-6 sm:p-8 rounded-2xl glass border border-white/10 neon-border">
        <h1 className="text-2xl font-semibold mb-2">Entrar</h1>
        <p className="text-sm text-white/70 mb-6">Faça login para salvar seus pedidos e acessar seu perfil.</p>
        <button onClick={loginGoogle} className="w-full py-3 rounded-xl bg-gradient-to-br from-neon.purple to-neon.pink shadow-neon hover:opacity-90 transition font-medium">
          Entrar com Google
        </button>
        {user && !loading && (
          <div className="mt-6 text-sm text-white/80">Logado como <strong>{user.displayName}</strong> —{" "}
            <button onClick={logout} className="underline hover:text-neon.pink">Sair</button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
