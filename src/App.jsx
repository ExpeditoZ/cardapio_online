
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Login from "./pages/Login.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Restaurant from "./pages/Restaurant.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";
import Profile from "./pages/Profile.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-pad py-4">
        <Routes>
          <Route path="/" element={<Navigate to={user ? "/restaurants" : "/login"} />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/restaurant/:id/category/:cid" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={!loading && !user ? <Navigate to="/login" /> : <Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}
