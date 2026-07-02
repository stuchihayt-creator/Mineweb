import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

window.uploadPost = async function () {

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const version = document.getElementById("version").value;
  const username = localStorage.getItem("mineweb_username");

  if (!title || !description) {
    alert("Please fill all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "posts"), {
      title,
      description,
      category,
      version,
      username,
      createdAt: Date.now()
    });

    alert("✅ Post uploaded successfully!");

  } catch (e) {
    alert("Upload failed!");
    console.error(e);
  }

};
