

# 🍴 FoodieGo – Full-Stack Food Delivery Application

FoodieGo is a complete food delivery platform built using the MERN stack (MongoDB, Express, React, Node.js).  
It includes three main modules:

- 🧑‍💻 **Frontend** – User interface for customers to browse restaurants and place orders.
- ⚙️ **Backend** – API server for authentication, products, orders, and data management.
- 🧑‍🍳 **Admin** – Dashboard for managing restaurants, menu items, and orders.

---

## 🗂️ Project Structure


---

## ⚙️ Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas cloud)

---

## 🚀 Step-by-Step Setup Guide

### 1️⃣ Clone the Repository


2️⃣ Setup Backend

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file inside the backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the backend server:

npm run server


The backend will run on:
👉 http://localhost:5000

3️⃣ Setup Frontend (User Side)

Open a new terminal window.

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Create a .env file inside the frontend folder and add:

VITE_API_URL=http://localhost:5000


Start the frontend:

npm run dev


Open your browser at the displayed URL (usually):
👉 http://localhost:5173

4️⃣ Setup Admin Panel

Open another terminal window.

Navigate to the admin folder:

cd admin


Install dependencies:

npm install


Create a .env file inside the admin folder and add:

VITE_API_URL=http://localhost:5000


Start the admin panel:

npm run dev


Open your browser at the displayed URL (usually):
👉 http://localhost:5174

Open your terminal or command prompt and run:

```bash
git clone https://github.com/PranamyaP/FoodieGo.git
cd FoodieGo

