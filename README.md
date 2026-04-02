# 💰 Finance Dashboard

## 📌 Overview

This project is a modern **Finance Dashboard UI** built using React.
It helps users track income, expenses, and overall financial activity through a clean and interactive interface.

The focus of this project is on **frontend design, component structure, and state management** rather than backend integration.

---

## 🚀 Features

### 📊 Dashboard Overview

* Total Balance, Income, and Expense summary cards
* Time-based visualization (trend chart)
* Category-based spending breakdown

### 💳 Transactions Section

* View all transactions with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
* Search by category
* Filter (All / Income / Expense)
* Sort by amount

### 🔐 Role-Based UI

* **Viewer**

  * Can only view data
* **Admin**

  * Can add, edit, and delete transactions

### ✏️ CRUD Functionality

* Add new transactions
* Edit existing transactions
* Delete transactions

### 📈 Insights

* Highest spending category
* Basic financial observations
* Transaction summary

---

## 🧠 State Management

* Implemented using **React Context API**
* Handles:

  * Transactions data
  * Search and filters
  * User role (Admin / Viewer)

---

## 💾 Data Persistence

* Data stored using **localStorage**
* Ensures data remains after page refresh

---

## 🎨 UI & UX

* Clean and modern dashboard layout
* Responsive design for different screen sizes
* Dark themed UI (Zorin-inspired)
* Handles empty states gracefully

---

## 🛠 Tech Stack

* React (Vite)
* Context API
* CSS (Custom Styling)
* LocalStorage

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/YOUR_USERNAME/finance-dashboard.git
cd finance-dashboard
npm install
npm run dev
```


---

## 🧩 Project Structure

```
src/
 ├── components/
 ├── context/
 ├── pages/
 ├── App.jsx
 └── main.jsx
```

---

## 🧠 Approach

The application is built using reusable React components with centralized state management using Context API.
The UI dynamically updates based on user role and user interactions such as filtering, searching, and editing transactions.

---

## ✨ Notes

* Uses mock/static data
* Focused on frontend functionality and UI design
* No backend required

---

## 📌 Future Enhancements

* Dark/Light mode toggle
* API integration
* Export data (CSV/JSON)
* Advanced charts and analytics
* Authentication system

---

