# Personal Finance Tracker - Backend

> **Status:** Backend complete and functional. Frontend planned but not yet implemented in this repo.

Welcome to the **Personal Finance Tracker** project!  
This README documents the backend build and also serves as a step-by-step guide for the full-stack app - including the frontend phases, which are documented here as the intended next steps but are **not yet built**.

**Tech Stack (Backend - built):**
- Node.js, Express.js, MongoDB, JWT

**Tech Stack (Frontend - planned, not yet implemented):**
- React.js, Tailwind CSS/Bootstrap, Chart.js

**Deployment:**
- Backend: Render/Railway
- Frontend: Vercel (planned)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features (MVP)](#features-mvp)
- [Phase 1: Backend Setup](#phase-1-backend-setup) - Built
- [Phase 2: Backend - Models & Auth](#phase-2-backend---models--auth) - Built
- [Phase 3: Backend - Transactions CRUD](#phase-3-backend---transactions-crud) - Built
- [Phase 4: Frontend Setup](#phase-4-frontend-setup) - Planned
- [Phase 5: Frontend - Auth & Dashboard](#phase-5-frontend---auth--dashboard) - Planned
- [Phase 6: Frontend - Transactions & Charts](#phase-6-frontend---transactions--charts) - Planned
- [Phase 7: Deployment](#phase-7-deployment)
- [Phase 8: Polish & Documentation](#phase-8-polish--documentation)
- [Bonus: Testing, CI/CD, and More Features](#bonus-testing-cicd-and-more-features)

---

## Project Overview

**Personal Finance Tracker** is a backend API that lets users manage income and expenses, categorize transactions, and (eventually) visualize their financial data through a dashboard. The backend - authentication, transaction CRUD, and data modeling - is complete. The frontend was scoped and documented as part of the original learning plan but has not been built yet.

---

## Features

**Built (Backend):**
- User registration, login, and JWT-based authentication
- Add, view, edit, and delete transactions via REST API
- Categorize transactions (e.g., Food, Travel, Shopping)
- Secure, per-user data access via JWT middleware

**Planned (Frontend - not yet implemented):**
- Dashboard with charts (total balance, by category, monthly trends)
- Responsive UI for desktop and mobile
- Deployed, connected frontend + backend

---

## Phase 1: Backend Setup - Built

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

## Phase 2: Backend - Models & Auth - Built

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

## Phase 3: Backend - Transactions CRUD - Built

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

## Phase 4: Frontend Setup - Planned, not yet built

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

## Phase 5: Frontend - Auth & Dashboard - Planned, not yet built

**Goal:**  
- Build Signup, Login, and Logout pages
- Store JWT in localStorage
- Redirect unauthenticated users

---

## Phase 6: Frontend - Transactions & Charts - Planned, not yet built

**Goal:**  
- Fetch and display transactions
- Add, edit, and delete transactions
- Show dashboard with charts (using Chart.js)
- Responsive UI (Tailwind/Bootstrap)

---

## Phase 7: Deployment

**Backend - done:**
- Deployed to Render/Railway
- Environment variables configured (MONGODB_URI, JWT_SECRET)
- CORS configured

**Frontend - planned:**
- Deploy to Vercel or Netlify
- Connect to backend API

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

## Author

Made by [Harsha Verma](https://github.com/vermaharsha)
