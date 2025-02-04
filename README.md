# Personal Finance Tracker

This is a **Personal Finance Tracker** built using **React, Firebase, Ant Design, and React Toastify**. The project helps users track their income, expenses, and overall financial statistics with an interactive dashboard.

## 🚀 Features
- **Built with React** for a seamless user experience
- **Firebase Authentication** (Sign up with Email & Google)
- **Firestore Database** to store user transactions
- **React Toastify** for alerts and notifications
- **Ant Design** for UI components and charts
- **CSV Export & Import** to manage financial data
- **Sorting & Filtering** for transaction history
- **Responsive Design** with modern UI

## 🛠️ Tech Stack
- **React** - Frontend framework
- **Firebase** - Backend authentication and database
- **Ant Design** - UI component library
- **React Toastify** - Notifications and alerts
- **React Router** - Navigation between pages

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── Header.js          # Navigation bar
│   │   ├── InputField.js      # Custom input field component
│   │   ├── Button.js          # Reusable button component
│   │   ├── TransactionsTable.js # Table to display transactions
│   ├── pages
│   │   ├── SignUp.js          # Signup page
│   │   ├── Dashboard.js       # Main dashboard page
│   ├── firebase.js            # Firebase configuration
│   ├── App.js                 # Main application file
│   ├── index.js               # Entry point
│   ├── styles.css             # Global styles
├── public
│   ├── assets                 # Images and icons
│   ├── index.html             # HTML file
├── package.json               # Dependencies and scripts
├── README.md
```

## 🎨 UI & Functionalities
- **Sign Up / Login:** Users can sign up using Email & Password or Google Authentication.
- **Dashboard:** Displays Total Balance, Income, and Expenses.
- **Financial Graphs:** Line graph for financial trends and pie chart for expense breakdown.
- **Transactions Table:** Shows all transactions with sorting, filtering, and CSV import/export.
- **Expense Tracking:** Add expenses and categorize them into predefined or custom tags.

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/jijojacob988/personal-finance-tracker.git
cd personal-finance-tracker
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Configure Firebase
1. Create a Firebase project at [Firebase Console](https://firebase.google.com/).
2. Enable **Authentication** (Email/Password & Google Sign-in).
3. Enable **Firestore Database** and set up security rules.
4. Get Firebase credentials and update `firebase.js`.

### 4️⃣ Run Development Server
```sh
npm run dev
```
Now, open **http://localhost:3000** in your browser to see the project live.

## 🌐 Deployment
The project can be deployed using **Netlify** or **Vercel**:
1. Push your project to GitHub.
2. Go to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
3. Connect your repository and deploy the project.

## 🤝 Contributing
Pull requests are welcome! If you have any suggestions, feel free to open an issue or contribute to improve the project.

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by **Jijo Jacob**
