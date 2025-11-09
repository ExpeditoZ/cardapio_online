// src/components/Avatar.jsx
export default function Avatar({ src, name, size = 28, className = "" }) {
  const initials = (name || "?").trim().charAt(0).toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={name || "Avatar"}
        width={size}
        height={size}
        className={`rounded-full object-cover ${className}`}
        onError={(e) => {
          // se a foto do Google quebrar, limpa para cair no modo "inicial"
          e.currentTarget.onerror = null;
          e.currentTarget.src = "";
        }}
      />
    );
  }

  // fallback: bolinha com inicial
  return (
    <div
      className={`grid place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white ${className}`}
      style={{ width: size, height: size, fontSize: Math.max(12, size * 0.45) }}
      aria-label="Avatar"
      title={name || "Avatar"}
    >
      {initials}
    </div>
  );
}
