import { useState, useEffect, useRef } from "react";
import acostaos from "./assets/acostaos.jpg";
import agarraos from "./assets/agarraos.jpg";
import capada from "./assets/capada.jpg";
import capada2 from "./assets/capada2.jpg";
import carta from "./assets/carta.jpg";
import corazon from "./assets/corazon.jpg";
import deditos from "./assets/deditos.webp";

// ── CONFIG – EDITA AQUÍ ──────────────────────────────────────────────────────
const CONFIG = {
  password: "teamo",          // 🔑 Cambia esta contraseña
  partnerName: "Nincy",        // 💙 Nombre de tu pareja
  yourName: "Andrés",         // Tu nombre
  startDate: "2026-04-21",       // Fecha en que empezaron (YYYY-MM-DD)
  message: `Querida ${"Nincy"},\n\n Este mes ha sido perfecto en todos los aspectos. Todos los dias han sido increibles hablando y pasando tiempo juntos. Te quiero decir que te dedico esta pagina con todo el amor que siento por ti y espero sea especial para ti.\n Haré todo lo que esté en mi poder para hacerte feliz y que nuestro amor crezca cada día.\n\nCon mucho amor,\n${"Andrés"}`,
  photos: [
    // Agrega tus fotos aquí. Reemplaza `src` con la URL o ruta de tu imagen.
    // `caption`  → título corto que aparece en la tarjeta y en el modal
    // `message`  → texto personalizado que se muestra dentro del modal 💙
    // `date`     → fecha opcional (ej: "17 de abril, 2025")
    {
      src: carta,
      caption: "La Primera Carta ✉️",
      message: "La primera carta que me diste fue muy especial para mí. La guardo como un tesoro, porque fue el primer pedacito de tu corazón que me entregaste.",
      date: "17 de abril, 2026",
    },
    {
      src: deditos,
      caption: "Nuestra Primera Foto Juntos 📸",
      message: "Recuerdo que ese día me sentí tan feliz, tu sonrisa lo iluminó todo. Desde ese momento supe que quería compartir muchos momentos más contigo.",
      date: "5 de mayo, 2026",
    },
    {
      src: corazon,
      caption: "Nuestro Primer Corazón 💖",
      message: "Este corazón que hicimos es el simbolo de lo que tardamos en construir algo tan bonito. Cada vez que lo veo me recuerda lo afortunado que soy de tenerte a mi lado.",
      date: "5 de mayo, 2026",
    },
    {
      src: acostaos,
      caption: "Pasando Tiempo Juntos 🌊",
      message: "Me encanta cuando estamos así, acurrucados y disfrutando de la tranquilidad. Esos momentos de calma son los que más me hacen sentir conectado contigo.",
      date: "8 de mayo, 2026",
    },
    {
      src: agarraos,
      caption: "Ese momento especial 🤍",
      message: "Hay momentos que no necesitan palabras. Este es uno de ellos.",
      date: "8 de mayo, 2026",
    },
    {
      src: capada,
      caption: "Mi Dia Favorito 🌅",
      message: "Ese día fue perfecto, pasamos tiempo juntos y disfrutamos del día de la mejor manera posible. Siempre lo recordaré como uno de los días más felices de mi vida.",
      date: "14 de mayo, 2026",
    },
    {
      src: capada2,
      caption: "Te Amo ☆",
      message: "Eres la mejor cosa que me ha pasado, y cada día a tu lado es un regalo que valoro más que nada. Te amo con todo mi corazón, y estoy emocionado por todo lo que nos espera en el futuro juntos.",
      date: "14 de mayo, 2026",
    },
  ],
};
// ────────────────────────────────────────────────────────────────────────────

