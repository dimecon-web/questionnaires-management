import { useState, useEffect } from "react";

const questions = [
  { id: 1, text: "Dans le travail, les gens aiment prendre des responsabilités.", theorie: "Y" },
  { id: 2, text: "Les gens sont guidés dans la vie par la recherche du moindre effort.", theorie: "X" },
  { id: 3, text: "La rémunération est la seule motivation des gens.", theorie: "X" },
  { id: 4, text: "Dans le travail, les gens visent la maturité et aspirent à l'indépendance.", theorie: "Y" },
  { id: 5, text: "Les individus sont tous capables dans leur travail d'initiatives intéressantes.", theorie: "Y" },
  { id: 6, text: "Les gens ont tendance à se reposer sur les directives du supérieur.", theorie: "X" },
  { id: 7, text: "Les gens sont capables d'évaluer la qualité de leur travail et de corriger spontanément leurs erreurs.", theorie: "Y" },
  { id: 8, text: "Les gens ont besoin, pour maintenir un certain rendement, d'un supérieur qui contrôle leur travail.", theorie: "X" },
  { id: 9, text: "Les gens ne trouvent d'intérêt qu'à la satisfaction de besoins matériels.", theorie: "X" },
  { id: 10, text: "Les gens ont besoin de connaître le sens et les buts du travail dans lequel ils sont engagés.", theorie: "Y" },
  { id: 11, text: "Les gens fuient la routine dans le travail et sont enthousiastes à toute nouvelle expérience.", theorie: "Y" },
  { id: 12, text: "Dans la vie, les gens aiment apprendre et se développer.", theorie: "Y" },
  { id: 13, text: "Les gens ont une tendance naturelle à la méfiance vis-à-vis de leur supérieur.", theorie: "X" },
  { id: 14, text: "Les gens ont peu de conscience professionnelle.", theorie: "X" },
  { id: 15, text: "Les gens préfèrent un travail exigeant peu d'efforts.", theorie: "X" },
];

const choices = [
  { label: "T", full: "Toujours", value: 2 },
  { label: "S", full: "Souvent", value: 1 },
  { label: "R", full: "Rarement", value: 0 },
  { label: "J", full: "Jamais", value: -1 },
];

const profiles = {
  X: [
    { min: 0, max: 6, label: "Théorie Y dominante", desc: "Votre vision du travail est fondée sur la confiance. Vous pensez que les gens cherchent naturellement à s'investir, à grandir et à prendre des responsabilités. Ce positionnement favorise l'autonomie et la délégation." },
    { min: 7, max: 13, label: "Profil mixte", desc: "Vous naviguez entre confiance et contrôle selon les situations. Ce pragmatisme peut être un atout, à condition d'identifier clairement quand chaque posture est pertinente." },
    { min: 14, max: 30, label: "Théorie X dominante", desc: "Votre vision tend à considérer que les gens ont besoin d'être encadrés, guidés et motivés par des facteurs externes. Ce positionnement appelle une réflexion sur les leviers de responsabilisation." },
  ],
};

function getProfile(scoreX) {
  return profiles.X.find(p => scoreX >= p.min && scoreX <= p.max);
}

function RadarChart({ scoreX, scoreY }) {
  const total = scoreX + scoreY || 1;
  const pctX = Math.round((scoreX / total) * 100);
  const pctY = 100 - pctX;

  const cx = 150, cy = 150, r = 110;
  const angleX = -90; // top
  const angleY = 90;  // bottom

  const toXY = (angle, radius) => ({
    x: cx + radius * Math.cos((angle * Math.PI) / 180),
    y: cy + radius * Math.sin((angle * Math.PI) / 180),
  });

  const ptX = toXY(angleX, (scoreX / 30) * r);
  const ptY = toXY(angleY, (scoreY / 30) * r);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <svg width={300} height={300} viewBox="0 0 300 300">
        {/* Background circles */}
        {[0.25, 0.5, 0.75, 1].map((f, i) => (
          <circle key={i} cx={cx} cy={cy} r={r * f} fill="none" stroke="#1e293b" strokeWidth={1} />
        ))}
        {/* Axes */}
        <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="#334155" strokeWidth={1} strokeDasharray="4,3" />
        {/* Zone X */}
        <circle cx={ptX.x} cy={ptX.y} r={10} fill="#ef4444" opacity={0.9} />
        <text x={ptX.x} y={ptX.y + 4} textAnchor="middle" fill="white" fontSize={9} fontWeight="700">X</text>
        {/* Zone Y */}
        <circle cx={ptY.x} cy={ptY.y} r={10} fill="#22d3ee" opacity={0.9} />
        <text x={ptY.x} y={ptY.y + 4} textAnchor="middle" fill="white" fontSize={9} fontWeight="700">Y</text>
        {/* Labels axes */}
        <text x={cx} y={cy - r - 12} textAnchor="middle" fill="#ef4444" fontSize={11} fontWeight="700" fontFamily="'DM Mono', monospace">THÉORIE X</text>
        <text x={cx} y={cy + r + 20} textAnchor="middle" fill="#22d3ee" fontSize={11} fontWeight="700" fontFamily="'DM Mono', monospace">THÉORIE Y</text>
        {/* Scale labels */}
        {[0.25, 0.5, 0.75, 1].map((f, i) => (
          <text key={i} x={cx + 6} y={cy - r * f + 4} fill="#475569" fontSize={8} fontFamily="'DM Mono', monospace">{Math.round(30 * f)}</text>
        ))}
      </svg>
      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#ef4444", fontFamily: "'DM Mono', monospace" }}>{scoreX}</div>
          <div style={{ fontSize: 10, color: "#94a3b8", letterSpacing: "0.1em" }}>THÉORIE X</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#22d3ee", fontFamily: "'DM Mono', monospace" }}>{scoreY}</div>
          <div style={{ fontSize: 10, color: "#94a3b8", letterSpacing: "0.1em" }}>THÉORIE Y</div>
        </div>
      </div>
    </div>
  );
}

