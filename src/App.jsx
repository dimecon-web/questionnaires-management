import { Routes, Route, Link } from "react-router-dom";
import McGregor from "./McGregor";
import SourcesInfluence from "./SourcesInfluence";
import Leadership from "./Leadership";

const cards = [
  {
    to: "/mcgregor",
    title: "Théories X & Y",
    author: "D'après Douglas McGregor",
    desc: "15 affirmations pour identifier votre vision de la nature humaine au travail.",
    color: "#0071e3",
    items: "15 affirmations · T / S / R / J",
  },
  {
    to: "/sources-influence",
    title: "Sources de votre influence",
    author: "D'après Marie-Josée Couchaere",
    desc: "40 affirmations réparties en 10 groupes pour mesurer vos leviers d'influence managériale.",
    color: "#ff6b00",
    items: "40 affirmations · 10 groupes",
  },
  {
    to: "/leadership",
    title: "Style de leadership",
    author: "D'après Marie-Josée Couchaere",
    desc: "10 situations managériales pour identifier votre style dominant.",
    color: "#34c759",
    items: "10 situations · 4 profils",
  },
];

function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f5f7",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      padding: "64px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <div style={{ maxWidth: 680, width: "100%" }}>
        <div style={{ marginBottom: 4, fontSize: 12, letterSpacing: "0.05em", color: "#6e6e73", fontWeight: 500 }}>
          OPTA-S · Formation Management
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 700, color: "#1d1d1f", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
          Questionnaires
        </h1>
        <p style={{ fontSize: 17, color: "#6e6e73", margin: "0 0 48px", lineHeight: 1.6, fontWeight: 400 }}>
          Trois outils d'autodiagnostic pour mieux comprendre votre posture managériale.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {cards.map((c) => (
            <Link key={c.to} to={c.to} style={{ textDecoration: "none" }}>
              <div style={{
                background: "white",
                borderRadius: 18,
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.10)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${c.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: c.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: "#6e6e73", marginBottom: 3, fontWeight: 500 }}>{c.items}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: "#1d1d1f", marginBottom: 3, letterSpacing: "-0.01em" }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: "#6e6e73" }}>{c.author}</div>
                </div>
                <div style={{ color: "#c7c7cc", fontSize: 18, flexShrink: 0 }}>›</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center", fontSize: 12, color: "#c7c7cc" }}>
          Couchaere, Cultivez vos soft skills, ESF Sciences Humaines, 2020 · McGregor, The Human Side of Enterprise, 1960
        </div>
      </div>
    </div>
  );
}

function BackButton() {
  return (
    <Link to="/" style={{
      position: "fixed", top: 20, left: 20, zIndex: 100,
      padding: "8px 16px", borderRadius: 20,
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(0,0,0,0.08)",
      color: "#0071e3", textDecoration: "none", fontSize: 14, fontWeight: 500,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    }}>‹ Accueil</Link>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mcgregor" element={<><BackButton /><McGregor /></>} />
      <Route path="/sources-influence" element={<><BackButton /><SourcesInfluence /></>} />
      <Route path="/leadership" element={<><BackButton /><Leadership /></>} />
    </Routes>
  );
}