// Animated Jellyfish SVG Component
function Jellyfish({ style, size = 80, opacity = 0.5, hue = 200 }) {
  const id = useRef(`jf-${Math.random().toString(36).slice(2)}`).current;
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 100 140"
      style={{ ...style, position: "absolute", pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`${id}-g`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={`hsl(${hue},80%,85%)`} stopOpacity="0.9" />
          <stop offset="100%" stopColor={`hsl(${hue},60%,55%)`} stopOpacity="0.3" />
        </radialGradient>
      </defs>
      {/* Bell */}
      <ellipse cx="50" cy="38" rx="38" ry="35" fill={`url(#${id}-g)`} opacity={opacity} />
      {/* Inner glow */}
      <ellipse cx="50" cy="32" rx="22" ry="18" fill={`hsl(${hue},90%,92%)`} opacity={opacity * 0.4} />
      {/* Tentacles */}
      {[20, 30, 40, 50, 60, 70, 80].map((x, i) => (
        <path
          key={i}
          d={`M${x},70 Q${x + (i % 2 === 0 ? 8 : -8)},${95 + i * 5} ${x},${120 + i * 3}`}
          stroke={`hsl(${hue + 15},70%,75%)`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity={opacity * 0.7}
        />
      ))}
    </svg>
  );
}

// Tulip SVG Component
function Tulip({ style, size = 60, color = "#4a90d9" }) {
  return (
    <svg
      width={size}
      height={size * 1.8}
      viewBox="0 0 60 108"
      style={{ ...style, position: "absolute", pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path d="M30,108 Q28,80 30,60" stroke="#2d7a4a" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Leaf */}
      <path d="M30,85 Q15,72 18,60 Q28,70 30,85" fill="#3a8f5a" opacity="0.8" />
      {/* Petals */}
      <ellipse cx="30" cy="35" rx="10" ry="22" fill={color} opacity="0.9" />
      <ellipse cx="20" cy="40" rx="9" ry="20" fill={color} opacity="0.8" transform="rotate(-18 20 40)" />
      <ellipse cx="40" cy="40" rx="9" ry="20" fill={color} opacity="0.8" transform="rotate(18 40 40)" />
      <ellipse cx="14" cy="48" rx="8" ry="18" fill={color} opacity="0.6" transform="rotate(-35 14 48)" />
      <ellipse cx="46" cy="48" rx="8" ry="18" fill={color} opacity="0.6" transform="rotate(35 46 48)" />
      {/* Center shine */}
      <ellipse cx="30" cy="28" rx="4" ry="8" fill="white" opacity="0.25" />
    </svg>
  );
}

// Floating Bubble
function Bubble({ style, size }) {
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.5), rgba(100,180,255,0.1))",
        border: "1px solid rgba(150,210,255,0.3)",
        pointerEvents: "none",
      }}
    />
  );
}

// Heartbeat SVG
function BeatingHeart() {
  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <style>{`
        @keyframes heartbeat {
          0%   { transform: scale(1); }
          14%  { transform: scale(1.12); }
          28%  { transform: scale(1); }
          42%  { transform: scale(1.07); }
          70%  { transform: scale(1); }
          100% { transform: scale(1); }
        }
        @keyframes heartglow {
          0%, 100% { filter: drop-shadow(0 0 18px rgba(150,210,255,0.5)); }
          42%       { filter: drop-shadow(0 0 40px rgba(180,230,255,0.9)); }
        }
        .beating-heart {
          animation: heartbeat 1.6s ease-in-out infinite, heartglow 1.6s ease-in-out infinite;
        }
      `}</style>
      <svg
        className="beating-heart"
        width="160"
        height="150"
        viewBox="0 0 160 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hg" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,1)" />
            <stop offset="60%" stopColor="rgba(200,235,255,0.95)" />
            <stop offset="100%" stopColor="rgba(100,180,255,0.8)" />
          </radialGradient>
        </defs>
        <path
          d="M80 130 C80 130 10 80 10 45 C10 20 30 8 50 12 C62 14 72 22 80 30 C88 22 98 14 110 12 C130 8 150 20 150 45 C150 80 80 130 80 130Z"
          fill="url(#hg)"
          stroke="rgba(180,220,255,0.4)"
          strokeWidth="2"
        />
        {/* Shine */}
        <ellipse cx="62" cy="38" rx="14" ry="8" fill="rgba(255,255,255,0.5)" transform="rotate(-30 62 38)" />
      </svg>
    </div>
  );
}

// Days counter
function useDayCount(startDate) {
  const [days, setDays] = useState(0);
  useEffect(() => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    setDays(diff);
  }, [startDate]);
  return days;
}

