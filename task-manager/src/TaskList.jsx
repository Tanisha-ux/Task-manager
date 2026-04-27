import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📋</div>
        <p className="empty-title">All clear!</p>
        <p className="empty-sub">Add your first task above to get started.</p>
      </div>
    );
  }

  const pending = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  return (
    <div>
      {pending.length > 0 && (
        <div className="task-group">
          <p className="task-group-label">Pending</p>
          <ul className="task-list">
            {pending.map((task) => (
              <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
          </ul>
        </div>
      )}
      {completed.length > 0 && (
        <div className="task-group">
          <p className="task-group-label">Completed</p>
          <ul className="task-list">
            {completed.map((task) => (
              <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}