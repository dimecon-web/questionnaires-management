import { useState } from "react";

const SF = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif";

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

const profiles = [
  {
    min: 0, max: 3, label: "Théorie Y dominante", color: "#34c759",
    desc: "Votre vision du travail est fondée sur la confiance. Vous pensez que les gens cherchent naturellement à s'investir, à grandir et à prendre des responsabilités. Ce positionnement favorise l'autonomie et la délégation.",
    aise: [
      "Accompagner un collaborateur expérimenté sur un projet complexe qu'il maîtrise",
      "Animer une équipe soudée, motivée, avec un haut niveau d'autonomie",
      "Conduire un changement en co-construction avec les équipes",
      "Mettre en place une organisation apprenante ou une culture de la responsabilisation",
      "Gérer des profils experts ou créatifs qui ont besoin d'espace pour performer",
    ],
    difficulte: [
      "Encadrer un collaborateur en difficulté qui a besoin de cadre et de directives claires",
      "Faire face à une crise urgente qui exige des décisions rapides et non concertées",
      "Manager dans un contexte très hiérarchisé ou très procédurier",
      "Gérer des comportements opportunistes ou des personnes peu engagées",
      "Maintenir l'exigence sans être perçu comme trop permissif",
    ],
  },
  {
    min: 4, max: 6, label: "Tendance Y — avec nuances", color: "#30c97a",
    desc: "Votre posture de base est ancrée dans la confiance et l'autonomie, mais vous savez adapter votre style quand la situation le demande. Cette nuance est souvent un atout : vous pouvez cadrer sans perdre l'esprit de responsabilisation.",
    aise: [
      "Adapter son niveau de délégation selon la maturité réelle du collaborateur",
      "Allier bienveillance et exigence sans tomber dans l'excès de l'un ou l'autre",
      "Animer des équipes hétérogènes avec des besoins d'encadrement variés",
      "Garder le cap sur les résultats tout en préservant un climat de confiance",
      "Introduire du cadre ponctuellement sans être perçu comme autoritaire",
    ],
    difficulte: [
      "Maintenir une position ferme face à des collaborateurs très demandeurs de cadre",
      "Être suffisamment directif dans des situations qui l'exigent clairement",
      "Éviter de trop laisser faire par peur de briser la relation de confiance",
      "Recadrer fermement sans minimiser ou enrober le message",
      "Être lisible pour des profils qui ont besoin de consignes très claires",
    ],
  },
  {
    min: 7, max: 8, label: "Profil mixte — équilibre relatif", color: "#ff9500",
    desc: "Vous naviguez de façon relativement équilibrée entre les deux postures. Ce pragmatisme peut être un atout réel, à condition que vos collaborateurs vous perçoivent comme cohérent plutôt qu'imprévisible.",
    aise: [
      "Adapter son style à des contextes et des profils très différents",
      "Trouver un compromis entre exigence et soutien selon la situation",
      "Piloter une équipe hétérogène sans imposer une posture unique",
      "Naviguer dans des environnements où les attentes changent souvent",
      "Être à l'aise aussi bien dans la directive que dans la co-construction",
    ],
    difficulte: [
      "Être lisible et prévisible pour des collaborateurs qui ont besoin de repères stables",
      "Affirmer une posture managériale claire et assumée",
      "Éviter que la flexibilité soit perçue comme de l'hésitation ou du manque de cap",
      "Défendre une position ferme face à une pression collective",
      "Savoir quand basculer d'un mode à l'autre sans que ça paraisse arbitraire",
    ],
  },
  {
    min: 9, max: 11, label: "Tendance X — avec nuances", color: "#ff6b30",
    desc: "Votre réflexe est plutôt de cadrer, de contrôler et de diriger, mais vous intégrez une part de nuance dans votre pratique. Vous pouvez faire évoluer votre style si vous identifiez les situations où lâcher du contrôle serait plus efficace.",
    aise: [
      "Encadrer des profils peu expérimentés qui ont besoin de consignes précises",
      "Garantir la fiabilité des livrables dans des contextes sous pression",
      "Reprendre en main une situation qui dérive ou clarifier des rôles flous",
      "Imposer un cadre dans des environnements peu structurés",
      "Maintenir la rigueur dans des contextes à fort enjeu de conformité",
    ],
    difficulte: [
      "Laisser de la place à l'initiative sans ressentir une perte de contrôle",
      "Motiver des profils autonomes et créatifs qui ont besoin de liberté",
      "Déléguer avec suffisamment de confiance pour que la délégation soit réelle",
      "Créer un climat de confiance durable au-delà de la relation hiérarchique",
      "Reconnaître que le contrôle systématique peut freiner l'engagement",
    ],
  },
  {
    min: 12, max: 15, label: "Théorie X dominante", color: "#ff3b30",
    desc: "Votre vision tend à considérer que les gens ont besoin d'être encadrés, guidés et motivés par des facteurs externes. Ce positionnement a sa légitimité dans certains contextes, mais appelle une réflexion sur les leviers de responsabilisation à long terme.",
    aise: [
      "Encadrer des équipes peu expérimentées qui ont besoin de consignes précises",
      "Gérer des contextes à fort enjeu de conformité, de sécurité ou de réglementation",
      "Reprendre en main une équipe en dérive ou en situation de crise",
      "Mettre en place des procédures claires dans un environnement désorganisé",
      "Garantir la fiabilité des livrables dans un contexte sous pression",
    ],
    difficulte: [
      "Retenir et engager des collaborateurs autonomes et créatifs",
      "Créer un climat de confiance et favoriser l'initiative",
      "Déléguer sans avoir le sentiment de perdre le contrôle",
      "Accompagner des profils experts qui ont besoin de liberté pour performer",
      "Susciter l'engagement sur la durée sans s'appuyer uniquement sur le contrôle",
    ],
  },
];

