const BASE = "http://localhost:5000/tasks";

export async function fetchTasks() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
}

export async function addTask(title) {
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Add failed");
  return res.json();
}

export async function toggleTask(id) {
  const res = await fetch(`${BASE}/${id}/toggle`, { method: "PATCH" });
  if (!res.ok) throw new Error("Toggle failed");
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${BASE}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Delete failed");
  return res.json();
}