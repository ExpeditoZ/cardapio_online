import React from "react";

export default function Img({ src, alt = "", className = "", fallback }) {
  const [err, setErr] = React.useState(false);
  const finalSrc = err && fallback ? fallback : src;

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      onError={() => setErr(true)}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
}
