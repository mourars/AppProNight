import { useState } from "react";

const SCREENS = ["feed", "map", "story", "venue", "profile"];

const venues = [
  {
    id: 1,
    name: "Whiskeria do 2G",
    type: "Bar & Música Ao Vivo",
    city: "Porto",
    distance: "0.3 km",
    heat: 98,
    tag: "🔥 Em Alta",
    tagColor: "#FF4D4D",
    stories: 24,
    image: "/whiskeriado2g.jpg",
    color: "#1a0a2e",
    accent: "#c084fc",
    emoji: "🎸",
  },
  {
    id: 2,
    name: "Rios Sport Mix",
    type: "Club & DJ Sets",
    city: "Porto",
    distance: "0.7 km",
    heat: 91,
    tag: "⚡ Lotado",
    tagColor: "#FACC15",
    stories: 17,
    image: "/meubar.jpg",
    color: "#0a1a2e",
    accent: "#38bdf8",
    emoji: "RS",
  },
  {
    id: 3,
    name: "Cervejaria Gazela",
    type: "Restaurante",
    city: "Porto",
    distance: "1.1 km",
    heat: 76,
    tag: "🍺 Popular",
    tagColor: "#4ADE80",
    stories: 9,
    image: "/cervejaria.jpg",
    color: "#1a1a0a",
    accent: "#fbbf24",
    emoji: "🍺",
  },
  {
    id: 4,
    name: "Pérola do Bolhão",
    type: "Bar Vintage",
    distance: "1.4 km",
    heat: 83,
    tag: "✨ Destaque",
    tagColor: "#A78BFA",
    stories: 13,
    image: "/A.jpg",
    color: "#1a0a0a",
    accent: "#fb7185",
    emoji: "🍷",
  },
  {
    id: 5,
    name: "Parada22",
    type: "Drinkeria",
    distance: "4.4 km",
    heat: 77,
    tag: "✨ Destaque",
    tagColor: "#23067b",
    stories: 13,
    image: "/b.avif",
    color: "#091ade",
    accent: "#e60be2",
    emoji: "🍷",
  },
    {
    id: 6,
    name: "Chororo Bar",
    type: "Bar",
    distance: "1km",
    heat: 97,
    tag: "✨ Destaque",
    tagColor: "#23067b",
    stories: 13,
    image: "/c.avif",
    color: "#091ade",
    accent: "#e60be2",
    emoji: "🍷",
  },
];

const stories = [
  { id: 1, user: "2G", venue: "Plano B", color: "#7c3aed", emoji: "🎸", time: "2m" },
  { id: 2, user: "Rios Sport Mix", venue: "Base", color: "#0ea5e9", emoji: "🎧", time: "8m" },
  { id: 3, user: "Cervejaria", venue: "Gazela", color: "#d97706", emoji: "🍺", time: "15m" },
  { id: 4, user: "Torilex", venue: "Pérola", color: "#db2777", emoji: "🍷", time: "23m" },
  { id: 5, user: "RioMix", venue: "Plano B", color: "#059669", emoji: "🎵", time: "31m" },
];

const HeatBar = ({ value }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
    <div style={{
      flex: 1, height: 4, borderRadius: 2,
      background: "rgba(255,255,255,0.1)",
      overflow: "hidden"
    }}>
      <div style={{
        width: `${value}%`, height: "100%", borderRadius: 2,
        background: value > 90
          ? "linear-gradient(90deg, #ff4d4d, #ff9d00)"
          : value > 75
          ? "linear-gradient(90deg, #facc15, #4ade80)"
          : "linear-gradient(90deg, #4ade80, #38bdf8)",
        transition: "width 1s ease"
      }} />
    </div>
    <span style={{ fontSize: 11, color: "#aaa", fontFamily: "monospace" }}>{value}%</span>
  </div>
);

const StatusBar = () => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "10px 20px 4px", fontSize: 12, fontWeight: 600,
    color: "#fff", letterSpacing: 0.3
  }}>
    <span>23:14</span>
    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
      <span>●●●</span>
      <span>WiFi</span>
      <span>🔋</span>
    </div>
  </div>
);

