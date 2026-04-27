import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { fetchTasks, addTask, deleteTask, toggleTask } from "../api";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTasks();
      setTasks(data);
    } catch {
      setError("Cannot reach server. Make sure the backend is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (title) => {
    try {
      setError(null);
      const newTask = await addTask(title);
      setTasks((prev) => [newTask, ...prev]);
    } catch {
      setError("Failed to add task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      setError(null);
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch {
      setError("Failed to delete task.");
    }
  };

  const handleToggle = async (id) => {
    try {
      setError(null);
      const updated = await toggleTask(id);
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch {
      setError("Failed to update task.");
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="page">
      <div className="card">
        <header className="card-header">
          <div className="logo">✓</div>
          <div className="header-text">
            <h1>Task Manager</h1>
            <p>Stay focused, get things done</p>
          </div>
        </header>

        <TaskInput onAdd={handleAdd} />

        {error && (
          <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 mb-3" role="alert">
            <span>⚠</span> {error}
          </div>
        )}

        {!loading && tasks.length > 0 && (
          <div className="stats-row">
            <span className="stat-badge">{tasks.length} total</span>
            <span className="stat-badge stat-badge--done">{completedCount} done</span>
            <span className="stat-badge stat-badge--pending">{tasks.length - completedCount} pending</span>
          </div>
        )}

        {loading ? (
          <div className="loader-wrap">
            <div className="spinner-border text-primary" role="status" style={{ width: "2.5rem", height: "2.5rem" }} />
            <p className="loader-text">Loading tasks…</p>
          </div>
        ) : (
          <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
        )}
      </div>
    </div>
  );
}