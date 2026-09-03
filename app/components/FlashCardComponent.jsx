import React, { useState } from "react";

const FlashCardComponent = ({ card, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`cursor-pointer rounded-[14px] p-4 border border-[rgba(139,92,246,0.3)] transition-all duration-200 ease-in-out min-h-[80px] flex flex-col gap-2 ${
        flipped ? "bg-[rgba(139,92,246,0.25)]" : "bg-[rgba(139,92,246,0.1)]"
      }`}
    >
      <div
        style={{
          fontSize: 11,
          color: "#a78bfa",
          fontWeight: 600,
          letterSpacing: "0.08em",
        }}
      >
        {flipped ? "ANSWER" : `CARD ${index + 1} — TAP TO REVEAL`}
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.88)",
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        {flipped ? card.answer : card.question}
      </div>
    </div>
  );
};

export default FlashCardComponent;
