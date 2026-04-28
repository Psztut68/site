import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

/* 🔐 Firebase config (NOT secret, normal frontend config) */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_BUCKET",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* LOAD PETS */
async function loadPets() {
  const snap = await getDocs(collection(db, "pets"));
  const grid = document.getElementById("petGrid");

  snap.forEach(doc => {
    const pet = doc.data();

    const card = document.createElement("div");
    card.className = "pet-card";

    card.innerHTML = `
      <img src="${pet.imageUrl}" class="pet-img"/>
      <h3>${pet.name}</h3>
      <p>${pet.description}</p>
      <strong>$${pet.price}</strong>
    `;

    grid.appendChild(card);
  });
}

window.addEventListener("load", loadPets);
