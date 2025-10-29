import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productList = document.getElementById("productList");

async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  productList.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    productList.innerHTML += `
      <div style="border:1px solid #ddd; padding:10px; margin:10px; width:150px;">
        <img src="${product.image}" width="100%">
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
      </div>
    `;
  });
}

loadProducts();
