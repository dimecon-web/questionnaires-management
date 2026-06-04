import { useState } from "react";

const SF = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif";

const groupes = [
  { id: "A", items: [
    { id: 1, text: "Les meilleures solutions sont celles qui apportent une satisfaction partagée avec son interlocuteur.", dim: "C4" },
    { id: 2, text: "Pour bien se faire comprendre, mieux vaut utiliser le même langage que son interlocuteur.", dim: "C2" },
    { id: 3, text: "Un engagement réaliste tenu vaut mieux qu'une promesse illusoire.", dim: "C3" },
    { id: 4, text: "Il faut bien connaître un métier pour pouvoir en parler.", dim: "C1" },
  ]},
  { id: "B", items: [
    { id: 5, text: "L'expertise se mesure au degré de satisfaction du client sur la prestation fournie.", dim: "C4" },
    { id: 6, text: "C'est par ses actes qu'on reconnaît le niveau d'engagement de quelqu'un.", dim: "C3" },
    { id: 7, text: "Avant de rencontrer un interlocuteur, il est important de préparer des questions précises à lui poser.", dim: "C2" },
    { id: 8, text: "Pour fournir des prestations de qualité, il est nécessaire d'approfondir et d'actualiser ses connaissances.", dim: "C1" },
  ]},
  { id: "C", items: [
    { id: 9, text: "Ma devise : s'appliquer à soi-même le même niveau d'exigence que l'on attend des autres.", dim: "C3" },
    { id: 10, text: "Un client agressif a surtout besoin d'être rassuré.", dim: "C4" },
    { id: 11, text: "Mieux vaut utiliser les techniques éprouvées qu'improviser.", dim: "C1" },
    { id: 12, text: "La valeur de l'expertise professionnelle réside dans la capacité à pouvoir la mettre à la portée de son interlocuteur.", dim: "C2" },
  ]},
  { id: "D", items: [
    { id: 13, text: "Un discours bref et bien structuré a plus de chances d'être entendu.", dim: "C2" },
    { id: 14, text: "L'excellence d'un métier repose sur la maîtrise des process et des méthodes employés.", dim: "C1" },
    { id: 15, text: "Tout point de vue mérite respect et considération.", dim: "C4" },
    { id: 16, text: "Mieux vaut prévenir à temps son interlocuteur d'une difficulté et l'associer à la résolution.", dim: "C3" },
  ]},
  { id: "E", items: [
    { id: 17, text: "Ce qui est logique pour soi ne l'est pas forcément pour quelqu'un d'autre.", dim: "C2" },
    { id: 18, text: "Pour répondre à une demande, l'important est de bien évaluer sa disponibilité avant de s'engager.", dim: "C3" },
    { id: 19, text: "On ne sait pas toujours ce que son interlocuteur ressent, mais on peut dire soi-même ce que l'on perçoit et ce que l'on éprouve.", dim: "C4" },
    { id: 20, text: "Poser un diagnostic juste nécessite de chercher et de réunir toutes les informations et connaissances possibles.", dim: "C1" },
  ]},
  { id: "F", items: [
    { id: 21, text: "Être efficace, c'est considérer que l'erreur est possible, mais que la récidive ne l'est pas.", dim: "C3" },
    { id: 22, text: "Il faut savoir instaurer un climat d'attention chaleureuse pour développer des relations constructives.", dim: "C4" },
    { id: 23, text: "Se mettre à contribution et savoir aller au bout des choses sont deux conditions pour fournir un service de qualité.", dim: "C3" },
    { id: 24, text: "Il y a un ordre à respecter dans ses propos pour s'exprimer clairement.", dim: "C2" },
  ]},
  { id: "G", items: [
    { id: 25, text: "Ma devise : faire ce que je dis et dire ce que je fais.", dim: "C3" },
    { id: 26, text: "L'expérience, c'est ce qui fait douter de l'infaillibilité de l'expertise.", dim: "C1" },
    { id: 27, text: "Bien comprendre le problème du client, c'est s'abstenir de penser à sa place.", dim: "C4" },
    { id: 28, text: "Un point de vue doit être soigneusement argumenté pour s'imposer.", dim: "C2" },
  ]},
  { id: "H", items: [
    { id: 29, text: "Les explications les plus simples sont les plus claires.", dim: "C2" },
    { id: 30, text: "Mieux vaut informer à l'avance d'un changement que de mettre quelqu'un devant le fait accompli.", dim: "C4" },
    { id: 31, text: "La qualité des arguments l'emporte sur leur quantité quand il s'agit de persuader.", dim: "C1" },
    { id: 32, text: "Une prestation de service efficace prend en compte les aléas et les évolutions du contexte.", dim: "C3" },
  ]},
  { id: "I", items: [
    { id: 33, text: "On fait confiance à ceux qui tiennent parole.", dim: "C3" },
    { id: 34, text: "Mieux vaut vérifier une information dont on n'est pas sûr avant de la transmettre.", dim: "C1" },
    { id: 35, text: "Les préoccupations de mon client sont mes préoccupations.", dim: "C4" },
    { id: 36, text: "Présenter les avantages et les inconvénients d'une solution aide à la décision.", dim: "C2" },
  ]},
  { id: "J", items: [
    { id: 37, text: "C'est en étant clair et rigoureux sur ses méthodes qu'on peut s'adapter plus facilement aux demandes de ses interlocuteurs.", dim: "C3" },
    { id: 38, text: "Aller au-devant des attentes de son interlocuteur est une meilleure stratégie que d'attendre qu'il se manifeste.", dim: "C4" },
    { id: 39, text: "Ce qui est acté à l'oral gagne à être reformulé par écrit pour lever le risque d'interprétation et d'incompréhension.", dim: "C2" },
    { id: 40, text: "Ma devise : informer complètement en toute transparence et communiquer régulièrement en toute simplicité.", dim: "C1" },
  ]},
];

