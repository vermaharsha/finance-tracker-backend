# Personal Finance Tracker

Welcome to the **Personal Finance Tracker** project!  
This README will serve both as project documentation and as a detailed, step-by-step guide for building your first full-stack app from scratch.  


**Tech Stack:** 
- Frontend: React.js, Tailwind CSS/Bootstrap, Chart.js  
- Backend: Node.js, Express.js, MongoDB, JWT  
- Deployment: Vercel, Render/Railway

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features (MVP)](#features-mvp)
- [Phase 1: Backend Setup](#phase-1-backend-setup)
    - [1.1. Project Initialization](#11-project-initialization)
    - [1.2. MongoDB Atlas Setup](#12-mongodb-atlas-setup)
    - [1.3. Express App Boilerplate](#13-express-app-boilerplate)
    - [1.4. Folder Structure](#14-folder-structure)
- [Phase 2: Backend - Models & Auth](#phase-2-backend---models--auth)
- [Phase 3: Backend - Transactions CRUD](#phase-3-backend---transactions-crud)
- [Phase 4: Frontend Setup](#phase-4-frontend-setup)
- [Phase 5: Frontend - Auth & Dashboard](#phase-5-frontend---auth--dashboard)
- [Phase 6: Frontend - Transactions & Charts](#phase-6-frontend---transactions--charts)
- [Phase 7: Deployment](#phase-7-deployment)
- [Phase 8: Polish & Documentation](#phase-8-polish--documentation)
- [Bonus: Testing, CI/CD, and More Features](#bonus-testing-cicd-and-more-features)

---

## Project Overview

**Personal Finance Tracker** helps users manage their income and expenses, categorize transactions, and visualize their financial data through interactive dashboards.

---

## Features (MVP)

- User registration, login, and JWT-based authentication
- Add, view, edit, and delete transactions
- Categorize transactions (e.g., Food, Travel, Shopping)
- Dashboard with charts (total balance, by category, monthly trends)
- Responsive UI for desktop and mobile
- Deployed frontend and backend with clear documentation

---

## Phase 1: Backend Setup

### 1.1. Project Initialization

1. Create and open your backend project directory:
    ```bash
    mkdir finance-tracker-backend
    cd finance-tracker-backend
    git init
    npm init -y
    ```

2. Install dependencies:
    ```bash
    npm install express mongoose dotenv cors bcryptjs jsonwebtoken
    npm install --save-dev nodemon
    ```

3. Create the following files/folders:
    ```
    .
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── .env
    ├── app.js
    ├── server.js
    ├── package.json
    ```

### 1.2. MongoDB Atlas Setup

- Create a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster.
- Get your connection string and put it in `.env`:
    ```
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_very_secret_key
    ```

### 1.3. Express App Boilerplate

- In `app.js`:
    ```javascript
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    require('dotenv').config();

    const authRoutes = require('./routes/auth');
    const transactionRoutes = require('./routes/transactions');

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use('/api/auth', authRoutes);
    app.use('/api/transactions', transactionRoutes);

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

    module.exports = app;
    ```

- In `server.js`:
    ```javascript
    const app = require('./app');
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    ```

### 1.4. Folder Structure

- `/models` - Mongoose schemas (User, Transaction)
- `/controllers` - Logic for each route
- `/routes` - Express route handlers
- `/middleware` - Auth middleware

---

## Phase 2: Backend - Models & Auth

**Goal:**  
- Create User model (name, email, hashed password)
- Register and login endpoints
- Secure routes with JWT auth middleware

**Key Files:**
- `models/User.js`
- `routes/auth.js`
- `controllers/authController.js`
- `middleware/auth.js`

**Steps:**  
- Define User schema  
- Implement registration (hash password, save user)  
- Implement login (verify password, generate JWT)  
- Create auth middleware to protect routes

---

## Phase 3: Backend - Transactions CRUD

**Goal:**  
- Create Transaction model
- Add, update, delete, and fetch transactions (per user)
- Secure all transaction routes with JWT

**Key Files:**
- `models/Transaction.js`
- `routes/transactions.js`
- `controllers/transactionController.js`

**Steps:**  
- Define Transaction schema (userRef, amount, type, category, date, note)
- Implement CRUD endpoints (GET, POST, PUT, DELETE)
- Test with Postman

---

## Phase 4: Frontend Setup

1. Create frontend app:
    ```bash
    npx create-react-app finance-tracker-frontend
    cd finance-tracker-frontend
    npm install axios react-router-dom chart.js react-chartjs-2
    # For styling, pick one:
    npm install tailwindcss
    # or
    npm install bootstrap
    ```

2. Plan folder structure:
    ```
    src/
    ├── components/
    ├── pages/
    ├── services/
    ├── App.js
    └── index.js
    ```

---

## Phase 5: Frontend - Auth & Dashboard

**Goal:**  
- Build Signup, Login, and Logout pages
- Store JWT in localStorage
- Redirect unauthenticated users

---

## Phase 6: Frontend - Transactions & Charts

**Goal:**  
- Fetch and display transactions
- Add, edit, and delete transactions
- Show dashboard with charts (using Chart.js)
- Responsive UI (Tailwind/Bootstrap)

---

## Phase 7: Deployment

1. Deploy backend to Render or Railway  
   - Set environment variables (MONGODB_URI, JWT_SECRET)  
   - Update CORS in backend

2. Deploy frontend to Vercel or Netlify  
   - Update API URLs in your frontend

---

## Phase 8: Polish & Documentation

- Add loading and error states
- Validate forms (frontend & backend)
- Write a clear README (this file!)
- Add screenshots or GIFs to demonstrate

---

## Bonus: Testing, CI/CD, and More Features

- Add automated tests (Jest, React Testing Library)
- Set up CI/CD with GitHub Actions
- Add features: export CSV, recurring transactions, dark mode, notifications
- Write case study or blog post about your process

---

## Useful Resources

- [MongoDB Atlas Docs](https://www.mongodb.com/basics/mongodb-atlas-tutorial)
- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [Chart.js Docs](https://www.chartjs.org/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Render Node.js Guide](https://render.com/docs/deploy-node-express-app)

---

## 🙋‍♀️ Author

Made with ❤️ by [Harsha Verma](https://github.com/vermaharsha)