// ── PHOTO MODAL ──────────────────────────────────────────────────────────────
function PhotoModal({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  // Close on Escape, navigate with arrows
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext) onNext();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev, hasPrev, hasNext]);

  // Prevent scroll on body while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,5,20,0.88)",
        backdropFilter: "blur(16px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "modal-fade-in 0.3s ease",
      }}
    >
      <style>{`
        @keyframes modal-fade-in  { from{opacity:0} to{opacity:1} }
        @keyframes modal-slide-up { from{opacity:0;transform:translateY(28px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes corner-glow    { 0%,100%{opacity:0.5} 50%{opacity:1} }
      `}</style>

      {/* Modal card */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          background: "linear-gradient(160deg, rgba(6,22,70,0.97) 0%, rgba(4,14,50,0.97) 100%)",
          border: "1px solid rgba(100,180,255,0.25)",
          borderRadius: "24px",
          maxWidth: "680px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 30px 80px rgba(0,10,50,0.8), 0 0 0 1px rgba(80,160,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
          animation: "modal-slide-up 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Decorative corner lights */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(100,180,255,0.5), rgba(150,210,255,0.8), rgba(100,180,255,0.5), transparent)",
          borderRadius: "24px 24px 0 0",
          animation: "corner-glow 3s ease-in-out infinite",
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            width: "36px", height: "36px", borderRadius: "50%",
            background: "rgba(20,60,140,0.6)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(100,180,255,0.25)",
            color: "rgba(180,220,255,0.8)", fontSize: "1.1rem",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 10, transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(40,100,200,0.7)"; e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(20,60,140,0.6)"; e.currentTarget.style.transform = "scale(1)"; }}
        >✕</button>

        {/* Image */}
        <div style={{ position: "relative", borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
          <img
            src={photo.src}
            alt={photo.caption}
            style={{ width: "100%", maxHeight: "420px", objectFit: "cover", display: "block" }}
          />
          {/* Image bottom gradient */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
            background: "linear-gradient(transparent, rgba(4,14,50,0.95))",
          }} />
        </div>

        {/* Text content */}
        <div style={{ padding: "28px 32px 32px" }}>
          {/* Caption / title */}
          <h3 style={{
            fontFamily: "'Playfair Display', serif", fontStyle: "italic",
            fontSize: "1.4rem", fontWeight: 400,
            color: "rgba(210,235,255,0.95)", margin: "0 0 16px",
            textShadow: "0 0 20px rgba(80,160,255,0.4)",
          }}>
            {photo.caption}
          </h3>

          {/* Decorative divider */}
          <div style={{
            display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px"
          }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(100,180,255,0.3), transparent)" }} />
            <span style={{ color: "rgba(100,180,255,0.5)", fontSize: "0.7rem" }}>✦</span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(100,180,255,0.3))" }} />
          </div>

          {/* Personalized message */}
          {photo.message && (
            <p style={{
              fontFamily: "'Lato', sans-serif", fontWeight: 300,
              fontSize: "0.97rem", lineHeight: 1.8,
              color: "rgba(180,220,255,0.82)", margin: "0 0 20px",
              fontStyle: "italic",
            }}>
              {photo.message}
            </p>
          )}

          {/* Date tag */}
          {photo.date && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                background: "rgba(20,60,140,0.5)", border: "1px solid rgba(100,180,255,0.2)",
                borderRadius: "20px", padding: "4px 14px",
                color: "rgba(130,190,255,0.7)", fontSize: "0.78rem",
                fontFamily: "'Lato', sans-serif", letterSpacing: "0.05em",
              }}>
                📅 {photo.date}
              </span>
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        {(hasPrev || hasNext) && (
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "0 24px 24px", gap: "12px"
          }}>
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              style={{
                flex: 1, padding: "10px", borderRadius: "12px",
                background: hasPrev ? "rgba(20,60,140,0.5)" : "rgba(10,30,70,0.3)",
                border: "1px solid rgba(100,180,255,0.15)",
                color: hasPrev ? "rgba(150,210,255,0.8)" : "rgba(80,120,180,0.3)",
                cursor: hasPrev ? "pointer" : "default",
                fontFamily: "'Lato', sans-serif", fontSize: "0.82rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => hasPrev && (e.currentTarget.style.background = "rgba(30,80,180,0.6)")}
              onMouseLeave={e => hasPrev && (e.currentTarget.style.background = "rgba(20,60,140,0.5)")}
            >
              ← Anterior
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              style={{
                flex: 1, padding: "10px", borderRadius: "12px",
                background: hasNext ? "rgba(20,60,140,0.5)" : "rgba(10,30,70,0.3)",
                border: "1px solid rgba(100,180,255,0.15)",
                color: hasNext ? "rgba(150,210,255,0.8)" : "rgba(80,120,180,0.3)",
                cursor: hasNext ? "pointer" : "default",
                fontFamily: "'Lato', sans-serif", fontSize: "0.82rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => hasNext && (e.currentTarget.style.background = "rgba(30,80,180,0.6)")}
              onMouseLeave={e => hasNext && (e.currentTarget.style.background = "rgba(20,60,140,0.5)")}
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Photo Card
function PhotoCard({ photo, index, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        background: "rgba(10,30,80,0.5)",
        border: "1px solid rgba(100,180,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,40,0.4)",
        backdropFilter: "blur(6px)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(60,140,255,0.35)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,40,0.4)";
      }}
    >
      <div style={{ position: "relative", paddingTop: "75%", background: "rgba(5,20,60,0.8)" }}>
        {!loaded && (
          <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
            color: "rgba(100,180,255,0.5)", fontSize: "2rem"
          }}>🌊</div>
        )}
        <img
          src={photo.src}
          alt={photo.caption}
          onLoad={() => setLoaded(true)}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.4s"
          }}
        />
        {/* Hover overlay with zoom icon */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, transparent 50%, rgba(4,14,50,0.7) 100%)",
          display: "flex", alignItems: "flex-end", justifyContent: "flex-end",
          padding: "10px", opacity: 0, transition: "opacity 0.3s",
        }}
          className="photo-overlay"
        >
          <div style={{
            width: "32px", height: "32px", borderRadius: "50%",
            background: "rgba(40,100,220,0.7)", backdropFilter: "blur(4px)",
            border: "1px solid rgba(100,180,255,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.85rem", color: "rgba(200,230,255,0.9)"
          }}>🔍</div>
        </div>
      </div>
      <div style={{ padding: "12px 16px", color: "rgba(180,220,255,0.9)", fontSize: "0.85rem", fontStyle: "italic" }}>
        {photo.caption}
      </div>
    </div>
  );
}

