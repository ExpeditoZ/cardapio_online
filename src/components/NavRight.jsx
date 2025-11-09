// src/components/NavRight.jsx
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebase";
import Avatar from "./Avatar";

export default function NavRight() {
  const [user] = useAuthState(getAuth(app));

  return (
    <div className="flex items-center gap-3">
      <Link to="/restaurants" className="px-3 py-1 rounded-full hover:bg-white/5">
        Restaurantes
      </Link>
      <Link to="/cart" className="px-3 py-1 rounded-full hover:bg-white/5">
        Carrinho
      </Link>

      <Link to="/profile" className="flex items-center gap-2 rounded-full px-3 py-1 hover:bg-white/5">
        <Avatar
          src={user?.photoURL || null}   // <- foto do Google aqui
          name={user?.displayName || user?.email || "Usuário"}
          size={28}
          className="ring-1 ring-white/15"
        />
        <span className="hidden sm:inline">Perfil</span>
      </Link>
    </div>
  );
}
  