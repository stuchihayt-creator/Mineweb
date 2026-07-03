import { db } from "./firebase.js";

import {
collection,
getDocs,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const postsDiv = document.getElementById("posts");

async function loadPosts(){

const q = query(collection(db,"posts"),orderBy("createdAt","desc"));

const snap = await getDocs(q);

postsDiv.innerHTML="";

snap.forEach(doc=>{

const p=doc.data();

postsDiv.innerHTML+=`

<div class="card">

<h2>${p.title}</h2>

<p>${p.description}</p>

<p><b>Category:</b> ${p.category}</p>

<p><b>Version:</b> ${p.version}</p>

<p>👤 ${p.username}</p>

</div>

`;

});

}

loadPosts();

<div class="actions">
<button onclick="likePost('${doc.id}')">❤️ Like</button>
<button onclick="openComments('${doc.id}')">💬 Comments</button>
</div>
