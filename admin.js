import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const addBtn = document.getElementById("addProductBtn");

addBtn.addEventListener("click", async () => {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const image = document.getElementById("productImage").value;

  if (!name || !price || !image) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  try {
    await addDoc(collection(db, "products"), {
      name: name,
      price: price,
      image: image
    });
    alert("✅ Product added successfully!");
  } catch (error) {
    console.error("Error adding product: ", error);
    alert("❌ Failed to add product.");
  }
});
