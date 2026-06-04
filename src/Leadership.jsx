import { useState } from "react";

const SF = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif";

const situations = [
  { id: 1, text: "Pour moi, le manager doit :", items: [
    { id: "1A", text: "Déléguer le plus souvent possible pour dégager du temps et réfléchir à la politique et ses moyens.", col: "A" },
    { id: "1B", text: "D'abord s'imposer techniquement et connaître parfaitement les évolutions.", col: "B" },
    { id: "1C", text: "Connaître parfaitement tous les problèmes juridiques et législatifs liés à son rôle de responsable.", col: "C" },
    { id: "1D", text: "Savoir avant tout innover, stimuler les membres de l'équipe et entretenir de bonnes relations.", col: "D" },
  ]},
  { id: 2, text: "Un·e bon·ne collaborateur·rice doit :", items: [
    { id: "2A", text: "Être persévérant·e et ne pas créer de problème ni à moi ni aux autres.", col: "A" },
    { id: "2B", text: "Être organisé·e, ponctuel·le et s'en tenir aux consignes données face aux clients internes ou externes.", col: "B" },
    { id: "2C", text: "Porter de l'estime à ses responsables et respecter les règles de l'entreprise.", col: "C" },
    { id: "2D", text: "Savoir comprendre l'intérêt et l'objectif de son travail.", col: "D" },
  ]},
  { id: 3, text: "Un bon projet d'entreprise doit :", items: [
    { id: "3A", text: "Traduire avant tout ce que veut la Direction générale car c'est elle qui fixe les objectifs et les moyens.", col: "A" },
    { id: "3B", text: "Être clair, complet et définir ce que chacun doit faire ainsi que les procédures de contrôle.", col: "B" },
    { id: "3C", text: "Être élaboré après consultation des employés concernés suffisamment informés pour faire des suggestions.", col: "C" },
    { id: "3D", text: "Indiquer les objectifs à chacun des responsables et laisser l'initiative des moyens dans un cadre défini.", col: "D" },
  ]},
  { id: 4, text: "Face à un·e nouvel·le embauché·e, il faut avant tout :", items: [
    { id: "4A", text: "Lui décrire son travail en détail, lui préciser ce que l'on attend de lui·elle et à qui s'adresser en cas de problème.", col: "A" },
    { id: "4B", text: "Lui faire part des règles en usage afin qu'il·elle sache bien comment se comporter dans l'entreprise.", col: "B" },
    { id: "4C", text: "S'efforcer de l'intégrer aux équipes en la présentant aux équipes et en l'accompagnant les premiers mois.", col: "C" },
    { id: "4D", text: "Lui exposer les objectifs de l'entreprise et lui montrer l'évolution depuis quelques années et les prévisions.", col: "D" },
  ]},
  { id: 5, text: "Quand il y a une décision à prendre :", items: [
    { id: "5A", text: "En général, je préfère prendre seul·e les décisions et je veille à ce qu'elle soit parfaitement exécutée.", col: "A" },
    { id: "5B", text: "J'en parle d'abord à des personnes compétentes ou au-dessus de moi.", col: "B" },
    { id: "5C", text: "Je fais une réunion avec les intéressés et je cherche à obtenir les avis en vue de trouver une solution de compromis.", col: "C" },
    { id: "5D", text: "Je délègue des pouvoirs aux intéressés les plus compétents et les pousse à s'engager personnellement.", col: "D" },
  ]},
  { id: 6, text: "Quand deux collaborateur·rices ne s'entendent pas :", items: [
    { id: "6A", text: "J'interviens avec autorité pour stopper le conflit et remettre les pendules à l'heure.", col: "A" },
    { id: "6B", text: "Je les convoque pour leur rappeler leurs engagements, leurs objectifs et les bonnes règles.", col: "B" },
    { id: "6C", text: "Je tente d'apaiser les choses pour sauvegarder l'esprit d'équipe.", col: "C" },
    { id: "6D", text: "Je profite de l'occasion pour analyser les raisons de ce qui ne va pas et voir ensemble les solutions possibles.", col: "D" },
  ]},
  { id: 7, text: "Pour un·e manager, être responsable c'est :", items: [
    { id: "7A", text: "Agir avec détermination en sachant se faire approuver avec un minimum de discussion.", col: "A" },
    { id: "7B", text: "Transmettre et faire appliquer ce qui est décidé conformément à ce qui a été défini à l'embauche.", col: "B" },
    { id: "7C", text: "Faire en sorte que tout le monde puisse s'exprimer et veiller à ce que les gens soient contents de travailler ensemble.", col: "C" },
    { id: "7D", text: "Distribuer le travail correctement en fonction des compétences et responsabiliser tout le monde sur les objectifs.", col: "D" },
  ]},
  { id: 8, text: "Si un·e collaborateur·rice prend une initiative imprévue :", items: [
    { id: "8A", text: "Je lui signale qu'il·elle n'a pas à prendre d'initiative seul·e et je lui rappelle son rôle.", col: "A" },
    { id: "8B", text: "Je lui fais comprendre qu'une entreprise serait impossible à diriger si chacun prenait des initiatives imprévues.", col: "B" },
    { id: "8C", text: "Je le·a laisse aller plus loin si cela ne gène pas les autres autour.", col: "C" },
    { id: "8D", text: "Je l'étudie et si elle est positive, je l'encourage à la recommander aux autres.", col: "D" },
  ]},
  { id: 9, text: "Pour maintenir un bon climat dans l'entreprise, il est nécessaire de :", items: [
    { id: "9A", text: "Tempérer et éviter de laisser les gens se poser trop de problèmes.", col: "A" },
    { id: "9B", text: "Veiller au respect des procédures afin d'éviter que chacun empiète sur les domaines des autres.", col: "B" },
    { id: "9C", text: "Mettre en confiance tout le monde afin qu'ils se sentent décontractés et soutenus.", col: "C" },
    { id: "9D", text: "Entraîner les gens à exprimer les vrais problèmes qu'ils rencontrent.", col: "D" },
  ]},
  { id: 10, text: "En tant que manager, je souhaite que mes collaborateur·rices :", items: [
    { id: "10A", text: "Soient satisfaits de me voir prendre toutes les responsabilités.", col: "A" },
    { id: "10B", text: "Apprécient d'être bien encadrés.", col: "B" },
    { id: "10C", text: "Me témoignent de la reconnaissance pour mon attitude d'ouverture.", col: "C" },
    { id: "10D", text: "Soient capables d'être les plus autonomes possible.", col: "D" },
  ]},
];