const BottomNav = ({ active, setScreen }) => {
  const tabs = [
    { id: "feed", icon: "⚡", label: "Feed" },
    { id: "map", icon: "📍", label: "Mapa" },
    { id: "story", icon: "◉", label: "", isCenter: true },
    { id: "search", icon: "🔍", label: "Buscar" },
    { id: "profile", icon: "👤", label: "Perfil" },
  ];
  return (
    <div style={{
      display: "flex", justifyContent: "space-around", alignItems: "center",
      padding: "10px 8px 20px",
      background: "rgba(10,10,14,0.97)",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      backdropFilter: "blur(20px)"
    }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => tab.id !== "search" && setScreen(tab.id)}
          style={{
            background: tab.isCenter
              ? "linear-gradient(135deg, #c084fc, #fb7185)"
              : "none",
            border: "none",
            borderRadius: tab.isCenter ? "50%" : 0,
            width: tab.isCenter ? 52 : "auto",
            height: tab.isCenter ? 52 : "auto",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 2, cursor: "pointer",
            padding: tab.isCenter ? 0 : "4px 12px",
            boxShadow: tab.isCenter ? "0 0 20px rgba(192,132,252,0.5)" : "none",
            transform: tab.isCenter ? "translateY(-8px)" : "none",
          }}>
          <span style={{ fontSize: tab.isCenter ? 22 : 20 }}>{tab.icon}</span>
          {!tab.isCenter && (
            <span style={{
              fontSize: 10, color: active === tab.id ? "#c084fc" : "#555",
              fontWeight: active === tab.id ? 700 : 400,
              letterSpacing: 0.5
            }}>{tab.label}</span>
          )}
        </button>
      ))}
    </div>
  );
};

