// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7Gc6LI3kelRNkYFhdmn4rJmfCXiATT6I",
  authDomain: "shop-web-233bc.firebaseapp.com",
  projectId: "shop-web-233bc",
  storageBucket: "shop-web-233bc.appspot.com", // 👈 must end with .appspot.com
  messagingSenderId: "157576325091",
  appId: "1:157576325091:web:549dd41109a7e8ef11e2d6",
  measurementId: "G-XJKFFTSVMZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
