// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCETzkfLCS1JewlfXlegySzKcn3JAQUuG4",
  authDomain: "admin-ee0e0.firebaseapp.com",
  databaseURL: "https://admin-ee0e0-default-rtdb.firebaseio.com",
  projectId: "admin-ee0e0",
  storageBucket: "admin-ee0e0.firebasestorage.app",
  messagingSenderId: "921116435253",
  appId: "1:921116435253:web:7c7512f3436e7a3ffc627c",
  measurementId: "G-1RXXM9Z5HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };