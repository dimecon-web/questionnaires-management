import { useState } from "react";

const groupes = [
  {
    id: "A", items: [
      { id: 1, text: "Les meilleures solutions sont celles qui apportent une satisfaction partagée avec son interlocuteur.", dim: "C4" },
      { id: 2, text: "Pour bien se faire comprendre, mieux vaut utiliser le même langage que son interlocuteur.", dim: "C2" },
      { id: 3, text: "Un engagement réaliste tenu vaut mieux qu'une promesse illusoire.", dim: "C3" },
      { id: 4, text: "Il faut bien connaître un métier pour pouvoir en parler.", dim: "C1" },
    ]
  },
  {
    id: "B", items: [
      { id: 5, text: "L'expertise se mesure au degré de satisfaction du client sur la prestation fournie.", dim: "C4" },
      { id: 6, text: "C'est par ses actes qu'on reconnaît le niveau d'engagement de quelqu'un.", dim: "C3" },
      { id: 7, text: "Avant de rencontrer un interlocuteur, il est important de préparer des questions précises à lui poser.", dim: "C2" },
      { id: 8, text: "Pour fournir des prestations de qualité, il est nécessaire d'approfondir et d'actualiser ses connaissances.", dim: "C1" },
    ]
  },
  {
    id: "C", items: [
      { id: 9, text: "Ma devise : s'appliquer à soi-même le même niveau d'exigence que l'on attend des autres.", dim: "C3" },
      { id: 10, text: "Un client agressif a surtout besoin d'être rassuré.", dim: "C4" },
      { id: 11, text: "Mieux vaut utiliser les techniques éprouvées qu'improviser.", dim: "C1" },
      { id: 12, text: "La valeur de l'expertise professionnelle réside dans la capacité à pouvoir la mettre à la portée de son interlocuteur.", dim: "C2" },
    ]
  },
  {
    id: "D", items: [
      { id: 13, text: "Un discours bref et bien structuré a plus de chances d'être entendu.", dim: "C2" },
      { id: 14, text: "L'excellence d'un métier repose sur la maîtrise des process et des méthodes employés.", dim: "C1" },
      { id: 15, text: "Tout point de vue mérite respect et considération.", dim: "C4" },
      { id: 16, text: "Mieux vaut prévenir à temps son interlocuteur d'une difficulté et l'associer à la résolution.", dim: "C3" },
    ]
  },
  {
    id: "E", items: [
      { id: 17, text: "Ce qui est logique pour soi ne l'est pas forcément pour quelqu'un d'autre.", dim: "C2" },
      { id: 18, text: "Pour répondre à une demande, l'important est de bien évaluer sa disponibilité avant de s'engager.", dim: "C3" },
      { id: 19, text: "On ne sait pas toujours ce que son interlocuteur ressent, mais on peut dire soi-même ce que l'on perçoit et ce que l'on éprouve.", dim: "C4" },
      { id: 20, text: "Poser un diagnostic juste nécessite de chercher et de réunir toutes les informations et connaissances possibles.", dim: "C1" },
    ]
  },
  {
    id: "F", items: [
      { id: 21, text: "Être efficace, c'est considérer que l'erreur est possible, mais que la récidive ne l'est pas.", dim: "C3" },
      { id: 22, text: "Il faut savoir instaurer un climat d'attention chaleureuse pour développer des relations constructives.", dim: "C4" },
      { id: 23, text: "Se mettre à contribution et savoir aller au bout des choses sont deux conditions pour fournir un service de qualité.", dim: "C3" },
      { id: 24, text: "Il y a un ordre à respecter dans ses propos pour s'exprimer clairement.", dim: "C2" },
    ]
  },
  {
    id: "G", items: [
      { id: 25, text: "Ma devise : faire ce que je dis et dire ce que je fais.", dim: "C3" },
      { id: 26, text: "L'expérience, c'est ce qui fait douter de l'infaillibilité de l'expertise.", dim: "C1" },
      { id: 27, text: "Bien comprendre le problème du client, c'est s'abstenir de penser à sa place.", dim: "C4" },
      { id: 28, text: "Un point de vue doit être soigneusement argumenté pour s'imposer.", dim: "C2" },
    ]
  },
  {
    id: "H", items: [
      { id: 29, text: "Les explications les plus simples sont les plus claires.", dim: "C2" },
      { id: 30, text: "Mieux vaut informer à l'avance d'un changement que de mettre quelqu'un devant le fait accompli.", dim: "C4" },
      { id: 31, text: "La qualité des arguments l'emporte sur leur quantité quand il s'agit de persuader.", dim: "C1" },
      { id: 32, text: "Une prestation de service efficace prend en compte les aléas et les évolutions du contexte.", dim: "C3" },
    ]
  },
  {
    id: "I", items: [
      { id: 33, text: "On fait confiance à ceux qui tiennent parole.", dim: "C3" },
      { id: 34, text: "Mieux vaut vérifier une information dont on n'est pas sûr avant de la transmettre.", dim: "C1" },
      { id: 35, text: "Les préoccupations de mon client sont mes préoccupations.", dim: "C4" },
      { id: 36, text: "Présenter les avantages et les inconvénients d'une solution aide à la décision.", dim: "C2" },
    ]
  },
  {
    id: "J", items: [
      { id: 37, text: "C'est en étant clair et rigoureux sur ses méthodes qu'on peut s'adapter plus facilement aux demandes de ses interlocuteurs.", dim: "C3" },
      { id: 38, text: "Aller au-devant des attentes de son interlocuteur est une meilleure stratégie que d'attendre qu'il se manifeste.", dim: "C4" },
      { id: 39, text: "Ce qui est acté à l'oral gagne à être reformulé par écrit pour lever le risque d'interprétation et d'incompréhension.", dim: "C2" },
      { id: 40, text: "Ma devise : informer complètement en toute transparence et communiquer régulièrement en toute simplicité.", dim: "C1" },
    ]
  },
];

