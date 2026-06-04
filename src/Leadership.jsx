import { useState } from "react";

const situations = [
  {
    id: 1,
    text: "Pour moi, le manager doit :",
    items: [
      { id: "1A", text: "Déléguer le plus souvent possible pour dégager du temps et réfléchir à la politique et ses moyens.", col: "A" },
      { id: "1B", text: "D'abord s'imposer techniquement et connaître parfaitement les évolutions.", col: "B" },
      { id: "1C", text: "Connaître parfaitement tous les problèmes juridiques et législatifs liés à son rôle de responsable.", col: "C" },
      { id: "1D", text: "Savoir avant tout innover, stimuler les membres de l'équipe et entretenir de bonnes relations.", col: "D" },
    ]
  },
  {
    id: 2,
    text: "Un·e bon·ne collaborateur·rice doit :",
    items: [
      { id: "2A", text: "Être persévérant·e et ne pas créer de problème ni à moi ni aux autres.", col: "A" },
      { id: "2B", text: "Être organisé·e, ponctuel·le et s'en tenir aux consignes données face aux clients internes ou externes.", col: "B" },
      { id: "2C", text: "Porter de l'estime à ses responsables et respecter les règles de l'entreprise.", col: "C" },
      { id: "2D", text: "Savoir comprendre l'intérêt et l'objectif de son travail.", col: "D" },
    ]
  },
  {
    id: 3,
    text: "Un bon projet d'entreprise doit :",
    items: [
      { id: "3A", text: "Traduire avant tout ce que veut la Direction générale car c'est elle qui fixe les objectifs et les moyens.", col: "A" },
      { id: "3B", text: "Être clair, complet et définir ce que chacun doit faire ainsi que les procédures de contrôle.", col: "B" },
      { id: "3C", text: "Être élaboré après consultation des employés concernés suffisamment informés pour faire des suggestions.", col: "C" },
      { id: "3D", text: "Indiquer les objectifs à chacun des responsables et laisser l'initiative des moyens dans un cadre défini.", col: "D" },
    ]
  },
  {
    id: 4,
    text: "Face à un·e nouvel·le embauché·e, il faut avant tout :",
    items: [
      { id: "4A", text: "Lui décrire son travail en détail, lui préciser ce que l'on attend de lui·elle et à qui s'adresser en cas de problème.", col: "A" },
      { id: "4B", text: "Lui faire part des règles en usage afin qu'il·elle sache bien comment se comporter dans l'entreprise.", col: "B" },
      { id: "4C", text: "S'efforcer de l'intégrer aux équipes en la présentant aux équipes et en l'accompagnant les premiers mois.", col: "C" },
      { id: "4D", text: "Lui exposer les objectifs de l'entreprise et lui montrer l'évolution depuis quelques années et les prévisions.", col: "D" },
    ]
  },
  {
    id: 5,
    text: "Quand il y a une décision à prendre :",
    items: [
      { id: "5A", text: "En général, je préfère prendre seul·e les décisions et je veille à ce qu'elle soit parfaitement exécutée pour assurer sa réussite.", col: "A" },
      { id: "5B", text: "J'en parle d'abord à des personnes compétentes ou au-dessus de moi.", col: "B" },
      { id: "5C", text: "Je fais une réunion avec les intéressés et je cherche à obtenir les avis en vue de trouver une solution de compromis.", col: "C" },
      { id: "5D", text: "Je délègue des pouvoirs aux intéressés les plus compétents et les pousse à s'engager personnellement sur les conséquences des décisions prises.", col: "D" },
    ]
  },
  {
    id: 6,
    text: "Quand deux collaborateur·rices ne s'entendent pas et perdent du temps à se disputer :",
    items: [
      { id: "6A", text: "J'interviens avec autorité pour stopper le conflit et remettre « les pendules à l'heure ».", col: "A" },
      { id: "6B", text: "Je les convoque pour leur rappeler leurs engagements, leurs objectifs et les bonnes règles.", col: "B" },
      { id: "6C", text: "Je tente d'apaiser les choses pour sauvegarder l'esprit d'équipe.", col: "C" },
      { id: "6D", text: "Je profite de l'occasion pour analyser les raisons de ce qui ne va pas entre eux·elles et voir ensemble les solutions possibles.", col: "D" },
    ]
  },
  {
    id: 7,
    text: "Pour un·e manager, être responsable c'est :",
    items: [
      { id: "7A", text: "Agir avec détermination en sachant se faire approuver avec un minimum de discussion.", col: "A" },
      { id: "7B", text: "Transmettre et faire appliquer ce qui est décidé conformément à ce qui a été défini à l'embauche.", col: "B" },
      { id: "7C", text: "Faire en sorte que tout le monde puisse s'exprimer et veiller à ce que les gens soient contents de travailler ensemble.", col: "C" },
      { id: "7D", text: "Distribuer le travail correctement entre chacun en fonction des compétences et responsabiliser tout le monde sur les objectifs.", col: "D" },
    ]
  },
  {
    id: 8,
    text: "Si un·e collaborateur·rice prend une initiative imprévue :",
    items: [
      { id: "8A", text: "Je lui signale qu'il·elle n'a pas à prendre d'initiative seul·e et je lui rappelle son rôle.", col: "A" },
      { id: "8B", text: "Je lui fais comprendre qu'il·elle participe à une entreprise qui forme un tout et que celle-ci serait impossible à diriger si chacun prenait des initiatives imprévues dans son coin.", col: "B" },
      { id: "8C", text: "Je le·a laisse aller plus loin si cela ne gène pas les autres autour.", col: "C" },
      { id: "8D", text: "Je l'étudie et si elle est positive, je l'encourage à la recommander aux autres.", col: "D" },
    ]
  },
  {
    id: 9,
    text: "Pour maintenir un bon climat dans l'entreprise, il est nécessaire de :",
    items: [
      { id: "9A", text: "Tempérer et d'éviter de laisser les gens se poser trop de problèmes.", col: "A" },
      { id: "9B", text: "Veiller au respect des procédures afin d'éviter que chacun empiète sur les domaines des autres.", col: "B" },
      { id: "9C", text: "Mettre en confiance tout le monde et y consacrer du temps afin qu'ils se sentent décontractés et soutenus.", col: "C" },
      { id: "9D", text: "Entraîner les gens à exprimer les vrais problèmes qu'ils rencontrent et qui sont inévitables.", col: "D" },
    ]
  },
  {
    id: 10,
    text: "En tant que manager, je souhaite que mes collaborateur·rices :",
    items: [
      { id: "10A", text: "Soient satisfaits de me voir prendre toutes les responsabilités.", col: "A" },
      { id: "10B", text: "Apprécient d'être bien encadrés.", col: "B" },
      { id: "10C", text: "Me témoignent de la reconnaissance pour mon attitude d'ouverture.", col: "C" },
      { id: "10D", text: "Soient capables d'être les plus autonomes possible.", col: "D" },
    ]
  },
];

