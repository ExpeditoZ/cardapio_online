
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const missing = Object.entries(cfg).filter(([_, v]) => !v).map(([k]) => k);
if (missing.length) {
  const msg = `[Cardápio Online] Variáveis ausentes no .env.local: ${missing.join(", ")}\nPreencha o arquivo .env.local com as chaves do Firebase.`;
  console.error(msg);
  const div = document.createElement("div");
  div.style.cssText = "padding:16px;margin:16px;border:1px solid #f00;color:#fff;background:#1b1b1b";
  div.innerText = msg;
  document.body.appendChild(div);
  throw new Error(msg);
}

const app = initializeApp(cfg);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