const dimensions = {
  C1: { label: "Crédibilité", color: "#f59e0b", icon: "★", keywords: ["Connaissances", "Expertise", "Expérience", "Maîtrise", "Exactitude"], desc: "Votre influence repose sur la solidité de vos savoirs et de votre expertise reconnue. Les autres vous font confiance parce que vous maîtrisez votre domaine." },
  C2: { label: "Cohérence", color: "#6366f1", icon: "◈", keywords: ["Rigueur", "Méthode", "Organisation", "Clarté", "Ordonné"], desc: "Votre influence tient à la clarté et à la logique de vos messages. Vous structurez, vous ordonnez, vous rendez les choses lisibles." },
  C3: { label: "Consistance", color: "#10b981", icon: "▲", keywords: ["Engagement", "Implication", "Exigence", "Exemplarité", "Action"], desc: "Votre influence passe par l'exemple. Vous faites ce que vous dites, vous tenez vos engagements, et c'est ce qui vous donne de l'autorité." },
  C4: { label: "Congruence", color: "#ec4899", icon: "◎", keywords: ["Alignement", "Empathie", "Écoute", "Convivialité", "Authenticité"], desc: "Votre influence repose sur la qualité de la relation. Vous savez vous mettre à la place des autres, créer un climat de confiance et de sincérité." },
};

function SpiderChart({ scores }) {
  const keys = ["C1", "C2", "C3", "C4"];
  const labels = keys.map(k => dimensions[k].label);
  const colors = keys.map(k => dimensions[k].color);
  const max = 100;
  const cx = 150, cy = 150, r = 100;
  const angles = keys.map((_, i) => (i / keys.length) * 2 * Math.PI - Math.PI / 2);

  const toXY = (angle, val) => ({
    x: cx + (val / max) * r * Math.cos(angle),
    y: cy + (val / max) * r * Math.sin(angle),
  });

  const gridLevels = [0.25, 0.5, 0.75, 1];

  const normalized = keys.map(k => Math.min(100, (scores[k] / 100) * 100));

  const polygon = angles.map((a, i) => toXY(a, normalized[i]));
  const polygonStr = polygon.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <svg width={300} height={300} viewBox="0 0 300 300">
      {gridLevels.map((f, li) => {
        const pts = angles.map(a => toXY(a, f * max));
        return <polygon key={li} points={pts.map(p => `${p.x},${p.y}`).join(" ")} fill="none" stroke="#1e293b" strokeWidth={1} />;
      })}
      {angles.map((a, i) => {
        const outer = toXY(a, max);
        return <line key={i} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="#334155" strokeWidth={1} strokeDasharray="3,3" />;
      })}
      <polygon points={polygonStr} fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth={2} />
      {polygon.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={5} fill={colors[i]} />
      ))}
      {angles.map((a, i) => {
        const outer = toXY(a, max * 1.22);
        return (
          <text key={i} x={outer.x} y={outer.y + 4} textAnchor="middle" fill={colors[i]} fontSize={10} fontWeight="700" fontFamily="'DM Mono', monospace">
            {labels[i]}
          </text>
        );
      })}
    </svg>
  );
}

