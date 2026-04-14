# 📝 Node.js Task Manager API

A RESTful Task Management API built with Node.js, Express, and MongoDB.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (local) or a [MongoDB Atlas](https://www.mongodb.com/atlas) account

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/YOUR_USERNAME/nodejs-task-manager.git
   cd nodejs-task-manager
```

2. Install dependencies:
```bash
   npm install
```

3. Create your `.env` file (use `.env.example` as a template):
```bash
   cp .env.example .env
```
   Then edit `.env` and set your `MONGO_URI`.

4. Start the server:
```bash
   npm start
   # or for development with auto-reload:
   npm run dev
```

The server runs at `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| GET    | /api/tasks        | Get all tasks        |
| POST   | /api/tasks        | Create a new task    |
| PUT    | /api/tasks/:id    | Update a task        |
| DELETE | /api/tasks/:id    | Delete a task        |

### Request Body (POST / PUT)
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "dueDate": "2024-12-31",
  "category": "Personal"
}
```

---

## 🗂️ Project Structure