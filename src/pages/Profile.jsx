// src/pages/Profile.jsx
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebase";
import Avatar from "../components/Avatar";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user] = useAuthState(getAuth(app));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(getAuth(app));
      navigate("/login");
    } catch (e) {
      console.error("logout error", e);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-4">
          <Avatar
            src={user?.photoURL || null}
            name={user?.displayName || user?.email || "Usuário"}
            size={72}
            className="ring-1 ring-white/15"
          />
          <div>
            <h2 className="text-lg font-semibold">{user?.displayName || "Usuário"}</h2>
            <p className="text-white/70">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15 active:scale-[0.98]"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