const profils = {
  A: {
    label: "Meneur",
    sub: "Centré sur ses propres convictions",
    color: "#ef4444",
    icon: "⚡",
    traits: ["Décide rapidement", "Fort en convictions", "Prend les responsabilités", "Exige l'exécution"],
    desc: "Votre style de leadership s'appuie sur la force de vos convictions personnelles. Vous prenez les rênes, décidez et assumez. Ce positionnement peut être un atout dans les crises, mais gagnera à s'ouvrir davantage à l'intelligence collective.",
    points: ["Clarté dans la décision", "Capacité à trancher", "Résistance à l'ambiguïté"],
    vigilances: ["Risque d'isolement décisionnel", "Peut brider l'initiative des équipes"],
  },
  B: {
    label: "Organisateur",
    sub: "Centré sur les méthodes",
    color: "#6366f1",
    icon: "⚙",
    traits: ["Rigoureux", "Procédurier", "Cadrant", "Méthodique"],
    desc: "Votre style de leadership repose sur la clarté des cadres et la maîtrise des méthodes. Vous sécurisez par les process. Ce profil assure la fiabilité et la cohérence, à condition de ne pas étouffer la créativité et l'adaptation.",
    points: ["Fiabilité des livrables", "Lisibilité des rôles", "Contrôle des risques"],
    vigilances: ["Peut être perçu comme rigide", "Moins à l'aise dans l'incertitude"],
  },
  C: {
    label: "Coopérateur",
    sub: "Centré sur les autres",
    color: "#10b981",
    icon: "◎",
    traits: ["Fédérateur", "À l'écoute", "Bienveillant", "Soucieux du collectif"],
    desc: "Votre style de leadership mise sur la qualité des relations et le bien-être de l'équipe. Vous créez du lien, facilitez l'expression, apaisez les tensions. Ce registre favorise l'engagement, sous réserve de ne pas reporter indéfiniment les décisions difficiles.",
    points: ["Cohésion d'équipe", "Climat de confiance", "Capacité à fédérer"],
    vigilances: ["Peut éviter les confrontations nécessaires", "Risque de décisions trop consensuelles"],
  },
  D: {
    label: "Compétiteur",
    sub: "Centré sur les résultats",
    color: "#f59e0b",
    icon: "▲",
    traits: ["Orienté résultats", "Délègue sur les compétences", "Exige l'autonomie", "Stimulant"],
    desc: "Votre style de leadership est tourné vers la performance et le développement des compétences. Vous fixez le cap, déléguez et challengez. Ce profil génère de l'autonomie et de la dynamique, à condition d'accompagner les moins aguerris.",
    points: ["Orientation résultats", "Développement des talents", "Dynamisme organisationnel"],
    vigilances: ["Peut négliger les dimensions relationnelles", "Exigence parfois mal calibrée selon les profils"],
  },
};

