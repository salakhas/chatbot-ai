export default function ErrorBubble({ text, onRetry, disabled }) {
  return (
    <div role="alert" className="flex flex-col gap-3">
      <div className="flex items-start gap-2">
        <span className="shrink-0">⚠️</span>
        <p className="text-sm" style={{ color: "rgba(254,202,202,0.95)" }}>
          {text}
        </p>
      </div>
      <button
        onClick={onRetry}
        disabled={disabled}
        className="self-start rounded-[10px] px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
        style={{
          background: "rgba(239,68,68,0.25)",
          border: "1px solid rgba(239,68,68,0.4)",
        }}
      >
        ↻ Try again
      </button>
    </div>
  );
}