const profils = {
  A: { label: "Meneur", sub: "Centré sur ses propres convictions", color: "#ff3b30", traits: ["Décide rapidement", "Fort en convictions", "Assume les responsabilités"], desc: "Votre style repose sur la force de vos convictions. Vous prenez les rênes, décidez et assumez. Ce positionnement est un atout dans les crises, mais gagnera à s'ouvrir davantage à l'intelligence collective.", points: ["Clarté dans la décision", "Capacité à trancher", "Résistance à l'ambiguïté"], vigilances: ["Risque d'isolement décisionnel", "Peut brider l'initiative des équipes"] },
  B: { label: "Organisateur", sub: "Centré sur les méthodes", color: "#0071e3", traits: ["Rigoureux", "Méthodique", "Cadrant"], desc: "Votre style repose sur la clarté des cadres et la maîtrise des méthodes. Vous sécurisez par les process. Ce profil assure la fiabilité, à condition de ne pas étouffer la créativité.", points: ["Fiabilité des livrables", "Lisibilité des rôles", "Contrôle des risques"], vigilances: ["Peut être perçu comme rigide", "Moins à l'aise dans l'incertitude"] },
  C: { label: "Coopérateur", sub: "Centré sur les autres", color: "#34c759", traits: ["Fédérateur", "À l'écoute", "Bienveillant"], desc: "Votre style mise sur la qualité des relations et le bien-être de l'équipe. Vous créez du lien et apaisez les tensions. Ce registre favorise l'engagement, sous réserve de ne pas reporter les décisions difficiles.", points: ["Cohésion d'équipe", "Climat de confiance", "Capacité à fédérer"], vigilances: ["Peut éviter les confrontations nécessaires", "Risque de décisions trop consensuelles"] },
  D: { label: "Compétiteur", sub: "Centré sur les résultats", color: "#ff9500", traits: ["Orienté résultats", "Délègue", "Stimulant"], desc: "Votre style est tourné vers la performance et le développement des compétences. Vous fixez le cap et challengez. Ce profil génère de l'autonomie, à condition d'accompagner les moins aguerris.", points: ["Orientation résultats", "Développement des talents", "Dynamisme"], vigilances: ["Peut négliger les dimensions relationnelles", "Exigence parfois mal calibrée"] },
};