function RadarChart({ scores }) {
  const keys = ["A", "B", "C", "D"];
  const colors = keys.map(k => profils[k].color);
  const cx = 150, cy = 150, r = 105;
  const angles = keys.map((_, i) => (i / keys.length) * 2 * Math.PI - Math.PI / 2);
  const max = 100;

  const toXY = (angle, val) => ({
    x: cx + (val / max) * r * Math.cos(angle),
    y: cy + (val / max) * r * Math.sin(angle),
  });

  const normalized = keys.map(k => (scores[k] / 100) * 100);
  const polygon = angles.map((a, i) => toXY(a, normalized[i]));
  const polygonStr = polygon.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <svg width={300} height={300} viewBox="0 0 300 300">
      {[0.25, 0.5, 0.75, 1].map((f, i) => {
        const pts = angles.map(a => toXY(a, f * max));
        return <polygon key={i} points={pts.map(p => `${p.x},${p.y}`).join(" ")} fill="none" stroke="#1e293b" strokeWidth={1} />;
      })}
      {angles.map((a, i) => {
        const outer = toXY(a, max);
        return <line key={i} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="#334155" strokeWidth={1} strokeDasharray="3,3" />;
      })}
      <polygon points={polygonStr} fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth={2} />
      {polygon.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={6} fill={colors[i]} />
      ))}
      {angles.map((a, i) => {
        const outer = toXY(a, max * 1.25);
        return (
          <text key={i} x={outer.x} y={outer.y + 4} textAnchor="middle" fill={colors[i]} fontSize={10} fontWeight="700" fontFamily="'DM Mono', monospace">
            {profils[keys[i]].label}
          </text>
        );
      })}
    </svg>
  );
}

