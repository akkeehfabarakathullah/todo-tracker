# Todo Tracker - Smart Task Management App

A clean, modern full-stack Todo application that helps users manage tasks efficiently with a smooth UI, powerful backend, and essential productivity features.
---

## Core Features

## Task Management

* **Create Tasks** - Easily add new todos with title and description
* **Edit Tasks** - Update tasks anytime with real-time changes
* **Delete Tasks** - Remove completed or unwanted tasks
* **View All Tasks** - Organized display of all your todos
* **Toggle Status** - Mark tasks as completed or pending
* **Search Functionality** - Quickly find tasks using keywords

---

## User Experience Features

* **Dark Mode** - Switch between light and dark themes 
* **Clean UI** - Minimal and distraction-free interface
* **Responsive Design** - Works on mobile, tablet, and desktop
* **Smooth Interactions** - Fast and responsive user experience
* **Friendly Messages** - Helpful error and success feedback
* **Congrats Messages** - Positive feedback when tasks are completed 

---

## Backend Capabilities

* **RESTful API** - Clean and structured API design
* **CRUD Operations** - Full Create, Read, Update, Delete functionality
* **MongoDB Integration** - Cloud database using MongoDB Atlas
* **Fast Server** - Lightweight Express.js backend
* **Toggle Endpoint** - Dedicated route for status updates

---

## Design Philosophy

This project focuses on:

* **Simplicity** - Easy-to-use interface without clutter
* **Speed** - Fast loading and smooth interactions
* **Clarity** - Clear task visibility and actions
* **Usability** - Designed for real daily task management
* **Responsiveness** - Works across all devices

---

## Technology Stack

## Frontend

* React.js
* CSS 

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

##  Getting Started

## Prerequisites

* Node.js installed
* npm 
* MongoDB Atlas account(sample account)

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/akkeehfabarakathullah/todo-tracker.git
cd todo-tracker
```

2. **Install dependencies**

```bash
npm install
```

---

## Run Backend

```bash
cd backend
node server.js
```

Backend runs at:
http://localhost:5000

---

## Run Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:
http://localhost:3000

---

## User Guide

## Managing Tasks

1. Add a new task using the input field
2. Edit tasks anytime
3. Mark tasks as completed
4. Delete tasks when no longer needed

---

## Search Tasks

* Use the search bar to filter tasks instantly
* Helps manage large task lists easily

---

## Dark Mode

* Toggle between light and dark mode
* Improves usability in different environments

---

## Task Completion

* Mark tasks as done
* Get visual feedback and confirmation messages

---

## API Endpoints

* `GET /api/todos` → Get all todos
* `POST /api/todos` → Create a todo
* `PUT /api/todos/:id` → Update a todo
* `PATCH /api/todos/:id/done` → Toggle status
* `DELETE /api/todos/:id` → Delete a todo

---

## Configuration

* Backend connection is set in `server.js`
* Update MongoDB URI for your database
* Enable CORS for frontend-backend connection

---

## Future Improvements

* User authentication (JWT)
* Task priorities
* Due dates & reminders
* Calender update
* Charts for comparisions
* Drag-and-drop task ordering
* Deployment
* Notifications system

---

## Monorepo Setup

This project follows a monorepo structure where both frontend and backend are maintained in a single repository.

---

## Contributing

1. Fork the repository
2. Create a branch (`feature/new-feature`)
3. Commit changes
4. Push to your branch
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

* React.js for frontend framework
* Express.js for backend API
* MongoDB Atlas for database
---

## Project Highlights

* Beginner-friendly full-stack project
* Real-world CRUD application
* Clean architecture and structure

---