export default function SourcesInfluence() {
  const [currentGroupe, setCurrentGroupe] = useState(0);
  const [allocations, setAllocations] = useState(
    Object.fromEntries(groupes.map(g => [g.id, Object.fromEntries(g.items.map(it => [it.id, 0]))]))
  );
  const [submitted, setSubmitted] = useState(false);

  const groupe = groupes[currentGroupe];

  const groupeTotal = (gid) => {
    const alloc = allocations[gid];
    return Object.values(alloc).reduce((s, v) => s + v, 0);
  };

  const remaining = (gid) => 10 - groupeTotal(gid);

  const setVal = (gid, itemId, val) => {
    const cur = allocations[gid];
    const others = Object.entries(cur).filter(([k]) => k != itemId).reduce((s, [, v]) => s + v, 0);
    const clamped = Math.max(0, Math.min(10 - others, val));
    setAllocations(prev => ({ ...prev, [gid]: { ...prev[gid], [itemId]: clamped } }));
  };

  const allComplete = groupes.every(g => groupeTotal(g.id) === 10);

  const computeScores = () => {
    const totals = { C1: 0, C2: 0, C3: 0, C4: 0 };
    groupes.forEach(g => {
      g.items.forEach(it => {
        totals[it.dim] += allocations[g.id][it.id] || 0;
      });
    });
    return totals;
  };

  const scores = computeScores();
  const maxScore = Math.max(...Object.values(scores));
  const minScore = Math.min(...Object.values(scores));
  const dominant = Object.entries(scores).filter(([, v]) => v === maxScore).map(([k]) => k);
  const weakest = Object.entries(scores).filter(([, v]) => v === minScore).map(([k]) => k);

  const gt40 = Object.entries(scores).filter(([, v]) => v > 40).map(([k]) => k);
  const lt10 = Object.entries(scores).filter(([, v]) => v < 10).map(([k]) => k);

  const totalScored = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#0b0e17", color: "#e2e8f0", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e293b", padding: "20px 32px", background: "#0d1117", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#475569", marginBottom: 4 }}>QUESTIONNAIRE MANAGEMENT</div>
          <div style={{ fontSize: 20, fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>Sources de votre influence</div>
        </div>
        {!submitted && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.1em", marginBottom: 4 }}>GROUPES COMPLÉTÉS</div>
            <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'DM Mono', monospace", color: "#f59e0b" }}>
              {groupes.filter(g => groupeTotal(g.id) === 10).length}<span style={{ color: "#334155" }}>/{groupes.length}</span>
            </div>
          </div>
        )}
      </div>

      {/* Progress */}
      {!submitted && (
        <div style={{ height: 3, background: "#1e293b" }}>
          <div style={{ height: "100%", width: `${(groupes.filter(g => groupeTotal(g.id) === 10).length / groupes.length) * 100}%`, background: "linear-gradient(90deg, #f59e0b, #ec4899)", transition: "width 0.4s" }} />
        </div>
      )}

      <div style={{ flex: 1, padding: 32, maxWidth: 760, margin: "0 auto", width: "100%" }}>
        {!submitted ? (
          <>
            <div style={{ marginBottom: 16, padding: "10px 16px", background: "#111827", borderRadius: 8, border: "1px solid #1e293b", fontSize: 13, color: "#64748b" }}>
              Répartissez <strong style={{ color: "#f59e0b" }}>10 points</strong> entre les 4 affirmations de chaque groupe selon l'importance que vous leur accordez dans votre pratique managériale.
            </div>

            {/* Groupe navigation */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
              {groupes.map((g, i) => {
                const done = groupeTotal(g.id) === 10;
                return (
                  <button key={g.id} onClick={() => setCurrentGroupe(i)} style={{
                    width: 36, height: 36, borderRadius: 8,
                    border: "none", cursor: "pointer",
                    fontSize: 12, fontFamily: "'DM Mono', monospace", fontWeight: 700,
                    background: i === currentGroupe ? "#f59e0b" : done ? "#1a2e1a" : "#1e293b",
                    color: i === currentGroupe ? "#0b0e17" : done ? "#10b981" : "#475569",
                  }}>{g.id}</button>
                );
              })}
            </div>

            {/* Groupe card */}
            <div style={{ background: "#0d1117", border: "1px solid #1e293b", borderRadius: 16, padding: 28, marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 11, color: "#475569", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}>GROUPE {groupe.id}</div>
                <div style={{
                  fontSize: 13, fontFamily: "'DM Mono', monospace", fontWeight: 700,
                  color: groupeTotal(groupe.id) === 10 ? "#10b981" : "#f59e0b",
                }}>
                  {groupeTotal(groupe.id)}/10 points
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {groupe.items.map(item => {
                  const val = allocations[groupe.id][item.id] || 0;
                  return (
                    <div key={item.id} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                      <div style={{ flex: 1, fontSize: 14, color: "#94a3b8", lineHeight: 1.5 }}>
                        <span style={{ fontSize: 10, color: "#475569", fontFamily: "'DM Mono', monospace", marginRight: 8 }}>{item.id}.</span>
                        {item.text}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                        <button onClick={() => setVal(groupe.id, item.id, val - 1)} disabled={val <= 0} style={{
                          width: 28, height: 28, borderRadius: 6, border: "1px solid #334155",
                          background: "transparent", color: val <= 0 ? "#1e293b" : "#64748b",
                          cursor: val <= 0 ? "default" : "pointer", fontSize: 16, lineHeight: 1,
                        }}>−</button>
                        <div style={{
                          width: 36, height: 36, borderRadius: 8,
                          background: val > 0 ? "rgba(245,158,11,0.12)" : "#111827",
                          border: val > 0 ? "2px solid #f59e0b" : "1px solid #1e293b",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 16, fontWeight: 800, fontFamily: "'DM Mono', monospace",
                          color: val > 0 ? "#f59e0b" : "#334155",
                        }}>{val}</div>
                        <button onClick={() => setVal(groupe.id, item.id, val + 1)} disabled={remaining(groupe.id) <= 0} style={{
                          width: 28, height: 28, borderRadius: 6, border: "1px solid #334155",
                          background: "transparent", color: remaining(groupe.id) <= 0 ? "#1e293b" : "#64748b",
                          cursor: remaining(groupe.id) <= 0 ? "default" : "pointer", fontSize: 16, lineHeight: 1,
                        }}>+</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mini bar */}
              <div style={{ marginTop: 20, height: 4, background: "#1e293b", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${groupeTotal(groupe.id) * 10}%`, background: groupeTotal(groupe.id) === 10 ? "#10b981" : "#f59e0b", borderRadius: 2, transition: "width 0.3s" }} />
              </div>
            </div>

            {/* Nav */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button onClick={() => setCurrentGroupe(c => Math.max(0, c - 1))} disabled={currentGroupe === 0} style={{
                padding: "10px 20px", borderRadius: 8, border: "1px solid #1e293b",
                background: "transparent", color: currentGroupe === 0 ? "#1e293b" : "#64748b",
                cursor: currentGroupe === 0 ? "default" : "pointer", fontSize: 13,
              }}>← Précédent</button>

              {allComplete ? (
                <button onClick={() => setSubmitted(true)} style={{
                  padding: "12px 32px", borderRadius: 10,
                  background: "linear-gradient(135deg, #f59e0b, #ec4899)",
                  border: "none", color: "white", fontWeight: 700, fontSize: 14,
                  cursor: "pointer",
                }}>Voir mes résultats →</button>
              ) : (
                <button onClick={() => setCurrentGroupe(c => Math.min(groupes.length - 1, c + 1))} disabled={currentGroupe === groupes.length - 1} style={{
                  padding: "10px 20px", borderRadius: 8, border: "1px solid #334155",
                  background: "transparent", color: "#94a3b8",
                  cursor: currentGroupe === groupes.length - 1 ? "default" : "pointer", fontSize: 13,
                }}>Suivant →</button>
              )}
            </div>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#475569", marginBottom: 8 }}>RÉSULTATS</div>
              <h2 style={{ fontSize: 24, fontFamily: "'Playfair Display', serif", fontWeight: 900, margin: 0 }}>Sources de votre influence</h2>
            </div>

            {/* Spider */}
            <div style={{ background: "#0d1117", border: "1px solid #1e293b", borderRadius: 16, padding: 28, display: "flex", justifyContent: "center" }}>
              <SpiderChart scores={{ C1: scores.C1, C2: scores.C2, C3: scores.C3, C4: scores.C4 }} />
            </div>

            {/* Scores barres */}
            <div style={{ background: "#0d1117", border: "1px solid #1e293b", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              {Object.entries(dimensions).map(([key, dim]) => (
                <div key={key}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: dim.color, fontWeight: 700, fontSize: 14 }}>{dim.icon}</span>
                      <span style={{ fontSize: 13, color: "#94a3b8" }}>{dim.label}</span>
                    </div>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 700, fontSize: 14, color: dim.color }}>{scores[key]}</span>
                  </div>
                  <div style={{ height: 6, background: "#1e293b", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${(scores[key] / 100) * 100}%`, background: dim.color, borderRadius: 3, transition: "width 1s ease" }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Analyse */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {dominant.map(k => (
                <div key={k} style={{ background: "#0d1117", border: `1px solid ${dimensions[k].color}40`, borderRadius: 16, padding: 20 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.15em", color: dimensions[k].color, marginBottom: 8 }}>REGISTRE DOMINANT</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginBottom: 8 }}>{dimensions[k].label}</div>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{dimensions[k].desc}</p>
                  <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {dimensions[k].keywords.map(kw => (
                      <span key={kw} style={{ padding: "2px 8px", borderRadius: 4, background: `${dimensions[k].color}15`, color: dimensions[k].color, fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{kw}</span>
                    ))}
                  </div>
                </div>
              ))}
              {weakest.map(k => (
                <div key={k} style={{ background: "#0d1117", border: "1px solid #1e293b", borderRadius: 16, padding: 20 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#475569", marginBottom: 8 }}>À RENFORCER</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginBottom: 8 }}>{dimensions[k].label}</div>
                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{dimensions[k].desc}</p>
                </div>
              ))}
            </div>

            {/* Équilibre */}
            <div style={{ background: "#0d1117", border: "1px solid #1e293b", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#475569", marginBottom: 14 }}>ANALYSE D'ÉQUILIBRE</div>
              {(() => {
                const allScores = Object.values(scores);
                const max2 = Math.max(...allScores);
                const min2 = Math.min(...allScores);
                const ecart = max2 - min2;
                const equilibre = ecart < 5;
                return (
                  <>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 4, background: equilibre ? "#10b981" : "#ef4444" }} />
                      <span style={{ fontSize: 13, color: "#94a3b8" }}>
                        Registres {equilibre ? "équilibrés" : "déséquilibrés"} — écart max : <span style={{ fontFamily: "'DM Mono', monospace", color: equilibre ? "#10b981" : "#ef4444", fontWeight: 700 }}>{ecart} pts</span>
                      </span>
                    </div>
                    {gt40.length > 0 && (
                      <div style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>
                        Registre(s) sur-représentés (&gt;40 pts) : <span style={{ color: "#f59e0b" }}>{gt40.map(k => dimensions[k].label).join(", ")}</span>
                      </div>
                    )}
                    {lt10.length > 0 && (
                      <div style={{ fontSize: 12, color: "#64748b" }}>
                        Registre(s) sous-représentés (&lt;10 pts) : <span style={{ color: "#ec4899" }}>{lt10.map(k => dimensions[k].label).join(", ")}</span>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>

            <button onClick={() => { setSubmitted(false); setCurrentGroupe(0); setAllocations(Object.fromEntries(groupes.map(g => [g.id, Object.fromEntries(g.items.map(it => [it.id, 0]))]))); }} style={{
              padding: "12px 24px", borderRadius: 10, border: "1px solid #334155",
              background: "transparent", color: "#64748b", cursor: "pointer", fontSize: 13,
            }}>↺ Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
}
