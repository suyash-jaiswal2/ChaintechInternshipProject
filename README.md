# 📝 Task Manager App

A full-stack Task Management web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** templating.  
Users can create, view, edit, complete, and delete tasks — all through a clean, responsive UI.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account (free) **or** MongoDB installed locally

---

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/suyash-jaiswal2/ChaintechInternshipProject.git
cd ChaintechInternshipProject
```

**2. Install dependencies:**
```bash
npm install
```

**3. Set up environment variables:**
```bash
cp .env.example .env
```
Now open `.env` and fill in your MongoDB connection string:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string_here
```

> 💡 **Getting a free MongoDB URI:**  
> Go to [MongoDB Atlas](https://www.mongodb.com/atlas) → Create free cluster → Connect → Copy the connection string.  
> Replace `<password>` in the string with your actual DB password.

**4. Start the app:**
```bash
npm start
```

**5. Open in your browser:** http://localhost:3000

> For development with auto-reload: `npm run dev`

---

## ✨ Features

- ✅ Create tasks with a title, description, due date, and category
- ✅ View all tasks in a clean, responsive list
- ✅ Mark tasks as completed (cannot re-complete an already completed task)
- ✅ Edit task details
- ✅ Delete tasks with confirmation prompt
- ✅ Validation — task title cannot be empty
- ✅ Graceful error handling with user-friendly messages
- ✅ Bonus: Due dates and categories supported

---

## 🗂️ Project Structure
├── controllers/
│   └── taskController.js   # Business logic for all task operations
├── models/
│   └── Task.js             # Mongoose schema and model
├── routes/
│   └── taskRoutes.js       # Express route definitions
├── views/
│   ├── index.ejs           # Main page — lists all tasks
│   ├── new.ejs             # Create new task form
│   └── edit.ejs            # Edit existing task form
├── public/
│   └── style.css           # Custom styles
├── .env.example            # Environment variable template
├── server.js               # App entry point
└── README.md

---

## 🛣️ Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/tasks` | View all tasks |
| GET | `/tasks/new` | Show create task form |
| POST | `/tasks` | Submit new task |
| GET | `/tasks/:id/edit` | Show edit task form |
| PUT | `/tasks/:id` | Submit edited task |
| PUT | `/tasks/:id/complete` | Mark task as completed |
| DELETE | `/tasks/:id` | Delete a task |

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (Mongoose ODM) |
| Templating | EJS |
| Styling | Bootstrap 5 |
| Dev Tool | Nodemon |

---

## 🔑 Key Design Decisions

- **MVC Pattern** — Code is split into Models, Views, and Controllers for clean separation of concerns and maintainability.
- **EJS Templating** — Server-side rendering keeps the project simple and self-contained with no separate frontend build step needed.
- **method-override** — HTML forms only support GET/POST; this package allows PUT and DELETE requests from forms, enabling proper RESTful routes.
- **dotenv** — Keeps sensitive credentials (DB URI) out of the codebase. A `.env.example` is provided as a safe template.
- **Mongoose Validation** — Title validation is enforced at the schema level, ensuring data integrity regardless of how the app is accessed.

---

## 📄 License

This project was built as part of the Chaintech Network Node.js Internship Practical.