export default function LeadershipQuestionnaire() {
  const [current, setCurrent] = useState(0);
  const [allocations, setAllocations] = useState(
    Object.fromEntries(situations.map(s => [s.id, Object.fromEntries(s.items.map(it => [it.id, 0]))]))
  );
  const [submitted, setSubmitted] = useState(false);
  const [animating, setAnimating] = useState(false);

  const sitTotal = (sid) => Object.values(allocations[sid]).reduce((a, b) => a + b, 0);
  const remaining = (sid) => 10 - sitTotal(sid);

  const setVal = (sid, iid, val) => {
    const cur = allocations[sid];
    const others = Object.entries(cur).filter(([k]) => k !== iid).reduce((s, [, v]) => s + v, 0);
    const clamped = Math.max(0, Math.min(10 - others, val));
    setAllocations(prev => ({ ...prev, [sid]: { ...prev[sid], [iid]: clamped } }));
  };

  const allComplete = situations.every(s => sitTotal(s.id) === 10);

  const computeScores = () => {
    const totals = { A: 0, B: 0, C: 0, D: 0 };
    situations.forEach(s => {
      s.items.forEach(it => {
        totals[it.col] += allocations[s.id][it.id] || 0;
      });
    });
    return totals;
  };

  const scores = computeScores();
  const maxScore = Math.max(...Object.values(scores));
  const dominant = Object.entries(scores).filter(([, v]) => v === maxScore).map(([k]) => k);

  const situation = situations[current];

  const goNext = () => {
    if (current < situations.length - 1) {
      setAnimating(true);
      setTimeout(() => { setCurrent(c => c + 1); setAnimating(false); }, 260);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#090c14", color: "#e2e8f0", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e293b", padding: "20px 32px", background: "#0c1020", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#475569", marginBottom: 4 }}>QUESTIONNAIRE MANAGEMENT</div>
          <div style={{ fontSize: 20, fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>Votre style de leadership</div>
        </div>
        {!submitted && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#475569", letterSpacing: "0.1em", marginBottom: 4 }}>SITUATIONS</div>
            <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'DM Mono', monospace", color: "#6366f1" }}>
              {situations.filter(s => sitTotal(s.id) === 10).length}<span style={{ color: "#334155" }}>/{situations.length}</span>
            </div>
          </div>
        )}
      </div>

      {!submitted && (
        <div style={{ height: 3, background: "#1e293b" }}>
          <div style={{ height: "100%", width: `${(situations.filter(s => sitTotal(s.id) === 10).length / situations.length) * 100}%`, background: "linear-gradient(90deg, #6366f1, #10b981)", transition: "width 0.4s" }} />
        </div>
      )}

      <div style={{ flex: 1, padding: 32, maxWidth: 760, margin: "0 auto", width: "100%" }}>
        {!submitted ? (
          <>
            <div style={{ marginBottom: 16, padding: "10px 16px", background: "#0f1523", borderRadius: 8, border: "1px solid #1e293b", fontSize: 13, color: "#64748b" }}>
              Répartissez <strong style={{ color: "#6366f1" }}>10 points</strong> entre les 4 propositions de chaque situation selon vos pratiques réelles.
            </div>

            {/* Navigation situations */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
              {situations.map((s, i) => {
                const done = sitTotal(s.id) === 10;
                return (
                  <button key={s.id} onClick={() => setCurrent(i)} style={{
                    width: 36, height: 36, borderRadius: 8, border: "none", cursor: "pointer",
                    fontSize: 12, fontFamily: "'DM Mono', monospace", fontWeight: 700,
                    background: i === current ? "#6366f1" : done ? "#1a2235" : "#1e293b",
                    color: i === current ? "white" : done ? "#6366f1" : "#475569",
                  }}>{i + 1}</button>
                );
              })}
            </div>

            {/* Situation card */}
            <div style={{
              background: "#0c1020", border: "1px solid #1e293b", borderRadius: 16, padding: 28, marginBottom: 24,
              opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)", transition: "opacity 0.25s, transform 0.25s",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                <div>
                  <div style={{ fontSize: 10, color: "#475569", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", marginBottom: 8 }}>SITUATION {situation.id} / {situations.length}</div>
                  <p style={{ fontSize: 16, color: "#cbd5e1", fontWeight: 600, margin: 0 }}>{situation.text}</p>
                </div>
                <div style={{
                  fontSize: 13, fontFamily: "'DM Mono', monospace", fontWeight: 700, flexShrink: 0, marginLeft: 16,
                  color: sitTotal(situation.id) === 10 ? "#10b981" : "#6366f1",
                }}>
                  {sitTotal(situation.id)}/10
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {situation.items.map(item => {
                  const val = allocations[situation.id][item.id] || 0;
                  const profil = profils[item.col];
                  return (
                    <div key={item.id} style={{
                      display: "flex", gap: 14, alignItems: "center",
                      padding: "12px 14px", borderRadius: 10,
                      background: val > 0 ? `${profil.color}08` : "#111827",
                      border: val > 0 ? `1px solid ${profil.color}30` : "1px solid #1e293b",
                      transition: "all 0.2s",
                    }}>
                      <div style={{ flex: 1, fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
                        {item.text}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                        <button onClick={() => setVal(situation.id, item.id, val - 1)} disabled={val <= 0} style={{
                          width: 26, height: 26, borderRadius: 5, border: "1px solid #334155",
                          background: "transparent", color: val <= 0 ? "#1e293b" : "#64748b",
                          cursor: val <= 0 ? "default" : "pointer", fontSize: 16, lineHeight: 1,
                        }}>−</button>
                        <div style={{
                          width: 34, height: 34, borderRadius: 7,
                          background: val > 0 ? `${profil.color}18` : "#1a2235",
                          border: val > 0 ? `2px solid ${profil.color}` : "1px solid #1e293b",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 15, fontWeight: 800, fontFamily: "'DM Mono', monospace",
                          color: val > 0 ? profil.color : "#334155",
                        }}>{val}</div>
                        <button onClick={() => setVal(situation.id, item.id, val + 1)} disabled={remaining(situation.id) <= 0} style={{
                          width: 26, height: 26, borderRadius: 5, border: "1px solid #334155",
                          background: "transparent", color: remaining(situation.id) <= 0 ? "#1e293b" : "#64748b",
                          cursor: remaining(situation.id) <= 0 ? "default" : "pointer", fontSize: 16, lineHeight: 1,
                        }}>+</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 16, height: 4, background: "#1e293b", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${sitTotal(situation.id) * 10}%`, background: sitTotal(situation.id) === 10 ? "#10b981" : "#6366f1", borderRadius: 2, transition: "width 0.3s" }} />
              </div>
            </div>

            {/* Nav */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} style={{
                padding: "10px 20px", borderRadius: 8, border: "1px solid #1e293b",
                background: "transparent", color: current === 0 ? "#1e293b" : "#64748b",
                cursor: current === 0 ? "default" : "pointer", fontSize: 13,
              }}>← Précédent</button>

              {allComplete ? (
                <button onClick={() => setSubmitted(true)} style={{
                  padding: "12px 32px", borderRadius: 10,
                  background: "linear-gradient(135deg, #6366f1, #10b981)",
                  border: "none", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer",
                }}>Voir mes résultats →</button>
              ) : (
                <button onClick={goNext} disabled={current === situations.length - 1} style={{
                  padding: "10px 20px", borderRadius: 8, border: "1px solid #334155",
                  background: "transparent", color: "#94a3b8",
                  cursor: current === situations.length - 1 ? "default" : "pointer", fontSize: 13,
                }}>Suivant →</button>
              )}
            </div>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#475569", marginBottom: 8 }}>RÉSULTATS</div>
              <h2 style={{ fontSize: 24, fontFamily: "'Playfair Display', serif", fontWeight: 900, margin: "0 0 4px" }}>
                {dominant.map(k => profils[k].label).join(" + ")}
              </h2>
              <div style={{ fontSize: 13, color: "#475569" }}>{dominant.map(k => profils[k].sub).join(" · ")}</div>
            </div>

            {/* Radar */}
            <div style={{ background: "#0c1020", border: "1px solid #1e293b", borderRadius: 16, padding: 28, display: "flex", justifyContent: "center" }}>
              <RadarChart scores={scores} />
            </div>

            {/* Scores barres */}
            <div style={{ background: "#0c1020", border: "1px solid #1e293b", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              {Object.entries(profils).map(([key, p]) => (
                <div key={key}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: p.color, fontSize: 14 }}>{p.icon}</span>
                      <span style={{ fontSize: 13, color: "#94a3b8" }}>{p.label}</span>
                      <span style={{ fontSize: 11, color: "#334155" }}>— {p.sub}</span>
                    </div>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 700, fontSize: 14, color: p.color }}>{scores[key]}</span>
                  </div>
                  <div style={{ height: 6, background: "#1e293b", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${(scores[key] / 100) * 100}%`, background: p.color, borderRadius: 3, transition: "width 1s ease" }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Profil dominant détaillé */}
            {dominant.map(k => {
              const p = profils[k];
              return (
                <div key={k} style={{ background: "#0c1020", border: `1px solid ${p.color}40`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 22, color: p.color }}>{p.icon}</span>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc" }}>{p.label}</div>
                      <div style={{ fontSize: 11, color: "#475569" }}>{p.sub}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 10, color: "#10b981", letterSpacing: "0.1em", marginBottom: 8 }}>ATOUTS</div>
                      {p.points.map((pt, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                          <div style={{ width: 4, height: 4, borderRadius: 2, background: "#10b981", marginTop: 7, flexShrink: 0 }} />
                          <span style={{ fontSize: 12, color: "#64748b" }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: "#ef4444", letterSpacing: "0.1em", marginBottom: 8 }}>VIGILANCES</div>
                      {p.vigilances.map((v, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                          <div style={{ width: 4, height: 4, borderRadius: 2, background: "#ef4444", marginTop: 7, flexShrink: 0 }} />
                          <span style={{ fontSize: 12, color: "#64748b" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.traits.map(t => (
                      <span key={t} style={{ padding: "3px 10px", borderRadius: 4, background: `${p.color}15`, color: p.color, fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}

            <button onClick={() => { setSubmitted(false); setCurrent(0); setAllocations(Object.fromEntries(situations.map(s => [s.id, Object.fromEntries(s.items.map(it => [it.id, 0]))]))); }} style={{
              padding: "12px 24px", borderRadius: 10, border: "1px solid #334155",
              background: "transparent", color: "#64748b", cursor: "pointer", fontSize: 13,
            }}>↺ Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
}
