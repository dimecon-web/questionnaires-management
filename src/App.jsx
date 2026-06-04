import { Routes, Route, Link } from "react-router-dom";
import McGregor from "./McGregor";
import SourcesInfluence from "./SourcesInfluence";
import Leadership from "./Leadership";

const cards = [
  {
    to: "/mcgregor",
    title: "Théories X & Y",
    author: "McGregor",
    desc: "15 affirmations pour identifier votre vision de la nature humaine au travail.",
    color: "#22d3ee",
    icon: "⚡",
    items: "15 affirmations · T/S/R/J",
  },
  {
    to: "/sources-influence",
    title: "Sources de votre influence",
    author: "Couchaere",
    desc: "40 affirmations réparties en 10 groupes pour mesurer vos leviers d'influence managériale.",
    color: "#f59e0b",
    icon: "◈",
    items: "40 affirmations · 10 groupes",
  },
  {
    to: "/leadership",
    title: "Style de leadership",
    author: "Couchaere",
    desc: "10 situations managériales pour identifier votre style dominant : Meneur, Organisateur, Coopérateur ou Compétiteur.",
    color: "#6366f1",
    icon: "▲",
    items: "10 situations · 4 profils",
  },
];

function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#090c14",
      color: "#e2e8f0",
      fontFamily: "Inter, system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "48px 24px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 720, width: "100%" }}>
        <div style={{ marginBottom: 8, fontSize: 10, letterSpacing: "0.25em", color: "#475569" }}>OPTA-S · FORMATION MANAGEMENT</div>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 36, fontWeight: 900, margin: "0 0 8px", color: "#f8fafc" }}>
          Questionnaires de management
        </h1>
        <p style={{ fontSize: 15, color: "#475569", margin: "0 0 48px", lineHeight: 1.6 }}>
          Trois outils d'autodiagnostic pour mieux comprendre votre posture managériale.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cards.map((c) => (
            <Link key={c.to} to={c.to} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "#0d1117",
                  border: `1px solid ${c.color}30`,
                  borderLeft: `4px solid ${c.color}`,
                  borderRadius: 16,
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 28,
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 36, color: c.color, flexShrink: 0 }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: c.color, letterSpacing: "0.15em", marginBottom: 4, fontFamily: "DM Mono, monospace" }}>
                    {c.author.toUpperCase()} · {c.items}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#f8fafc", marginBottom: 6 }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{c.desc}</div>
                </div>
                <div style={{ color: c.color, fontSize: 20, flexShrink: 0 }}>→</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 48, textAlign: "center", fontSize: 11, color: "#334155", fontFamily: "DM Mono, monospace" }}>
          D'après Couchaere, Cultivez vos soft skills, ESF Sciences Humaines, 2020 · McGregor, The Human Side of Enterprise, 1960
        </div>
      </div>
    </div>
  );
}

function BackButton() {
  return (
    <Link to="/" style={{
      position: "fixed", top: 16, left: 16, zIndex: 100,
      padding: "8px 16px", borderRadius: 8,
      background: "rgba(13,17,23,0.9)", border: "1px solid #1e293b",
      color: "#64748b", textDecoration: "none", fontSize: 12,
      backdropFilter: "blur(8px)",
    }}>← Accueil</Link>
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
