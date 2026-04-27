# Task Manager — Full-Stack App
 
A clean, beginner-friendly full-stack Task Manager built with **React** (frontend) and **Node.js + Express** (backend). Tasks are stored in-memory — no database required.

---
 
## Project Structure
 
```
task-manager/
└── server.js
└── api.js
└── src/
        ├── App.jsx
        ├── App.css
        ├── TaskInput.jsx
        ├── TaskList.jsx
        ├── TaskItem.jsx
        ├── Task.css
        
```
 
---
 
##  Getting Started
 
### Prerequisites
 
Make sure you have the following installed:
 
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)
---
 
### 1. Clone the Repository
 
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```
 
---
 
### 2. Set Up the Backend
 
```bash
cd backend
npm init -y
npm install express cors
```
 
Update `package.json` to enable ES Modules:
 
```json
{
  "type": "module"
}
```
 
Start the backend server:
 
```bash
node server.js
```
 
The backend will run at: **http://localhost:5000**
 
---
 
### 3. Set Up the Frontend
 
Open a **new terminal**, then:
 
```bash
cd frontend
npm create vite@latest task-manager
npm install
npm run dev
```
 
The frontend will run at: **http://localhost:5173**
 
---
 
## API Endpoints
 
| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| GET    | `/tasks`              | Fetch all tasks        |
| POST   | `/tasks`              | Create a new task      |
| PATCH  | `/tasks/:id/toggle`   | Toggle complete status |
| DELETE | `/tasks/:id`          | Delete a task by ID    |
 
---
 
## Features
 
- **Add tasks** — Type a task and press `Enter` or click `+ Add`
- **Delete tasks** — Remove any task instantly via the `✕` button
- **Toggle complete** — Mark tasks as done/undone with the circle button
- **Live UI updates** — UI reflects changes immediately without full reload
- **Grouped view** — Tasks are separated into *Pending* and *Completed* sections
- **Task stats** — See total, done, and pending counts at a glance
- **Loading state** — Spinner shown while fetching tasks on page load
- **Error handling** — User-friendly error messages if the backend is unreachable
---
 

 
---
 
## Configuration
 
The frontend connects to the backend via:
 
```js
// src/api.js
const BASE = "http://localhost:5000/tasks";
```
 
If you change the backend port, update this value accordingly.
 
---
 
## Full Dependency List
 
**Backend**
```json
{
  "express": "^4.x",
  "cors": "^2.x"
}
```
 
**Frontend** (via Vite)
```json
{
  "react": "^18.x",
  "react-dom": "^18.x"
}
```
 
---
 
## How It Works
 
1. On page load, `App.jsx` calls `fetchTasks()` → hits `GET /tasks` → renders the list.
2. Typing in the input and clicking **Add** calls `addTask()` → hits `POST /tasks` → prepends the new task to state.
3. Clicking **✕** calls `deleteTask()` → hits `DELETE /tasks/:id` → filters the task out of state.
4. Clicking the circle button calls `toggleTask()` → hits `PATCH /tasks/:id/toggle` → updates the task in state.
All state updates are **optimistic** — the UI changes immediately on a successful API response.
 
---
 
## Troubleshooting
 
| Problem | Fix |
|--------|-----|
| `Failed to fetch` error in the UI | Make sure the backend is running on port 5000 |
| `CORS error` in the browser console | Confirm `cors()` middleware is added in `server.js` |
| `Cannot use import statement` error | Add `"type": "module"` to backend `package.json` |
| Port 5000 already in use | Change `PORT` in `server.js` and update `api.js` |
| Blank page on frontend | Run `npm install` and restart with `npm run dev` |
 
---
 
## License
 
This project is open source and available under the [MIT License](LICENSE).
 
