Got it. Here is the updated `README.md` file, now including the **Admin Panel Setup** instructions and an updated folder structure.

-----

# FoodieGo

Online food delivery platform

# 🍴 FoodieGo – Full Stack Food Delivery Application

This is a **MERN Stack (MongoDB, Express.js, React.js, Node.js)** based food delivery web application.
It includes features for both **Frontend (Customer)** and **Backend (Admin/Server)** operations.

-----

## 🚀 Features

  - User Authentication & Authorization
  - Add/View Food Items
  - Place and Manage Orders
  - Online Payment using **Stripe**
  - Admin Dashboard for managing menu & orders
  - MongoDB Atlas for Cloud Database

-----

## 🧩 Folder Structure

```
food/
│
├── frontend/ # React + Vite customer frontend
├── backend/  # Node.js + Express.js server
│   ├── config/
│   │   └── db.js # MongoDB connection file
│   ├── .env # Environment variables (Stripe key, etc.)
│
├── admin/    # React + Vite admin panel
│
└── README.md
```

-----

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd food
```

### 2️⃣ Backend Setup

Go to `backend` folder:

```bash
cd backend
```

Install required packages:

```bash
npm install
```

Create and configure MongoDB connection:

  * Open file: `backend/config/db.js`
  * Replace the MongoDB link with your own from MongoDB Atlas

<!-- end list -->

```javascript
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://your_mongodb_link')
    .then(() => console.log("DB Connected"));
}
```

4.  Create a `.env` file inside `backend/` folder and add your Stripe Secret Key:

<!-- end list -->

```
STRIPE_SECRET_KEY=your_stripe_key
```

🔹 Get your Stripe key from `https://dashboard.stripe.com/apikeys`

Start the backend server:

```bash
npm run server
```

The backend should now run on your configured port (e.g., `http://localhost:4000`).

### 3️⃣ Frontend Setup (Customer)

Go to `frontend` folder (from root `food/` directory):

```bash
cd frontend 
```

*(If you are in the `backend` folder, use `cd ../frontend`)*

Install dependencies:

```bash
npm install
npm install react-router-dom
```

Run the frontend (Vite + React):

```bash
npm run dev
```

Open the displayed local URL (e.g. `http://localhost:5173`) in your browser.

### 4️⃣ Admin Panel Setup

Go to `admin` folder (from root `food/` directory):

```bash
cd admin
```

*(If you are in another folder like `frontend`, use `cd ../admin`)*

Install dependencies:

```bash
npm install
```

Run the admin panel:

```bash
npm run dev
```

This will likely run the admin dashboard on a different port.