const FeedScreen = ({ setScreen, setSelectedVenue }) => (
  <div style={{ flex: 1, overflowY: "auto", paddingBottom: 8 }}>
    {/* Header */}
    <div style={{
      padding: "12px 20px 8px",
      display: "flex", justifyContent: "space-between", alignItems: "center"
    }}>
      <div>
        <div style={{ fontSize: 11, color: "#888", letterSpacing: 2, textTransform: "uppercase" }}>
          Porto · Agora
        </div>
        <div style={{
          fontSize: 24, fontWeight: 800, letterSpacing: -1,
          background: "linear-gradient(135deg, #c084fc, #fb7185)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>TôRilex</div>
      </div>
      <div style={{
        width: 38, height: 38, borderRadius: "50%",
        background: "linear-gradient(135deg, #7c3aed, #db2777)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 18, cursor: "pointer"
      }}>🔔</div>
    </div>

    {/* Stories Row */}
    <div style={{ padding: "8px 0 12px" }}>
      <div style={{ paddingLeft: 20, marginBottom: 8, fontSize: 11, color: "#666", letterSpacing: 1.5, textTransform: "uppercase" }}>
        Agora nos bares
      </div>
      <div style={{ display: "flex", gap: 12, paddingLeft: 16, overflowX: "auto", paddingRight: 16 }}>
        {/* Add story */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
          <div style={{
            width: 60, height: 60, borderRadius: "50%",
            border: "2px dashed rgba(192,132,252,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 24, cursor: "pointer", background: "rgba(192,132,252,0.08)"
          }}>+</div>
          <span style={{ fontSize: 10, color: "#666" }}>Partilhar</span>
        </div>
        {stories.map(s => (
          <div key={s.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
            <div style={{
              width: 60, height: 60, borderRadius: "50%",
              background: `linear-gradient(135deg, ${s.color}, ${s.color}aa)`,
              border: "2.5px solid",
              borderColor: s.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24, cursor: "pointer",
              boxShadow: `0 0 12px ${s.color}66`
            }}>{s.emoji}</div>
            <span style={{ fontSize: 10, color: "#888", maxWidth: 60, textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {s.user}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Trending label */}
    <div style={{ padding: "0 20px 10px", display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 11, color: "#666", letterSpacing: 1.5, textTransform: "uppercase" }}>Em alta esta noite</span>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
    </div>

    {/* Venue Cards */}
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 16px" }}>
      {venues.map((v, i) => (
        <div
          key={v.id}
          onClick={() => { setSelectedVenue(v); setScreen("venue"); }}
          style={{
            borderRadius: 20,
            background: `linear-gradient(135deg, ${v.color} 0%, #0d0d12 100%)`,
            border: `1px solid ${v.accent}22`,
            padding: 16,
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            boxShadow: i === 0 ? `0 8px 32px ${v.accent}33` : "none"
          }}>
          {/* Glow bg */}
          <div style={{
            position: "absolute", top: -20, right: -20,
            width: 100, height: 100, borderRadius: "50%",
            background: v.accent, opacity: 0.08, filter: "blur(30px)"
          }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: `${v.accent}22`,
                border: `1px solid ${v.accent}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, overflow: "hidden"
            }}>
             {v.image
             ? <img src={v.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : v.emoji
           }
            </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", letterSpacing: -0.3 }}>{v.name}</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 1 }}>{v.type}</div>
              </div>
            </div>
            <div style={{
              background: `${v.tagColor}22`,
              border: `1px solid ${v.tagColor}55`,
              borderRadius: 20, padding: "4px 10px",
              fontSize: 11, color: v.tagColor, fontWeight: 600, whiteSpace: "nowrap"
            }}>{v.tag}</div>
          </div>

          <HeatBar value={v.heat} />

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 16 }}>
              <span style={{ fontSize: 12, color: "#666" }}>📍 {v.distance}</span>
              <span style={{ fontSize: 12, color: "#666" }}>📸 {v.stories} stories</span>
            </div>
            <div style={{
              background: `${v.accent}22`,
              border: `1px solid ${v.accent}55`,
              borderRadius: 12, padding: "5px 14px",
              fontSize: 12, color: v.accent, fontWeight: 600
            }}>Ver →</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MapScreen = () => {
  const dots = [
    { top: "35%", left: "45%", v: venues[0] },
    { top: "55%", left: "60%", v: venues[1] },
    { top: "45%", left: "30%", v: venues[2] },
    { top: "65%", left: "42%", v: venues[3] },
  ];
  return (
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
      {/* Fake map */}
      <div style={{
        position: "absolute", inset: 0,
        background: "#0d0d14",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px"
      }}>
        {/* Streets */}
        {[20, 45, 70].map(p => (
          <div key={p} style={{
            position: "absolute", top: `${p}%`, left: 0, right: 0,
            height: 1, background: "rgba(255,255,255,0.06)"
          }} />
        ))}
        {[25, 50, 75].map(p => (
          <div key={p} style={{
            position: "absolute", left: `${p}%`, top: 0, bottom: 0,
            width: 1, background: "rgba(255,255,255,0.06)"
          }} />
        ))}

        {/* Venue pins */}
        {dots.map((d, i) => (
  <div key={i} style={{
    position: "absolute", top: d.top, left: d.left,
    transform: "translate(-50%, -50%)",
    display: "flex", flexDirection: "column", alignItems: "center"
  }}>
    <div style={{
      width: 44, height: 44, borderRadius: "50%",
      background: `linear-gradient(135deg, ${d.v.accent}, ${d.v.accent}88)`,
      border: "2px solid rgba(255,255,255,0.2)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 20, cursor: "pointer",
      boxShadow: `0 0 20px ${d.v.accent}66`,
      overflow: "hidden"
    }}>
      {d.v.image
        ? <img src={d.v.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        : d.v.emoji
      }
    </div>
    <div style={{
      marginTop: 4, background: "rgba(13,13,20,0.9)",
      border: `1px solid ${d.v.accent}44`,
      borderRadius: 8, padding: "2px 8px",
      fontSize: 10, color: "#fff", whiteSpace: "nowrap", fontWeight: 600
    }}>{d.v.name}</div>
  </div>
))}

        {/* User location */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
          <div style={{
            width: 16, height: 16, borderRadius: "50%",
            background: "#c084fc",
            border: "3px solid rgba(192,132,252,0.3)",
            boxShadow: "0 0 0 8px rgba(192,132,252,0.15)"
          }} />
        </div>
      </div>

      {/* Top header */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        padding: "12px 16px",
        background: "linear-gradient(180deg, rgba(10,10,14,0.95) 0%, transparent 100%)"
      }}>
        <div style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 14, padding: "10px 16px",
          display: "flex", alignItems: "center", gap: 8,
          backdropFilter: "blur(20px)"
        }}>
          <span style={{ fontSize: 16 }}>🔍</span>
          <span style={{ color: "#555", fontSize: 14 }}>Buscar perto de mim...</span>
        </div>
      </div>

      {/* Bottom card */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: 16,
        background: "linear-gradient(0deg, rgba(10,10,14,1) 60%, transparent 100%)"
      }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12, overflowX: "auto" }}>
          {["Tudo", "Bares", "Clubs", "Restaurantes"].map(f => (
            <div key={f} style={{
              background: f === "Tudo" ? "linear-gradient(135deg, #c084fc, #fb7185)" : "rgba(255,255,255,0.07)",
              border: f === "Tudo" ? "none" : "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 12, color: "#fff", whiteSpace: "nowrap",
              fontWeight: f === "Tudo" ? 700 : 400, cursor: "pointer", flexShrink: 0
            }}>{f}</div>
          ))}
        </div>
        <div style={{
          background: "rgba(20,20,28,0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18, padding: 14,
          backdropFilter: "blur(20px)"
        }}>
          <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>📍 4 locais encontrados perto de ti</div>
          <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
            {venues.map(v => (
              <div key={v.id} style={{
                flexShrink: 0, background: `${v.accent}11`,
                border: `1px solid ${v.accent}33`,
                borderRadius: 12, padding: "8px 12px",
                display: "flex", alignItems: "center", gap: 8
              }}>
                <span style={{ fontSize: 18 }}>{v.emoji}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{v.name}</div>
                  <div style={{ fontSize: 10, color: "#666" }}>{v.distance}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StoryScreen = ({ setScreen }) => {
  const [progress, setProgress] = useState(60);
  const [storyIdx, setStoryIdx] = useState(0);
  const current = stories[storyIdx];

  return (
    <div style={{
      flex: 1, position: "relative",
      background: `linear-gradient(160deg, ${current.color}cc, #060608)`,
      display: "flex", flexDirection: "column"
    }}>
      {/* Progress bars */}
      <div style={{ display: "flex", gap: 4, padding: "8px 12px 0" }}>
        {stories.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 2.5, borderRadius: 2,
            background: "rgba(255,255,255,0.2)", overflow: "hidden"
          }}>
            <div style={{
              height: "100%",
              width: i < storyIdx ? "100%" : i === storyIdx ? `${progress}%` : "0%",
              background: "#fff", borderRadius: 2,
              transition: "width 0.1s linear"
            }} />
          </div>
        ))}
      </div>

      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: `linear-gradient(135deg, ${current.color}, ${current.color}88)`,
            border: "2px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18
          }}>{current.emoji}</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{current.venue}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>por @{current.user} · {current.time} atrás</div>
          </div>
        </div>
        <button onClick={() => setScreen("feed")} style={{
          background: "rgba(255,255,255,0.1)", border: "none",
          borderRadius: "50%", width: 32, height: 32,
          color: "#fff", fontSize: 16, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>✕</button>
      </div>

      {/* Story content */}
      <div style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: 16, padding: 24,
        position: "relative"
      }}>
        <div style={{ fontSize: 80 }}>{current.emoji}</div>
        <div style={{
          background: "rgba(0,0,0,0.5)", borderRadius: 16, padding: "16px 20px",
          backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center"
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{current.venue}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Está animadíssimo agora! 🔥</div>
        </div>

        {/* Tap areas */}
        <div style={{ position: "absolute", inset: 0, display: "flex" }}>
          <div style={{ flex: 1 }} onClick={() => setStoryIdx(Math.max(0, storyIdx - 1))} />
          <div style={{ flex: 1 }} onClick={() => setStoryIdx(Math.min(stories.length - 1, storyIdx + 1))} />
        </div>
      </div>

      {/* Bottom reply */}
      <div style={{ padding: "12px 16px 24px", display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{
          flex: 1, background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 24, padding: "10px 16px",
          fontSize: 14, color: "rgba(255,255,255,0.4)"
        }}>Enviar mensagem...</div>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: "linear-gradient(135deg, #c084fc, #fb7185)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20
        }}>❤️</div>
      </div>
    </div>
  );
};

const VenueScreen = ({ venue, setScreen }) => {
  const v = venue || venues[0];
  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      {/* Hero */}
      <div style={{
        height: 240, position: "relative",
        background: `linear-gradient(160deg, ${v.color}, #060608)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: 12
      }}>
        <button onClick={() => setScreen("feed")} style={{
          position: "absolute", top: 12, left: 16,
          background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%", width: 36, height: 36,
          color: "#fff", fontSize: 16, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(10px)"
        }}>←</button>
        <div style={{
          position: "absolute", top: 12, right: 16,
          background: `${v.tagColor}22`, border: `1px solid ${v.tagColor}66`,
          borderRadius: 20, padding: "5px 14px",
          fontSize: 12, color: v.tagColor, fontWeight: 700
        }}>{v.tag}</div>
      </div>

      <div style={{ padding: "0 16px 24px" }}>
        {/* Title */}
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", margin: "0 0 4px", letterSpacing: -0.5 }}>{v.name}</h2>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "#888" }}>{v.type}</span>
            <span style={{ fontSize: 13, color: "#888" }}>📍 {v.distance}</span>
          </div>
        </div>

        {/* Heat */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16, padding: 14, marginBottom: 14
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "#aaa" }}>Nível de animação</span>
            <span style={{ fontSize: 13, color: v.accent, fontWeight: 700 }}>{v.heat}% 🔥</span>
          </div>
          <HeatBar value={v.heat} />
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
          {[
            { icon: "📸", value: v.stories, label: "Stories" },
            { icon: "👥", value: "87", label: "Aqui agora" },
            { icon: "⭐", value: "4.8", label: "Avaliação" },
          ].map(stat => (
            <div key={stat.label} style={{
              flex: 1, background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14, padding: "12px 8px", textAlign: "center"
            }}>
              <div style={{ fontSize: 20 }}>{stat.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{stat.value}</div>
              <div style={{ fontSize: 10, color: "#666" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Stories preview */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: "#666", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
            Stories recentes
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {stories.slice(0, 4).map(s => (
              <div key={s.id} style={{
                flex: 1, aspectRatio: "1",
                background: `linear-gradient(135deg, ${s.color}, ${s.color}66)`,
                borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, border: `1px solid ${s.color}44`
              }}>{s.emoji}</div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button style={{
          width: "100%", padding: "16px",
          background: "linear-gradient(135deg, #c084fc, #fb7185)",
          border: "none", borderRadius: 16,
          fontSize: 15, fontWeight: 700, color: "#fff",
          cursor: "pointer", letterSpacing: 0.3,
          boxShadow: "0 8px 24px rgba(192,132,252,0.4)"
        }}>
          📸 Partilhar story aqui
        </button>
      </div>
    </div>
  );
};

const ProfileScreen = () => (
  <div style={{ flex: 1, overflowY: "auto" }}>
    {/* Header */}
    <div style={{
      padding: "20px 20px 0",
      background: "linear-gradient(180deg, rgba(124,58,237,0.15) 0%, transparent 100%)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
        <div style={{
          width: 72, height: 72, borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #db2777)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 32, border: "3px solid rgba(192,132,252,0.4)"
        }}>🧑</div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>Henrique</div>
          <div style={{ fontSize: 13, color: "#888" }}>@henrique · Porto 📍</div>
          <div style={{
            marginTop: 6, background: "rgba(192,132,252,0.15)",
            border: "1px solid rgba(192,132,252,0.3)",
            borderRadius: 20, padding: "3px 10px", display: "inline-block",
            fontSize: 11, color: "#c084fc"
          }}>✨ Nightlifer</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 0, marginBottom: 20, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
        {[
          { value: "23", label: "Stories" },
          { value: "148", label: "Seguindo" },
          { value: "312", label: "Seguidores" },
        ].map((s, i) => (
          <div key={s.label} style={{
            flex: 1, padding: "14px 0", textAlign: "center",
            background: "rgba(255,255,255,0.03)",
            borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none"
          }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{s.value}</div>
            <div style={{ fontSize: 11, color: "#666" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ padding: "0 16px 24px" }}>
      {/* Favorites */}
      <div style={{ fontSize: 11, color: "#666", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
        Os teus locais favoritos
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {venues.slice(0, 3).map(v => (
          <div key={v.id} style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14, padding: 12
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: `${v.accent}22`, display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 20
            }}>{v.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{v.name}</div>
              <div style={{ fontSize: 11, color: "#666" }}>{v.type}</div>
            </div>
            <div style={{ fontSize: 12, color: v.accent }}>♥</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [screen, setScreen] = useState("feed");
  const [selectedVenue, setSelectedVenue] = useState(null);

  const renderScreen = () => {
    switch (screen) {
      case "feed": return <FeedScreen setScreen={setScreen} setSelectedVenue={setSelectedVenue} />;
      case "map": return <MapScreen />;
      case "story": return <StoryScreen setScreen={setScreen} />;
      case "venue": return <VenueScreen venue={selectedVenue} setScreen={setScreen} />;
      case "profile": return <ProfileScreen />;
      default: return <FeedScreen setScreen={setScreen} setSelectedVenue={setSelectedVenue} />;
    }
  };

  const showNav = screen !== "story";

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 30% 20%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(219,39,119,0.1) 0%, transparent 60%), #050508",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      {/* Phone shell */}
      <div style={{
        width: 390, height: 844,
        background: "#080810",
        borderRadius: 52,
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", position: "relative"
      }}>
        <StatusBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {renderScreen()}
        </div>
        {showNav && <BottomNav active={screen} setScreen={setScreen} />}
      </div>

      {/* Labels outside phone */}
      <div style={{
        position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 16, alignItems: "center"
      }}>
        {["feed","map","story","profile"].map(s => (
          <button key={s} onClick={() => setScreen(s)} style={{
            background: screen === s ? "rgba(192,132,252,0.2)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${screen === s ? "rgba(192,132,252,0.5)" : "rgba(255,255,255,0.1)"}`,
            borderRadius: 20, padding: "6px 16px",
            color: screen === s ? "#c084fc" : "#666",
            fontSize: 12, cursor: "pointer", fontWeight: screen === s ? 700 : 400,
            textTransform: "capitalize"
          }}>{s}</button>
        ))}
      </div>
    </div>
  );
}
//npm run dev - para rodar o codigo // 

