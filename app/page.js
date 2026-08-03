"use client";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState("");
  const [sidebarState, setSidebarState] = useState("expanded");

  const handleClick = async () => {
    const res = await fetch("/api/chat");
    const data = await res.json();
    setResponse(data.message);
  };

  const sidebarContent = [
    {
      id: 1,
      icon: "💬",
      title: "Chat",
    },
    {
      id: 2,
      icon: "🃏",
      title: "Flashcards",
    },
    {
      id: 3,
      icon: "📝",
      title: "Quiz",
    },
    {
      id: 4,
      icon: "📄",
      title: "Summarize",
    },
  ];
  const [activeSidebar, setActiveSidebar] = useState(sidebarContent[0]);
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0d0b1e 0%, #130d2e 50%, #0e0b22 100%)",
      }}
      className="bg-dark-bg h-screen flex justify-center items-center"
    >
      <div
        style={{
          position: "fixed",
          top: "-10%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          animation: "float1 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      >
        {/* Orb 1 */}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "-15%",
          right: "-5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
          animation: "float2 10s ease-in-out infinite",
          pointerEvents: "none",
        }}
      >
        {/* Orb 2 */}
      </div>
      <div
        style={{
          position: "fixed",
          top: "40%",
          left: "40%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,181,253,0.1) 0%, transparent 70%)",
          animation: "float3 12s ease-in-out infinite",
          pointerEvents: "none",
        }}
      >
        {/* Orb 3 */}
      </div>
      <div className="appWrapper glass relative">
        {/* Sidebar */}
        <div
          style={{
            borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(0, 0, 0, 0.15)",
            width: sidebarState === "expanded" ? 220 : 69,
            transition: "0.2s",
          }}
        >
          <div
            style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
            className="py-4 px-5"
          >
            <h1 className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
              <span className="text-[24px] flex-shrink-0">📚</span>
              <span
                className="logoText text-[24px]"
                style={{
                  opacity: sidebarState === "expanded" ? 1 : 0,
                  width: sidebarState === "expanded" ? "auto" : 0,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  transition:
                    sidebarState === "expanded"
                      ? "opacity 0.1s ease 0.10s"
                      : "opacity 0s",
                }}
              >
                Study Buddy
              </span>
            </h1>
          </div>
          <div className="h-[100%]s flex flex-col justify-between">
            <div className="px-3 py-5 flex flex-col gap-[6px]">
              {sidebarContent.map((ele, key) => {
                return (
                  <button
                    onClick={() => {
                      setActiveSidebar(ele);
                    }}
                    className={`${
                      ele.title === activeSidebar.title
                        ? "activeSidebar"
                        : "inactiveSidebar"
                    } inter-500 flex items-center`}
                    key={key}
                  >
                    <span style={{ fontSize: "18px", flexShrink: 0 }}>
                      {ele.icon}
                    </span>

                    <span
                      style={{
                        opacity: sidebarState === "expanded" ? 1 : 0,
                        width: sidebarState === "expanded" ? "auto" : 0,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        transition:
                          sidebarState === "expanded"
                            ? "opacity 0.1s ease 0.15s"
                            : "opacity 0s",
                      }}
                    >
                      {ele.title}
                    </span>

                    <div
                      style={{
                        position: "absolute",
                        right: 10,
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "rgb(167, 139, 250)",
                        boxShadow: "rgb(167, 139, 250) 0px 0px 8px",
                        opacity:
                          ele.title === activeSidebar.title &&
                          sidebarState === "expanded"
                            ? 1
                            : 0,
                        transition:
                          sidebarState === "expanded"
                            ? "opacity 0.1s ease 0.15s"
                            : "opacity 0s",
                      }}
                    />
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => {
                if (sidebarState === "expanded") {
                  setSidebarState("collapsed");
                } else {
                  setSidebarState("expanded");
                }
              }}
              className="absolute bottom-[28px]"
              style={{
                margin: "0px 12px",
                width: sidebarState === "expanded" ? 195 : 45,
                padding: 10,
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 10,
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: 12,
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              {sidebarState === "expanded" ? "◀" : "▶"}
            </button>
          </div>
        </div>
        <div
          className="py-4 px-5 w-full h-[69px] flex items-center justify-between"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="activeMenuPill">
            {activeSidebar.icon} {activeSidebar.title} Mode
          </div>
          <div className="flex items-center gap-[8px]">
            <div className={`${true ? "aiReadyDot" : "aiNotReadyDot"}`}></div>
            <p className="text-[rgba(255,255,255,0.4)] text-[13px]">AI Ready</p>
          </div>
        </div>
      </div>
      {/* <div>
        <h1>My Chatbot app</h1>
        <button onClick={handleClick}>Test Gemini</button>
        <p>{response}</p>
      </div> */}
    </div>
  );
}
