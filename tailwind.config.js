/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // toggle dark mode with class="dark"
    theme: {
      extend: {
        colors: {
          // ─── Core Brand ───────────────────────────────
          brand: {
            50:  "#f5f3ff",  // lightest tint — light mode backgrounds
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",  // soft purple — light mode accents
            400: "#a78bfa",
            500: "#8b5cf6",  // primary purple
            600: "#7c3aed",  // dark primary — buttons, CTAs
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",  // deepest — dark mode text accents
            950: "#2e1065",
          },
  
          // ─── Light Mode ───────────────────────────────
          light: {
            bg:         "#f7f5ff",   // page background — soft lavender white
            surface:    "#ffffff",   // card / sidebar surface
            glass:      "rgba(255,255,255,0.65)", // glassmorphism panels
            border:     "rgba(139,92,246,0.15)",  // subtle purple-tinted border
            borderHover:"rgba(139,92,246,0.35)",
            text:       "#1e1b2e",   // primary text — deep purple-black
            textMuted:  "#6b6880",   // secondary text
            textFaint:  "#a09cb8",   // placeholder / disabled
            bubble: {
              ai:       "rgba(237,233,254,0.9)",  // AI message bubble
              user:     "rgba(139,92,246,0.12)",  // user message bubble
            },
          },
  
          // ─── Dark Mode ────────────────────────────────
          dark: {
            bg:         "#0d0b1e",   // page background
            surface:    "#130d2e",   // card / sidebar surface
            glass:      "rgba(255,255,255,0.04)", // glassmorphism panels
            border:     "rgba(255,255,255,0.08)",
            borderHover:"rgba(139,92,246,0.4)",
            text:       "rgba(255,255,255,0.88)",
            textMuted:  "rgba(255,255,255,0.45)",
            textFaint:  "rgba(255,255,255,0.2)",
            bubble: {
              ai:       "rgba(139,92,246,0.12)",
              user:     "rgba(139,92,246,0.35)",
            },
          },
  
          // ─── Semantic / Status ────────────────────────
          success:  "#34d399",   // green — "AI Ready" dot
          warning:  "#fbbf24",
          error:    "#f87171",
          info:     "#60a5fa",
        },
  
        // ─── Typography ─────────────────────────────────
        fontFamily: {
          display: ["Syne", "sans-serif"],   // headings, logo, badges
          body:    ["DM Sans", "sans-serif"], // all body text
        },
        fontWeight: {
          light:       300,
          normal:      400,
          medium:      500,
          semibold:    600,
          bold:        700,
          extrabold:   800,
        },
  
        // ─── Border Radius ──────────────────────────────
        borderRadius: {
          bubble: "18px",
          card:   "16px",
          pill:   "9999px",
          input:  "14px",
          avatar: "10px",
        },
  
        // ─── Box Shadows ────────────────────────────────
        boxShadow: {
          glass:      "0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          glassLight: "0 8px 40px rgba(139,92,246,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
          glow:       "0 0 20px rgba(139,92,246,0.5)",
          glowSm:     "0 0 8px rgba(139,92,246,0.4)",
          btn:        "0 4px 20px rgba(139,92,246,0.4)",
          btnLight:   "0 4px 16px rgba(139,92,246,0.25)",
        },
  
        // ─── Backdrop Blur ──────────────────────────────
        backdropBlur: {
          glass: "24px",
          soft:  "12px",
        },
  
        // ─── Background Gradients ───────────────────────
        backgroundImage: {
          // Page backgrounds
          "dark-bg":  "linear-gradient(135deg, #0d0b1e 0%, #130d2e 50%, #0e0b22 100%)",
          "light-bg": "linear-gradient(135deg, #f7f5ff 0%, #ede9fe 50%, #f3f0ff 100%)",
  
          // Button / accent gradients
          "btn-primary":   "linear-gradient(135deg, #7c3aed, #a855f7)",
          "btn-secondary": "linear-gradient(135deg, #a78bfa, #c4b5fd)",
  
          // Orb / ambient glows
          "orb-primary":   "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          "orb-secondary": "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
          "orb-accent":    "radial-gradient(circle, rgba(196,181,253,0.15) 0%, transparent 70%)",
  
          // Light mode orbs (softer)
          "orb-light-primary":   "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          "orb-light-secondary": "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
        },
  
        // ─── Animations ─────────────────────────────────
        keyframes: {
          float1: {
            "0%,100%": { transform: "translate(0,0) scale(1)" },
            "50%":     { transform: "translate(30px,-40px) scale(1.1)" },
          },
          float2: {
            "0%,100%": { transform: "translate(0,0) scale(1)" },
            "50%":     { transform: "translate(-20px,30px) scale(0.95)" },
          },
          float3: {
            "0%,100%": { transform: "translate(0,0) scale(1)" },
            "50%":     { transform: "translate(15px,20px) scale(1.05)" },
          },
          fadeIn: {
            from: { opacity: "0", transform: "translateY(8px)" },
            to:   { opacity: "1", transform: "translateY(0)" },
          },
          blink: {
            "0%,80%,100%": { opacity: "0.2" },
            "40%":          { opacity: "1" },
          },
          pulse: {
            "0%,100%": { boxShadow: "0 0 8px rgba(139,92,246,0.4)" },
            "50%":     { boxShadow: "0 0 16px rgba(139,92,246,0.8)" },
          },
        },
        animation: {
          float1:  "float1 8s ease-in-out infinite",
          float2:  "float2 10s ease-in-out infinite",
          float3:  "float3 12s ease-in-out infinite",
          fadeIn:  "fadeIn 0.3s ease forwards",
          blink:   "blink 1.2s infinite",
          pulse:   "pulse 2s ease-in-out infinite",
        },
      },
    },
    plugins: [],
  };