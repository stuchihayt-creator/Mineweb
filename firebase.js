import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxWpiz4kJCkuChJckX8e4fg04FI8A6qNs",
  authDomain: "mineweb-7ba71.firebaseapp.com",
  projectId: "mineweb-7ba71",
  storageBucket: "mineweb-7ba71.firebasestorage.app",
  messagingSenderId: "359816018394",
  appId: "1:359816018394:web:2fe1856cc6b72e77c828e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
