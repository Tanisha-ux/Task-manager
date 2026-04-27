import { useState } from "react";
import "./Task.css";

export default function TaskItem({ task, onDelete, onToggle }) {
  const [deleting, setDeleting] = useState(false);
  const [toggling, setToggling] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    await onDelete(task.id);
  };

  const handleToggle = async () => {
    setToggling(true);
    await onToggle(task.id);
    setToggling(false);
  };

  return (
    <li className={`task-item ${task.completed ? "task-item--done" : ""} ${deleting ? "task-item--removing" : ""}`}>
      <button
        className={`toggle-btn ${task.completed ? "toggle-btn--checked" : ""}`}
        onClick={handleToggle}
        disabled={toggling || deleting}
        aria-label={task.completed ? "Mark incomplete" : "Mark complete"}
      >
        {toggling ? (
          <span className="spinner-border spinner-border-sm text-light" role="status" />
        ) : task.completed ? (
          "✓"
        ) : (
          ""
        )}
      </button>

      <span className={`task-title ${task.completed ? "task-title--done" : ""}`}>
        {task.title}
      </span>

      <button
        className="delete-btn"
        onClick={handleDelete}
        disabled={deleting}
        aria-label={`Delete: ${task.title}`}
      >
        {deleting ? (
          <span className="spinner-border spinner-border-sm" role="status" />
        ) : (
          "✕"
        )}
      </button>
    </li>
  );
}