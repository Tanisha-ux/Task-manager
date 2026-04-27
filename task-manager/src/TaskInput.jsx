import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setBusy(true);
    await onAdd(trimmed);
    setValue("");
    setBusy(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control task-input"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={busy}
        maxLength={120}
      />
      <button
        className="btn add-btn"
        onClick={handleSubmit}
        disabled={busy || !value.trim()}
      >
        {busy ? (
          <span className="spinner-border spinner-border-sm" role="status" />
        ) : (
          "+ Add"
        )}
      </button>
    </div>
  );
}