export default function Leadership() {
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
    setAllocations(prev => ({ ...prev, [sid]: { ...prev[sid], [iid]: Math.max(0, Math.min(10 - others, val)) } }));
  };

  const allComplete = situations.every(s => sitTotal(s.id) === 10);

  const computeScores = () => {
    const totals = { A: 0, B: 0, C: 0, D: 0 };
    situations.forEach(s => s.items.forEach(it => { totals[it.col] += allocations[s.id][it.id] || 0; }));
    return totals;
  };

  const scores = computeScores();
  const maxScore = Math.max(...Object.values(scores));
  const dominant = Object.entries(scores).filter(([, v]) => v === maxScore).map(([k]) => k);
  const completedCount = situations.filter(s => sitTotal(s.id) === 10).length;
  const progress = (completedCount / situations.length) * 100;
  const situation = situations[current];

  const goNext = () => {
    if (current < situations.length - 1) {
      setAnimating(true);
      setTimeout(() => { setCurrent(c => c + 1); setAnimating(false); }, 240);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f7", fontFamily: SF, padding: "80px 24px 48px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 4 }}>Couchaere · Situation {current + 1}/{situations.length}</div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1d1d1f", margin: "0 0 16px", letterSpacing: "-0.02em" }}>Style de leadership</h1>
          <div style={{ height: 4, background: "#e5e5ea", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#34c759", borderRadius: 2, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {!submitted ? (
          <>
            <div style={{ padding: "12px 16px", background: "white", borderRadius: 12, marginBottom: 20, fontSize: 13, color: "#6e6e73", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              Répartissez <strong style={{ color: "#1d1d1f" }}>10 points</strong> entre les 4 propositions selon vos pratiques réelles.
            </div>

            {/* Pills */}
            <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
              {situations.map((s, i) => {
                const done = sitTotal(s.id) === 10;
                return (
                  <button key={s.id} onClick={() => setCurrent(i)} style={{
                    width: 34, height: 34, borderRadius: 17, border: "none", cursor: "pointer",
                    fontSize: 12, fontWeight: 600,
                    background: i === current ? "#34c759" : done ? "#34c75920" : "#e5e5ea",
                    color: i === current ? "white" : done ? "#34c759" : "#6e6e73",
                  }}>{i + 1}</button>
                );
              })}
            </div>

            {/* Situation card */}
            <div style={{
              background: "white", borderRadius: 20, padding: 24,
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 20,
              opacity: animating ? 0 : 1, transform: animating ? "translateY(6px)" : "none",
              transition: "opacity 0.22s, transform 0.22s",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#1d1d1f", margin: 0 }}>{situation.text}</p>
                <div style={{ fontSize: 13, fontWeight: 600, color: sitTotal(situation.id) === 10 ? "#34c759" : "#ff9500", flexShrink: 0, marginLeft: 12 }}>
                  {sitTotal(situation.id)}/10
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {situation.items.map(item => {
                  const val = allocations[situation.id][item.id] || 0;
                  const p = profils[item.col];
                  return (
                    <div key={item.id} style={{
                      display: "flex", gap: 12, alignItems: "center",
                      padding: "12px 14px", borderRadius: 14,
                      background: val > 0 ? `${p.color}08` : "#fafafa",
                      border: val > 0 ? `1.5px solid ${p.color}30` : "1.5px solid transparent",
                      transition: "all 0.15s",
                    }}>
                      <div style={{ flex: 1, fontSize: 13, color: "#1d1d1f", lineHeight: 1.5 }}>{item.text}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                        <button onClick={() => setVal(situation.id, item.id, val - 1)} disabled={val <= 0} style={{
                          width: 28, height: 28, borderRadius: 14, border: "none",
                          background: val <= 0 ? "#f5f5f7" : "#e5e5ea",
                          color: val <= 0 ? "#c7c7cc" : "#1d1d1f",
                          cursor: val <= 0 ? "default" : "pointer", fontSize: 18, lineHeight: 1,
                        }}>−</button>
                        <div style={{
                          width: 34, height: 34, borderRadius: 10,
                          background: val > 0 ? `${p.color}15` : "#f5f5f7",
                          border: val > 0 ? `2px solid ${p.color}` : "1.5px solid #e5e5ea",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 15, fontWeight: 700, color: val > 0 ? p.color : "#c7c7cc",
                        }}>{val}</div>
                        <button onClick={() => setVal(situation.id, item.id, val + 1)} disabled={remaining(situation.id) <= 0} style={{
                          width: 28, height: 28, borderRadius: 14, border: "none",
                          background: remaining(situation.id) <= 0 ? "#f5f5f7" : "#e5e5ea",
                          color: remaining(situation.id) <= 0 ? "#c7c7cc" : "#1d1d1f",
                          cursor: remaining(situation.id) <= 0 ? "default" : "pointer", fontSize: 18, lineHeight: 1,
                        }}>+</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 14, height: 4, background: "#f5f5f7", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${sitTotal(situation.id) * 10}%`, background: sitTotal(situation.id) === 10 ? "#34c759" : "#ff9500", borderRadius: 2, transition: "width 0.3s" }} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} style={{
                padding: "10px 20px", borderRadius: 20, border: "none",
                background: current === 0 ? "transparent" : "#e5e5ea",
                color: current === 0 ? "#c7c7cc" : "#1d1d1f",
                cursor: current === 0 ? "default" : "pointer", fontSize: 14, fontWeight: 500,
              }}>‹ Précédent</button>

              {allComplete ? (
                <button onClick={() => setSubmitted(true)} style={{
                  padding: "12px 28px", borderRadius: 20, border: "none",
                  background: "#34c759", color: "white", fontWeight: 600, fontSize: 15, cursor: "pointer",
                }}>Voir mes résultats</button>
              ) : (
                <button onClick={goNext} style={{
                  padding: "10px 20px", borderRadius: 20, border: "none",
                  background: "#e5e5ea", color: "#1d1d1f", cursor: "pointer", fontSize: 14, fontWeight: 500,
                }}>Suivant ›</button>
              )}
            </div>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 8 }}>Résultat</div>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#1d1d1f", margin: "0 0 4px", letterSpacing: "-0.01em" }}>
                {dominant.map(k => profils[k].label).join(" + ")}
              </h2>
              <div style={{ fontSize: 13, color: "#6e6e73" }}>{dominant.map(k => profils[k].sub).join(" · ")}</div>
            </div>

            {/* Scores */}
            <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 16 }}>Scores</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {Object.entries(profils).map(([key, p]) => (
                  <div key={key}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 14 }}>
                      <span style={{ color: "#1d1d1f", fontWeight: 500 }}>{p.label} <span style={{ color: "#6e6e73", fontWeight: 400, fontSize: 12 }}>— {p.sub}</span></span>
                      <span style={{ color: p.color, fontWeight: 600 }}>{scores[key]}</span>
                    </div>
                    <div style={{ height: 6, background: "#f5f5f7", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(scores[key] / 100) * 100}%`, background: p.color, borderRadius: 3, transition: "width 1s ease" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profil dominant */}
            {dominant.map(k => {
              const p = profils[k];
              return (
                <div key={k} style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderTop: `4px solid ${p.color}` }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 4 }}>{p.label}</div>
                  <div style={{ fontSize: 12, color: "#6e6e73", marginBottom: 12 }}>{p.sub}</div>
                  <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#34c759", marginBottom: 8, letterSpacing: "0.05em" }}>ATOUTS</div>
                      {p.points.map((pt, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                          <div style={{ width: 5, height: 5, borderRadius: 3, background: "#34c759", marginTop: 6, flexShrink: 0 }} />
                          <span style={{ fontSize: 13, color: "#6e6e73" }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#ff3b30", marginBottom: 8, letterSpacing: "0.05em" }}>VIGILANCES</div>
                      {p.vigilances.map((v, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                          <div style={{ width: 5, height: 5, borderRadius: 3, background: "#ff3b30", marginTop: 6, flexShrink: 0 }} />
                          <span style={{ fontSize: 13, color: "#6e6e73" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.traits.map(t => (
                      <span key={t} style={{ padding: "3px 10px", borderRadius: 8, background: `${p.color}15`, color: p.color, fontSize: 11, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}

            <button onClick={() => { setSubmitted(false); setCurrent(0); setAllocations(Object.fromEntries(situations.map(s => [s.id, Object.fromEntries(s.items.map(it => [it.id, 0]))]))); }} style={{
              padding: "12px 24px", borderRadius: 20, border: "1.5px solid #e5e5ea",
              background: "white", color: "#6e6e73", cursor: "pointer", fontSize: 14, fontWeight: 500,
            }}>Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
}
