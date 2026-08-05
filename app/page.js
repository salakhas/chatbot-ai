"use client";
import { useEffect, useRef, useState } from "react";

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
  const welcomeMessages = {
    chat: "Hey! I'm your Study Buddy 👋 Ask me anything — I'll explain it simply, give examples,  and help you understand.",
    flashcards: "Paste any topic and I'll turn it into flashcards for you! 🃏",
    quiz: "Tell me a subject and I'll quiz you on it! I'll ask questions and grade your answers. 📝",
    summarize:
      "Paste your notes, an article, or any text and I'll give you a clean summary. 📄",
  };

  const [messages, setMessages] = useState({
    chat: [{ role: "ai", text: welcomeMessages.chat }],
    flashcards: [{ role: "ai", text: welcomeMessages.flashcards }],
    quiz: [{ role: "ai", text: welcomeMessages.quiz }],
    summarize: [{ role: "ai", text: welcomeMessages.summarize }],
  });

  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");

  // Auto scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeSidebar]);

  const handleSend = async () => {
    const userMessage = { role: "user", text: input };

    // Only adds to the active sidebar's messages
    setMessages((prev) => ({
      ...prev,
      [activeSidebar.title.toLowerCase()]: [
        ...prev[activeSidebar.title.toLowerCase()],
        userMessage,
      ],
    }));
  };
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
        <div className="flex flex-col flex-1 overflow-hidden">
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
              <p className="text-[rgba(255,255,255,0.4)] text-[13px]">
                AI Ready
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-6 overflow-y-auto flex-1">
            {messages[activeSidebar.title.toLowerCase()]?.map((msg, i) => {
              console.log(
                activeSidebar.title.toLowerCase(),
                "activeSidebar.title.toLowerCase()"
              );
              return (
                <div
                  key={i}
                  className={`flex items-end gap-3 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0"
                    style={{
                      background: "rgba(139,92,246,0.2)",
                      border: "1px solid rgba(139,92,246,0.3)",
                    }}
                  >
                    {msg.role === "ai" ? "🤖" : "👤"}
                  </div>

                  {/* Bubble */}
                  <div
                    style={{
                      maxWidth: "65%",
                      padding: "12px 16px",
                      borderRadius:
                        msg.role === "ai"
                          ? "18px 18px 18px 4px"
                          : "18px 18px 4px 18px",
                      background:
                        msg.role === "ai"
                          ? "rgba(139,92,246,0.15)"
                          : "rgba(139,92,246,0.35)",
                      border: "1px solid rgba(139,92,246,0.25)",
                      color: "rgba(255,255,255,0.88)",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-end gap-3">
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: "rgba(139,92,246,0.2)",
                    border: "1px solid rgba(139,92,246,0.3)",
                  }}
                >
                  🤖
                </div>
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "18px 18px 18px 4px",
                    background: "rgba(139,92,246,0.15)",
                    border: "1px solid rgba(139,92,246,0.25)",
                  }}
                  className="flex gap-1 items-center"
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "#a78bfa",
                        animation: `blink 1.2s infinite ${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Auto scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Fixed input bar */}
          <div
            className="flex items-end gap-3 p-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask me anything..."
              rows={1}
              className="flex-1 resize-none p-3 rounded-[14px] text-sm"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.85)",
                outline: "none",
                lineHeight: 1.5,
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="p-3 px-5 rounded-[14px] text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 4px 20px rgba(139,92,246,0.4)",
                opacity: !input.trim() || isTyping ? 0.5 : 1,
                transition: "opacity 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              ✦ Send
            </button>
          </div>
          {/* </div> */}
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
