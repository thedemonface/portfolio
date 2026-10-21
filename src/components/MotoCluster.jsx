import { useEffect, useState } from "react";

const screens = [
  {
    key: "nav",
    label: "Map + Call",
    color: "#2f7df6",
    src: "/images/projects/moto-os/cluster/tft-nav-call.jpg",
    alt: "Moto OS display with turn-by-turn map, an incoming call, music, gear, speed, fuel, and range",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 18-7-4-7 4z" fill="#fff" />
      </svg>
    ),
    pins: [
      { label: "Next turn", left: "30%", top: "12%", color: "#2f7df6" },
      { label: "Incoming call", left: "13%", top: "57%", color: "#22a24f" },
      { label: "Now playing", left: "16%", top: "10%", color: "#8d44d8" },
      { label: "ETA", left: "39%", top: "69%", color: "#2f7df6" },
      { label: "Gear", left: "89.5%", top: "19%", color: "#2fd27a", align: "left" },
      { label: "Speed", left: "89.5%", top: "50%", color: "#eef1f4", align: "left" },
      { label: "Fuel + range", left: "89.5%", top: "87%", color: "#f2b632", align: "left" },
    ],
  },
  {
    key: "music",
    label: "Music",
    color: "#8d44d8",
    src: "/images/projects/moto-os/cluster/tft-music.jpg",
    alt: "Moto OS music player with album art and playback controls",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18V5l11-2v13" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6.5" cy="18" r="2.8" fill="#fff" />
        <circle cx="17.5" cy="16" r="2.8" fill="#fff" />
      </svg>
    ),
    pins: [
      { label: "Spotify · YT Music", left: "40%", top: "24%", color: "#8d44d8" },
      { label: "Controls", left: "39%", top: "51%", color: "#8d44d8" },
      { label: "Next turn", left: "15%", top: "19%", color: "#2f7df6" },
      { label: "Call", left: "13%", top: "57%", color: "#22a24f" },
    ],
  },
  {
    key: "phone",
    label: "Phone",
    color: "#22a24f",
    src: "/images/projects/moto-os/cluster/tft-phone.jpg",
    alt: "Moto OS incoming call with answer and decline",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" fill="#fff" />
      </svg>
    ),
    pins: [
      { label: "Contacts · Recent · Keypad", left: "52%", top: "7.5%", color: "#22a24f" },
      { label: "Caller", left: "52%", top: "46%", color: "#22a24f" },
      { label: "Answer", left: "64%", top: "68%", color: "#22a24f" },
      { label: "Decline", left: "39%", top: "68%", color: "#e5383b" },
    ],
  },
  {
    key: "cluster",
    label: "Cluster",
    color: "#2fd27a",
    src: "/images/projects/moto-os/cluster/tft-cluster.jpg",
    alt: "Moto OS ride cluster with speed, gear, RPM, trip meters, odometer, and range",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 17a8 8 0 1 1 16 0" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M12 17l4-5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
    pins: [
      { label: "Warning lights", left: "36%", top: "7%", color: "#f2b632" },
      { label: "Gear", left: "32.5%", top: "41%", color: "#2fd27a" },
      { label: "Speed", left: "47.5%", top: "41%", color: "#eef1f4" },
      { label: "RPM", left: "67.5%", top: "23%", color: "#e5383b" },
      { label: "Trip + ODO", left: "88%", top: "23%", color: "#2f7df6", align: "left" },
      { label: "Range", left: "74%", top: "71%", color: "#f2b632" },
      { label: "Ride mode", left: "33%", top: "76%", color: "#2f7df6" },
    ],
  },
  {
    key: "gauge",
    label: "Map + RPM",
    color: "#e5383b",
    src: "/images/projects/moto-os/cluster/tft-nav-gauge.jpg",
    alt: "Moto OS map with a compact rev gauge and gear indicator",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 19L9 5l3 7 3-4 6 11z" fill="#fff" />
      </svg>
    ),
    pins: [
      { label: "Next turn", left: "30%", top: "12%", color: "#2f7df6" },
      { label: "3D map", left: "52%", top: "50%", color: "#2f7df6" },
      { label: "RPM + gear", left: "89.5%", top: "59%", color: "#e5383b", align: "left" },
      { label: "Speed", left: "89.5%", top: "15%", color: "#eef1f4", align: "left" },
    ],
  },
];

const MotoCluster = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = screens[index];

  useEffect(() => {
    if (paused) return undefined;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % screens.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const select = (next) => {
    setPaused(true);
    setIndex(next);
  };

  return (
    <div className="moto-cluster">
      <div className="moto-visor" aria-hidden="true" />
      <div className="moto-housing">
        <div className="moto-knobs moto-knobs-left" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="moto-knobs" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <button
          type="button"
          className="moto-glass"
          aria-label={`${active.label}. Click to see the next Moto OS screen.`}
          onClick={() => select((index + 1) % screens.length)}
        >
          {screens.map((screen) => (
            <img
              key={screen.key}
              src={screen.src}
              alt={screen.key === active.key ? screen.alt : ""}
              className={screen.key === active.key ? "" : "off"}
            />
          ))}
          {screens.map((screen) => (
            <div
              key={`${screen.key}-pins`}
              className={`moto-pins ${screen.key === active.key ? "on" : ""}`}
              aria-hidden="true"
            >
              {screen.pins.map((pin) => (
                <div
                  key={pin.label}
                  className={`moto-pin ${pin.align === "left" ? "left" : ""}`}
                  style={{ left: pin.left, top: pin.top, "--c": pin.color }}
                >
                  <i />
                  <b>{pin.label}</b>
                </div>
              ))}
            </div>
          ))}
        </button>
      </div>

      <div className="moto-dock" role="tablist" aria-label="Moto OS screens">
        {screens.map((screen, screenIndex) => (
          <button
            key={screen.key}
            type="button"
            role="tab"
            aria-selected={screen.key === active.key}
            style={{ "--c": screen.color }}
            onClick={() => select(screenIndex)}
          >
            <span className="moto-ic">{screen.icon}</span>
            <b>{screen.label}</b>
          </button>
        ))}
      </div>

      <ul className="moto-features">
        {active.pins.map((pin) => (
          <li key={pin.label} style={{ "--c": pin.color }}>
            {pin.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MotoCluster;