// ── LOGIN SCREEN ─────────────────────────────────────────────────────────────
function LoginScreen({ onSuccess }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const attempt = () => {
    if (input === CONFIG.password) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #020a1f 0%, #041230 40%, #061840 70%, #030d28 100%)",
      fontFamily: "'Georgia', serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap');
        @keyframes float-login { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-8px)} 75%{transform:translateX(8px)} }
        @keyframes pulse-ring { 0%{transform:scale(0.9);opacity:0.8} 100%{transform:scale(1.4);opacity:0} }
      `}</style>

      {/* Decorative jellyfish */}
      <Jellyfish style={{ top: "5%", left: "5%", animation: "float-login 5s ease-in-out infinite" }} size={70} opacity={0.35} />
      <Jellyfish style={{ top: "10%", right: "8%", animation: "float-login 7s ease-in-out infinite 1s" }} size={50} opacity={0.25} hue={210} />
      <Tulip style={{ bottom: "5%", left: "3%", opacity: 0.4 }} size={55} color="#3a7fcc" />
      <Tulip style={{ bottom: "5%", right: "4%", opacity: 0.35 }} size={45} color="#5a9fe0" />

      <div
        style={{
          background: "rgba(5,20,60,0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(100,180,255,0.2)",
          borderRadius: "24px",
          padding: "48px 40px",
          maxWidth: "360px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,10,40,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
          animation: shake ? "shake 0.4s ease" : "none",
        }}
      >
        {/* Pulsing heart icon */}
        <div style={{ position: "relative", display: "inline-block", marginBottom: "24px" }}>
          <div style={{
            position: "absolute", inset: "-10px", borderRadius: "50%",
            border: "2px solid rgba(100,180,255,0.3)",
            animation: "pulse-ring 2s ease-out infinite"
          }} />
          <div style={{ fontSize: "3rem" }}>🤍</div>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.6rem", fontWeight: 400,
          color: "rgba(220,240,255,0.95)", margin: "0 0 8px",
          letterSpacing: "0.02em"
        }}>
          Algo especial
        </h1>
        <p style={{
          color: "rgba(130,190,255,0.7)", fontSize: "0.9rem",
          margin: "0 0 32px", fontFamily: "'Lato', sans-serif", fontWeight: 300
        }}>
          Esta página es solo para ti 🌊
        </p>

        <input
          type="password"
          value={input}
          onChange={e => { setInput(e.target.value); setError(false); }}
          onKeyDown={e => e.key === "Enter" && attempt()}
          placeholder="Contraseña secreta..."
          style={{
            width: "100%", padding: "14px 18px", borderRadius: "12px",
            background: "rgba(10,40,100,0.5)",
            border: error ? "1px solid rgba(255,100,100,0.6)" : "1px solid rgba(100,180,255,0.3)",
            color: "rgba(220,240,255,0.95)", fontSize: "1rem",
            outline: "none", boxSizing: "border-box",
            fontFamily: "'Lato', sans-serif",
            transition: "border 0.2s",
            marginBottom: "12px",
          }}
        />

        {error && (
          <p style={{ color: "rgba(255,140,140,0.85)", fontSize: "0.82rem", marginBottom: "12px", fontFamily: "'Lato', sans-serif" }}>
            Contraseña incorrecta 💔
          </p>
        )}

        <button
          onClick={attempt}
          style={{
            width: "100%", padding: "14px", borderRadius: "12px",
            background: "linear-gradient(135deg, #2060c0, #4090e0)",
            border: "none", color: "white", fontSize: "1rem",
            fontFamily: "'Lato', sans-serif", fontWeight: 400,
            cursor: "pointer", letterSpacing: "0.05em",
            boxShadow: "0 4px 20px rgba(50,130,255,0.35)",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Entrar ✨
        </button>
      </div>

      <p style={{ color: "rgba(80,140,200,0.4)", fontSize: "1.20rem", marginTop: "24px", fontFamily: "'Lato', sans-serif" }}>
        Hecho con mucho amor para ti
      </p>
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────
function MainPage() {
  const days = useDayCount(CONFIG.startDate);
  const [modalIndex, setModalIndex] = useState(null);

  // Generate stable random positions for background elements
  const jellyfish = useRef([
    { top: "8%",  left: "6%",  size: 90,  opacity: 0.22, hue: 200, dur: 6,  delay: 0 },
    { top: "15%", right: "5%", size: 70,  opacity: 0.18, hue: 215, dur: 8,  delay: 1 },
    { top: "45%", left: "2%",  size: 110, opacity: 0.15, hue: 195, dur: 10, delay: 2 },
    { top: "55%", right: "3%", size: 80,  opacity: 0.2,  hue: 220, dur: 7,  delay: 0.5 },
    { top: "75%", left: "8%",  size: 65,  opacity: 0.18, hue: 205, dur: 9,  delay: 1.5 },
    { top: "70%", right: "7%", size: 95,  opacity: 0.14, hue: 210, dur: 11, delay: 3 },
    { top: "30%", left: "50%", size: 60,  opacity: 0.12, hue: 200, dur: 7,  delay: 2 },
  ]).current;

  const tulips = useRef([
    { bottom: "0", left:  "1%",  size: 80,  color: "#2a6fc0", opacity: 0.55 },
    { bottom: "0", left:  "7%",  size: 65,  color: "#3a85d8", opacity: 0.45 },
    { bottom: "0", left:  "13%", size: 90,  color: "#1a5aaa", opacity: 0.5  },
    { bottom: "0", right: "1%",  size: 75,  color: "#3080d0", opacity: 0.55 },
    { bottom: "0", right: "7%",  size: 85,  color: "#2570be", opacity: 0.45 },
    { bottom: "0", right: "13%", size: 60,  color: "#4090e0", opacity: 0.5  },
    { bottom: "0", left:  "50%", size: 70,  color: "#3578cc", opacity: 0.3  },
  ]).current;

  const bubbles = useRef(
    Array.from({ length: 14 }, (_, i) => ({
      left: `${5 + i * 7}%`, top: `${10 + (i % 5) * 18}%`,
      size: `${10 + (i % 4) * 8}px`,
      animDur: `${5 + i * 0.7}s`, animDelay: `${i * 0.4}s`
    }))
  ).current;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #010818 0%, #030f2a 25%, #041540 55%, #030c25 100%)",
      fontFamily: "'Georgia', serif",
      overflowX: "hidden",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Lato:wght@300;400&display=swap');

        @keyframes float-up   { 0%,100%{transform:translateY(0) rotate(0deg)}  50%{transform:translateY(-20px) rotate(2deg)} }
        @keyframes float-side { 0%,100%{transform:translateX(0) rotate(0deg)}  50%{transform:translateX(12px) rotate(-2deg)} }
        @keyframes drift-bubble { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-18px) scale(1.05)} }
        @keyframes fade-in-up { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer    { 0%,100%{opacity:0.6} 50%{opacity:1} }
        @keyframes sway       { 0%,100%{transform:rotate(-2deg)} 50%{transform:rotate(2deg)} }

        .section-fade { animation: fade-in-up 1s ease forwards; }
        .photo-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:20px; }
        .photo-card:hover .photo-overlay { opacity:1 !important; }
        @media(max-width:600px){ .photo-grid{grid-template-columns:1fr 1fr;} }
        @media(max-width:400px){ .photo-grid{grid-template-columns:1fr;} }

        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:rgba(5,15,50,0.5); }
        ::-webkit-scrollbar-thumb { background:rgba(80,150,255,0.3); border-radius:3px; }
      `}</style>

      {/* ── Background jellyfish ── */}
      {jellyfish.map((j, i) => (
        <Jellyfish
          key={i}
          style={{
            top: j.top, left: j.left, right: j.right,
            animation: `${i % 2 === 0 ? "float-up" : "float-side"} ${j.dur}s ease-in-out infinite`,
            animationDelay: `${j.delay}s`,
            zIndex: 0,
          }}
          size={j.size} opacity={j.opacity} hue={j.hue}
        />
      ))}

      {/* ── Floating bubbles ── */}
      {bubbles.map((b, i) => (
        <Bubble key={i} style={{
          left: b.left, top: b.top, zIndex: 0,
          animation: `drift-bubble ${b.animDur} ease-in-out infinite`,
          animationDelay: b.animDelay,
        }} size={b.size} />
      ))}

      {/* ── Tulips at bottom ── */}
      {tulips.map((t, i) => (
        <Tulip key={i} style={{
          bottom: t.bottom, left: t.left, right: t.right,
          opacity: t.opacity, zIndex: 5,
          animation: `sway ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
          transformOrigin: "bottom center",
        }} size={t.size} color={t.color} />
      ))}

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "780px", margin: "0 auto", padding: "60px 24px 160px" }}>

        {/* Header */}
        <div className="section-fade" style={{ textAlign: "center", marginBottom: "60px", animationDelay: "0.1s" }}>
          <p style={{
            color: "rgba(130,190,255,0.6)", fontSize: "0.8rem", letterSpacing: "0.25em",
            textTransform: "uppercase", fontFamily: "'Lato', sans-serif", fontWeight: 300, marginBottom: "12px"
          }}>
            Para {CONFIG.partnerName}
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 700, fontStyle: "italic",
            color: "rgba(210,235,255,0.97)",
            margin: 0, lineHeight: 1.15,
            textShadow: "0 0 40px rgba(80,160,255,0.4)"
          }}>
            Un Mes Contigo
          </h1>
          <div style={{
            marginTop: "16px", display: "inline-flex", alignItems: "center", gap: "12px",
            background: "rgba(20,60,140,0.4)", borderRadius: "40px",
            padding: "8px 24px", border: "1px solid rgba(100,180,255,0.2)",
            backdropFilter: "blur(8px)"
          }}>
            <span style={{ color: "rgba(150,210,255,0.8)", fontSize: "0.85rem", fontFamily: "'Lato', sans-serif" }}>
              {days} días juntos
            </span>
            <span style={{ color: "rgba(80,160,255,0.5)" }}>✦</span>
            <span style={{ color: "rgba(150,210,255,0.8)", fontSize: "0.85rem", fontFamily: "'Lato', sans-serif" }}>
              De {CONFIG.yourName}
            </span>
          </div>
        </div>

        {/* Beating Heart */}
        <div className="section-fade" style={{ display: "flex", justifyContent: "center", marginBottom: "52px", animationDelay: "0.3s" }}>
          <BeatingHeart />
        </div>

        {/* Message */}
        <div className="section-fade" style={{
          background: "rgba(5,20,70,0.55)", backdropFilter: "blur(12px)",
          border: "1px solid rgba(100,180,255,0.15)", borderRadius: "20px",
          padding: "40px 36px", marginBottom: "64px",
          boxShadow: "0 8px 40px rgba(0,10,50,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
          animationDelay: "0.5s",
        }}>
          <div style={{
            color: "rgba(150,210,255,0.5)", fontSize: "3rem", lineHeight: 1,
            fontFamily: "'Playfair Display', serif", marginBottom: "12px"
          }}>"</div>
          <p style={{
            fontFamily: "'Playfair Display', serif", fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.18rem)", lineHeight: 1.85,
            color: "rgba(210,235,255,0.88)", margin: 0,
            textAlign: "center", whiteSpace: "pre-line"
          }}>
            {CONFIG.message}
          </p>
          <div style={{
            color: "rgba(150,210,255,0.5)", fontSize: "3rem", lineHeight: 1,
            fontFamily: "'Playfair Display', serif", textAlign: "right", marginTop: "4px"
          }}>"</div>
          <p style={{
            textAlign: "right", fontFamily: "'Lato', sans-serif", fontWeight: 300,
            color: "rgba(130,190,255,0.6)", fontSize: "0.85rem", margin: "12px 0 0",
            letterSpacing: "0.1em"
          }}>
          </p>
        </div>

        {/* Photos Section */}
        <div className="section-fade" style={{ animationDelay: "0.7s" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <p style={{
              color: "rgba(130,190,255,0.5)", fontSize: "0.75rem", letterSpacing: "0.25em",
              textTransform: "uppercase", fontFamily: "'Lato', sans-serif", fontWeight: 300, marginBottom: "8px"
            }}>
              Nuestros recuerdos
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontStyle: "italic",
              fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 400,
              color: "rgba(200,230,255,0.9)", margin: 0,
              textShadow: "0 0 20px rgba(80,160,255,0.3)"
            }}>
              Momentos que atesoro 🌊
            </h2>
          </div>

          <div className="photo-grid">
            {CONFIG.photos.map((photo, i) => (
              <PhotoCard key={i} photo={photo} index={i} onClick={() => setModalIndex(i)} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <p style={{
            color: "rgba(100,160,220,0.4)", fontSize: "0.78rem",
            fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: "0.08em"
          }}>
            Hecho con todo mi amor para ti 🤍
          </p>
        </div>

      </div>

      {/* ── Photo Modal ── */}
      {modalIndex !== null && (
        <PhotoModal
          photo={CONFIG.photos[modalIndex]}
          onClose={() => setModalIndex(null)}
          onPrev={() => setModalIndex(i => Math.max(0, i - 1))}
          onNext={() => setModalIndex(i => Math.min(CONFIG.photos.length - 1, i + 1))}
          hasPrev={modalIndex > 0}
          hasNext={modalIndex < CONFIG.photos.length - 1}
        />
      )}
    </div>
  );
}

// ── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [auth, setAuth] = useState(false);

  // Persist session in memory only (resets on close for privacy)
  if (!auth) return <LoginScreen onSuccess={() => setAuth(true)} />;
  return <MainPage />;
}