function getProfile(scoreX) {
  return profiles.find(p => scoreX >= p.min && scoreX <= p.max);
}

function BarChart({ scoreX, scoreY }) {
  const total = scoreX + scoreY || 1;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {[
        { label: "Théorie X", score: scoreX, color: "#ff3b30" },
        { label: "Théorie Y", score: scoreY, color: "#34c759" },
      ].map(item => (
        <div key={item.label}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14, color: "#1d1d1f", fontWeight: 500 }}>
            <span>{item.label}</span>
            <span style={{ color: item.color, fontWeight: 600 }}>{item.score} / 15</span>
          </div>
          <div style={{ height: 8, background: "#f5f5f7", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(item.score / 15) * 100}%`, background: item.color, borderRadius: 4, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function McGregor() {
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
      setTimeout(() => { setCurrent(c => c + 1); setAnimating(false); }, 320);
    }
  };

  const computeScores = () => {
    let X = 0, Y = 0;
    questions.forEach(q => {
      const val = answers[q.id];
      if (val === undefined) return;
      const positive = val >= 1;
      if (q.theorie === "X") { if (positive) X += 1; else Y += 1; }
      else { if (positive) Y += 1; else X += 1; }
    });
    return { X, Y };
  };

  const { X: scoreX, Y: scoreY } = computeScores();
  const profile = getProfile(scoreX);
  const canSubmit = answered === total;
  const progress = (answered / total) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f7", fontFamily: SF, padding: "80px 24px 48px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 4 }}>McGregor · {answered}/{total}</div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#1d1d1f", margin: "0 0 16px", letterSpacing: "-0.02em" }}>Théories X & Y</h1>
          <div style={{ height: 4, background: "#e5e5ea", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#0071e3", borderRadius: 2, transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)" }} />
          </div>
        </div>

        {!submitted ? (
          <>
            {/* Pills navigation */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
              {questions.map((q, i) => (
                <button key={q.id} onClick={() => setCurrent(i)} style={{
                  width: 30, height: 30, borderRadius: 15,
                  border: "none", cursor: "pointer", fontSize: 11, fontWeight: 600,
                  background: i === current ? "#0071e3" : answers[q.id] !== undefined ? "#34c75920" : "#e5e5ea",
                  color: i === current ? "white" : answers[q.id] !== undefined ? "#34c759" : "#6e6e73",
                  transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
                }}>{i + 1}</button>
              ))}
            </div>

            {/* Question card */}
            <div style={{
              background: "white", borderRadius: 20, padding: 28,
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 20,
              opacity: animating ? 0 : 1, transform: animating ? "translateY(6px)" : "none",
              transition: "opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 12 }}>Affirmation {current + 1} sur {total}</div>
              <p style={{ fontSize: 19, color: "#1d1d1f", lineHeight: 1.65, margin: "0 0 28px", fontWeight: 400 }}>
                {questions[current].text}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
                {choices.map(c => {
                  const selected = answers[questions[current].id] === c.value;
                  return (
                    <button key={c.label} onClick={() => handleChoice(questions[current].id, c.value)} style={{
                      padding: "14px 8px", borderRadius: 14,
                      border: selected ? "2px solid #0071e3" : "1.5px solid #e5e5ea",
                      background: selected ? "#0071e315" : "white",
                      cursor: "pointer",
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                      transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
                    }}>
                      <span style={{ fontSize: 19, fontWeight: 700, color: selected ? "#0071e3" : "#1d1d1f" }}>{c.label}</span>
                      <span style={{ fontSize: 11, color: selected ? "#0071e3" : "#6e6e73", fontWeight: 500 }}>{c.full}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nav */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} style={{
                padding: "10px 20px", borderRadius: 20, border: "none",
                background: current === 0 ? "transparent" : "#e5e5ea",
                color: current === 0 ? "#c7c7cc" : "#1d1d1f",
                cursor: current === 0 ? "default" : "pointer", fontSize: 14, fontWeight: 500,
              }}>‹ Précédent</button>

              {canSubmit ? (
                <button onClick={() => setSubmitted(true)} style={{
                  padding: "12px 28px", borderRadius: 20, border: "none",
                  background: "#0071e3", color: "white", fontWeight: 600, fontSize: 15,
                  cursor: "pointer",
                }}>Voir mes résultats</button>
              ) : (
                <button onClick={() => setCurrent(c => Math.min(total - 1, c + 1))} style={{
                  padding: "10px 20px", borderRadius: 20, border: "none",
                  background: "#e5e5ea", color: "#1d1d1f",
                  cursor: "pointer", fontSize: 14, fontWeight: 500,
                }}>Suivant ›</button>
              )}
            </div>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Profil */}
            <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 8 }}>Résultat</div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: profile?.color, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{profile?.label}</h2>
              <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.7, margin: 0 }}>{profile?.desc}</p>
            </div>

            {/* Scores */}
            <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 16 }}>Scores</div>
              <BarChart scoreX={scoreX} scoreY={scoreY} />
            </div>

            {/* Référentiel */}
            <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 16 }}>Cadre de référence</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { label: "Théorie X", color: "#ff3b30", items: ["Aversion naturelle pour le travail", "Besoin de contrôle et de direction", "Préférence pour être dirigé", "La sécurité prime sur l'ambition"] },
                  { label: "Théorie Y", color: "#34c759", items: ["L'effort au travail est naturel", "Capacité d'auto-direction", "Recherche des responsabilités", "La créativité est largement répandue"] },
                ].map(t => (
                  <div key={t.label}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: t.color, marginBottom: 10 }}>{t.label}</div>
                    {t.items.map((it, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
                        <div style={{ width: 5, height: 5, borderRadius: 3, background: t.color, marginTop: 6, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.5 }}>{it}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Tous les profils */}
            <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 16 }}>Les trois profils possibles</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {profiles.map(p => {
                  const isCurrent = p.label === profile?.label;
                  return (
                    <div key={p.label} style={{
                      padding: "20px 22px", borderRadius: 14,
                      background: isCurrent ? p.color + "06" : "#fafafa",
                      border: isCurrent ? "2px solid " + p.color : "1.5px solid #e5e5ea",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                        <div style={{ width: 8, height: 8, borderRadius: 4, background: p.color, flexShrink: 0 }} />
                        <div style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f" }}>{p.label}</div>
                        {isCurrent && <div style={{ fontSize: 11, fontWeight: 600, color: p.color, background: p.color + "18", padding: "2px 8px", borderRadius: 6 }}>Votre profil</div>}
                        <div style={{ fontSize: 12, color: "#aeaeb2", marginLeft: "auto" }}>Score X : {p.min}–{p.max}</div>
                      </div>
                      <div style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 600, color: "#34c759", letterSpacing: "0.06em", marginBottom: 8 }}>À L'AISE DANS…</div>
                          {p.aise.map((s, i) => (
                            <div key={i} style={{ display: "flex", gap: 7, marginBottom: 6, alignItems: "flex-start" }}>
                              <div style={{ width: 5, height: 5, borderRadius: 3, background: "#34c759", marginTop: 7, flexShrink: 0 }} />
                              <span style={{ fontSize: 13, color: "#3a3a3c", lineHeight: 1.5 }}>{s}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 600, color: "#ff3b30", letterSpacing: "0.06em", marginBottom: 8 }}>EN DIFFICULTÉ QUAND…</div>
                          {p.difficulte.map((s, i) => (
                            <div key={i} style={{ display: "flex", gap: 7, marginBottom: 6, alignItems: "flex-start" }}>
                              <div style={{ width: 5, height: 5, borderRadius: 3, background: "#ff3b30", marginTop: 7, flexShrink: 0 }} />
                              <span style={{ fontSize: 13, color: "#3a3a3c", lineHeight: 1.5 }}>{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            }}>Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
}