export default function McGregorQuestionnaire() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const total = questions.length;
  const answered = Object.keys(answers).length;

  const handleChoice = (qid, value) => {
    setAnswers(prev => ({ ...prev, [qid]: value }));
    if (current < total - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrent(c => c + 1);
        setAnimating(false);
      }, 280);
    }
  };

  const computeScores = () => {
    let X = 0, Y = 0;
    questions.forEach(q => {
      const val = answers[q.id];
      if (val === undefined) return;
      // T=2pts, S=1pt, R=0, J=-1 (on clip à 0 min)
      const pts = Math.max(0, val + 1); // map: -1→0, 0→1, 1→2, 2→3... on recentre
      // Logique originale : T ou S → 1pt, R ou J → 0
      const positive = val >= 1; // T ou S
      if (q.theorie === "X") {
        if (positive) X += 1;
        else Y += 1; // J ou R sur item X → point Y
      } else {
        if (positive) Y += 1;
        else X += 1;
      }
    });
    return { X, Y };
  };

  const { X: scoreX, Y: scoreY } = computeScores();
  const profile = getProfile(scoreX);
  const canSubmit = answered === total;

  const progress = (answered / total) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0f1a",
      color: "#e2e8f0",
      fontFamily: "'Inter', system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1e293b",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#0d1526",
      }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#475569", marginBottom: 4 }}>QUESTIONNAIRE MANAGEMENT</div>
          <div style={{ fontSize: 20, fontWeight: 900, fontFamily: "'Playfair Display', serif", color: "#f8fafc" }}>Théories X & Y — McGregor</div>
        </div>
        {!submitted && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.1em", marginBottom: 4 }}>PROGRESSION</div>
            <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'DM Mono', monospace", color: "#22d3ee" }}>{answered}<span style={{ color: "#334155" }}>/{total}</span></div>
          </div>
        )}
      </div>

      {/* Progress bar */}
      {!submitted && (
        <div style={{ height: 3, background: "#1e293b" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #22d3ee, #6366f1)", transition: "width 0.4s ease" }} />
        </div>
      )}

      <div style={{ flex: 1, padding: "32px", maxWidth: 680, margin: "0 auto", width: "100%" }}>

        {!submitted ? (
          <>
            {/* Legend */}
            <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
              {choices.map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: "#1e293b", border: "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, fontFamily: "'DM Mono', monospace", color: "#94a3b8" }}>{c.label}</div>
                  <span style={{ fontSize: 11, color: "#475569" }}>{c.full}</span>
                </div>
              ))}
            </div>

            {/* Navigation tabs */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
              {questions.map((q, i) => (
                <button key={q.id} onClick={() => setCurrent(i)} style={{
                  width: 28, height: 28,
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 10,
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: 700,
                  background: i === current ? "#22d3ee" : answers[q.id] !== undefined ? "#1e4a3a" : "#1e293b",
                  color: i === current ? "#0a0f1a" : answers[q.id] !== undefined ? "#22d3ee" : "#475569",
                  transition: "all 0.2s",
                }}>{i + 1}</button>
              ))}
            </div>

            {/* Question card */}
            <div style={{
              background: "#0d1526",
              border: "1px solid #1e293b",
              borderRadius: 16,
              padding: 32,
              marginBottom: 24,
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "translateY(0)",
              transition: "opacity 0.25s, transform 0.25s",
            }}>
              <div style={{ fontSize: 11, color: "#475569", fontFamily: "'DM Mono', monospace", marginBottom: 12, letterSpacing: "0.1em" }}>
                AFFIRMATION {current + 1} / {total}
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#cbd5e1", marginBottom: 28, margin: "0 0 28px" }}>
                {questions[current].text}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
                {choices.map(c => {
                  const selected = answers[questions[current].id] === c.value;
                  return (
                    <button key={c.label} onClick={() => handleChoice(questions[current].id, c.value)} style={{
                      padding: "14px 8px",
                      borderRadius: 10,
                      border: selected ? "2px solid #22d3ee" : "1px solid #1e293b",
                      background: selected ? "rgba(34,211,238,0.12)" : "#111827",
                      color: selected ? "#22d3ee" : "#64748b",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                      transition: "all 0.15s",
                    }}>
                      <span style={{ fontSize: 18, fontWeight: 800, fontFamily: "'DM Mono', monospace" }}>{c.label}</span>
                      <span style={{ fontSize: 10, letterSpacing: "0.05em" }}>{c.full}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nav buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} style={{
                padding: "10px 20px", borderRadius: 8, border: "1px solid #1e293b",
                background: "transparent", color: current === 0 ? "#1e293b" : "#64748b",
                cursor: current === 0 ? "default" : "pointer", fontSize: 13,
              }}>← Précédent</button>

              {canSubmit ? (
                <button onClick={() => setSubmitted(true)} style={{
                  padding: "12px 32px", borderRadius: 10,
                  background: "linear-gradient(135deg, #22d3ee, #6366f1)",
                  border: "none", color: "white", fontWeight: 700, fontSize: 14,
                  cursor: "pointer", letterSpacing: "0.05em",
                }}>Voir mes résultats →</button>
              ) : (
                <button onClick={() => setCurrent(c => Math.min(total - 1, c + 1))} disabled={current === total - 1} style={{
                  padding: "10px 20px", borderRadius: 8, border: "1px solid #334155",
                  background: "transparent", color: "#94a3b8",
                  cursor: current === total - 1 ? "default" : "pointer", fontSize: 13,
                }}>Suivant →</button>
              )}
            </div>
          </>
        ) : (
          /* Results */
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#475569", marginBottom: 8 }}>RÉSULTATS</div>
              <h2 style={{ fontSize: 26, fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#f8fafc", margin: 0 }}>{profile?.label}</h2>
            </div>

            <div style={{ background: "#0d1526", border: "1px solid #1e293b", borderRadius: 16, padding: 28, display: "flex", justifyContent: "center" }}>
              <RadarChart scoreX={scoreX} scoreY={scoreY} />
            </div>

            {/* Barres */}
            <div style={{ background: "#0d1526", border: "1px solid #1e293b", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
              {[{ label: "Théorie X", score: scoreX, color: "#ef4444" }, { label: "Théorie Y", score: scoreY, color: "#22d3ee" }].map(item => (
                <div key={item.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, color: "#94a3b8" }}>
                    <span>{item.label}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", color: item.color, fontWeight: 700 }}>{item.score} / 15</span>
                  </div>
                  <div style={{ height: 8, background: "#1e293b", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${(item.score / 15) * 100}%`, background: item.color, borderRadius: 4, transition: "width 1s ease" }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Interprétation */}
            <div style={{ background: "#0d1526", border: "1px solid #1e293b", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#475569", marginBottom: 12 }}>INTERPRÉTATION</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#94a3b8", margin: 0 }}>{profile?.desc}</p>
            </div>

            {/* Grille de rappel */}
            <div style={{ background: "#0d1526", border: "1px solid #1e293b", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#475569", marginBottom: 16 }}>CADRE DE RÉFÉRENCE — MCGREGOR</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { label: "Théorie X", color: "#ef4444", items: ["L'être humain éprouve une aversion innée pour le travail", "Les gens doivent être contrôlés et dirigés", "L'individu préfère être dirigé, évite les responsabilités", "La sécurité prime sur l'ambition"] },
                  { label: "Théorie Y", color: "#22d3ee", items: ["L'effort au travail est naturel", "L'être humain peut s'auto-diriger", "L'individu cherche les responsabilités", "La créativité est une ressource largement répandue"] },
                ].map(t => (
                  <div key={t.label}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: t.color, marginBottom: 10, letterSpacing: "0.1em" }}>{t.label}</div>
                    {t.items.map((it, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                        <div style={{ width: 4, height: 4, borderRadius: 2, background: t.color, marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{it}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => { setAnswers({}); setSubmitted(false); setCurrent(0); }} style={{
              padding: "12px 24px", borderRadius: 10, border: "1px solid #334155",
              background: "transparent", color: "#64748b", cursor: "pointer", fontSize: 13,
            }}>↺ Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
}