const dimensions = {
  C1: { label: "Crédibilité", color: "#ff6b00", keywords: ["Connaissances", "Expertise", "Maîtrise", "Exactitude"], desc: "Votre influence repose sur la solidité de vos savoirs et de votre expertise reconnue." },
  C2: { label: "Cohérence", color: "#0071e3", keywords: ["Rigueur", "Méthode", "Organisation", "Clarté"], desc: "Votre influence tient à la clarté et à la logique de vos messages." },
  C3: { label: "Consistance", color: "#34c759", keywords: ["Engagement", "Implication", "Exemplarité", "Action"], desc: "Votre influence passe par l'exemple. Vous faites ce que vous dites." },
  C4: { label: "Congruence", color: "#bf5af2", keywords: ["Empathie", "Écoute", "Authenticité", "Sincérité"], desc: "Votre influence repose sur la qualité de la relation et la sincérité." },
};

export default function SourcesInfluence() {
  const [currentGroupe, setCurrentGroupe] = useState(0);
  const [allocations, setAllocations] = useState(
    Object.fromEntries(groupes.map(g => [g.id, Object.fromEntries(g.items.map(it => [it.id, 0]))]))
  );
  const [submitted, setSubmitted] = useState(false);

  const groupe = groupes[currentGroupe];
  const groupeTotal = (gid) => Object.values(allocations[gid]).reduce((s, v) => s + v, 0);
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
    groupes.forEach(g => g.items.forEach(it => { totals[it.dim] += allocations[g.id][it.id] || 0; }));
    return totals;
  };

  const scores = computeScores();
  const maxScore = Math.max(...Object.values(scores));
  const minScore = Math.min(...Object.values(scores));
  const dominant = Object.entries(scores).filter(([, v]) => v === maxScore).map(([k]) => k);
  const weakest = Object.entries(scores).filter(([, v]) => v === minScore).map(([k]) => k);
  const completedCount = groupes.filter(g => groupeTotal(g.id) === 10).length;
  const progress = (completedCount / groupes.length) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f7", fontFamily: SF, padding: "80px 24px 48px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 4 }}>Couchaere · Groupe {currentGroupe + 1}/{groupes.length}</div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#1d1d1f", margin: "0 0 16px", letterSpacing: "-0.02em" }}>Sources de votre influence</h1>
          <div style={{ height: 4, background: "#e5e5ea", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#ff6b00", borderRadius: 2, transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)" }} />
          </div>
        </div>

        {!submitted ? (
          <>
            <div style={{ padding: "12px 16px", background: "white", borderRadius: 12, marginBottom: 20, fontSize: 13, color: "#6e6e73", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              Répartissez <strong style={{ color: "#1d1d1f" }}>10 points</strong> entre les 4 affirmations selon leur importance dans votre pratique.
            </div>

            {/* Groupe pills */}
            <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
              {groupes.map((g, i) => {
                const done = groupeTotal(g.id) === 10;
                return (
                  <button key={g.id} onClick={() => setCurrentGroupe(i)} style={{
                    width: 34, height: 34, borderRadius: 17, border: "none", cursor: "pointer",
                    fontSize: 12, fontWeight: 600,
                    background: i === currentGroupe ? "#ff6b00" : done ? "#34c75920" : "#e5e5ea",
                    color: i === currentGroupe ? "white" : done ? "#34c759" : "#6e6e73",
                  }}>{g.id}</button>
                );
              })}
            </div>

            {/* Groupe card */}
            <div style={{ background: "white", borderRadius: 20, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 13, color: "#6e6e73", fontWeight: 500 }}>Groupe {groupe.id}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: groupeTotal(groupe.id) === 10 ? "#34c759" : "#ff6b00" }}>
                  {groupeTotal(groupe.id)} / 10 points
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {groupe.items.map(item => {
                  const val = allocations[groupe.id][item.id] || 0;
                  return (
                    <div key={item.id} style={{
                      display: "flex", gap: 14, alignItems: "center",
                      padding: "14px 16px", borderRadius: 14,
                      background: val > 0 ? "#f5f5f7" : "#fafafa",
                      border: val > 0 ? "1.5px solid #e5e5ea" : "1.5px solid transparent",
                    }}>
                      <div style={{ flex: 1, fontSize: 16, color: "#1d1d1f", lineHeight: 1.6 }}>{item.text}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                        <button onClick={() => setVal(groupe.id, item.id, val - 1)} disabled={val <= 0} style={{
                          width: 28, height: 28, borderRadius: 14, border: "none",
                          background: val <= 0 ? "#f5f5f7" : "#e5e5ea",
                          color: val <= 0 ? "#c7c7cc" : "#1d1d1f",
                          cursor: val <= 0 ? "default" : "pointer", fontSize: 18, lineHeight: 1, fontWeight: 400,
                        }}>−</button>
                        <div style={{
                          width: 36, height: 36, borderRadius: 10,
                          background: val > 0 ? "#ff6b0015" : "#f5f5f7",
                          border: val > 0 ? "2px solid #ff6b00" : "1.5px solid #e5e5ea",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 16, fontWeight: 700, color: val > 0 ? "#ff6b00" : "#c7c7cc",
                        }}>{val}</div>
                        <button onClick={() => setVal(groupe.id, item.id, val + 1)} disabled={remaining(groupe.id) <= 0} style={{
                          width: 28, height: 28, borderRadius: 14, border: "none",
                          background: remaining(groupe.id) <= 0 ? "#f5f5f7" : "#e5e5ea",
                          color: remaining(groupe.id) <= 0 ? "#c7c7cc" : "#1d1d1f",
                          cursor: remaining(groupe.id) <= 0 ? "default" : "pointer", fontSize: 18, lineHeight: 1, fontWeight: 400,
                        }}>+</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 16, height: 4, background: "#f5f5f7", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${groupeTotal(groupe.id) * 10}%`, background: groupeTotal(groupe.id) === 10 ? "#34c759" : "#ff6b00", borderRadius: 2, transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)" }} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => setCurrentGroupe(c => Math.max(0, c - 1))} disabled={currentGroupe === 0} style={{
                padding: "10px 20px", borderRadius: 20, border: "none",
                background: currentGroupe === 0 ? "transparent" : "#e5e5ea",
                color: currentGroupe === 0 ? "#c7c7cc" : "#1d1d1f",
                cursor: currentGroupe === 0 ? "default" : "pointer", fontSize: 14, fontWeight: 500,
              }}>‹ Précédent</button>

              {allComplete ? (
                <button onClick={() => setSubmitted(true)} style={{
                  padding: "12px 28px", borderRadius: 20, border: "none",
                  background: "#ff6b00", color: "white", fontWeight: 600, fontSize: 15, cursor: "pointer",
                }}>Voir mes résultats</button>
              ) : (
                <button onClick={() => setCurrentGroupe(c => Math.min(groupes.length - 1, c + 1))} style={{
                  padding: "10px 20px", borderRadius: 20, border: "none",
                  background: "#e5e5ea", color: "#1d1d1f", cursor: "pointer", fontSize: 14, fontWeight: 500,
                }}>Suivant ›</button>
              )}
            </div>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 8 }}>Résultats</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1d1d1f", margin: "0 0 4px", letterSpacing: "-0.01em" }}>
                {dominant.map(k => dimensions[k].label).join(" · ")}
              </h2>
              <div style={{ fontSize: 13, color: "#6e6e73" }}>Registre(s) dominant(s)</div>
            </div>

            {/* Barres */}
            <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 16 }}>Scores</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {Object.entries(dimensions).map(([key, dim]) => (
                  <div key={key}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 14 }}>
                      <span style={{ color: "#1d1d1f", fontWeight: 500 }}>{dim.label}</span>
                      <span style={{ color: dim.color, fontWeight: 600 }}>{scores[key]}</span>
                    </div>
                    <div style={{ height: 6, background: "#f5f5f7", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(scores[key] / 100) * 100}%`, background: dim.color, borderRadius: 3, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Descriptions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {Object.entries(dimensions).map(([key, dim]) => (
                <div key={key} style={{
                  background: "white", borderRadius: 16, padding: 20,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  borderTop: `3px solid ${dim.color}`,
                  opacity: dominant.includes(key) ? 1 : 0.6,
                }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: dim.color, marginBottom: 6 }}>{dim.label}</div>
                  <div style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.6, marginBottom: 10 }}>{dim.desc}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {dim.keywords.map(kw => (
                      <span key={kw} style={{ padding: "2px 8px", borderRadius: 6, background: `${dim.color}15`, color: dim.color, fontSize: 10, fontWeight: 500 }}>{kw}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Équilibre */}
            <div style={{ background: "white", borderRadius: 20, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500, marginBottom: 12 }}>Analyse d'équilibre</div>
              {(() => {
                const vals = Object.values(scores);
                const ecart = Math.max(...vals) - Math.min(...vals);
                const equilibre = ecart < 5;
                return (
                  <div style={{ fontSize: 14, color: "#1d1d1f" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 4, background: equilibre ? "#34c759" : "#ff9500" }} />
                      <span>Registres {equilibre ? "équilibrés" : "déséquilibrés"} — écart : <strong style={{ color: equilibre ? "#34c759" : "#ff9500" }}>{ecart} pts</strong></span>
                    </div>
                    {weakest.length > 0 && (
                      <div style={{ fontSize: 13, color: "#6e6e73" }}>
                        À renforcer : {weakest.map(k => dimensions[k].label).join(", ")}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>

            <button onClick={() => { setSubmitted(false); setCurrentGroupe(0); setAllocations(Object.fromEntries(groupes.map(g => [g.id, Object.fromEntries(g.items.map(it => [it.id, 0]))]))); }} style={{
              padding: "12px 24px", borderRadius: 20, border: "1.5px solid #e5e5ea",
              background: "white", color: "#6e6e73", cursor: "pointer", fontSize: 14, fontWeight: 500,
            }}>Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
}
