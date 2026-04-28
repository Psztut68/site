import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_BUCKET",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("addBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const desc = document.getElementById("desc").value;

  await addDoc(collection(db, "pets"), {
    name,
    price,
    imageUrl,
    description: desc
  });

  alert("Pet added!");
});
