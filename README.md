# 💰 Track My Expense

**Track My Expense** is a full-stack personal finance app that helps users view all their bank account data in one place and analyze their spending habits through interactive charts.

---

## 🚀 Features

- Securely connect to bank accounts using the **Plaid API**
- View account balances and transactions
- Analyze spending trends through dynamic charts
- Simple, responsive UI built with modern web technologies

---

## 🧰 Tech Stack & What It Does

- **React** – Frontend UI framework for building dynamic user interfaces
- **Flux** – Handles unidirectional state management across components
- **React Router** – Enables smooth, client-side navigation between app pages
- **Node.js** – JavaScript runtime powering the backend
- **Express** – Web framework for creating the backend server and API routes
- **Plaid API** – Connects securely to user bank accounts and retrieves financial data (currently in sandbox mode)
- **React Chart.js** – Visualizes user spending with interactive charts
- **Heroku** – Cloud platform used for deployment

---

## 📦 Installation

```bash
git clone https://github.com/bhprtk/track-my-expense.git
cd track-my-expense
npm install
```

You’ll also need to set up a `.env` file with your **Plaid** credentials (sandbox keys).

---

## ⚙️ Usage

To start the development environment:

```bash
npm start
```

Then open your browser and visit:

```
http://localhost:3000
```

---

## 🧪 Notes

- The app uses the **Plaid sandbox environment**, so transactions and accounts are mock data.
- For testing, select **Wells Fargo** when prompted to choose a financial institution.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

Built by [Pratik Bhandari](https://bhprtk.com)

---
