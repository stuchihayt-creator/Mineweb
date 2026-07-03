import { db } from "./firebase.js";

import {
collection,
query,
where,
getDocs,
addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

async function registerUsername(){

let username = localStorage.getItem("mineweb_username");

if(username) return;

while(true){

username = prompt("Enter Username");

if(!username) continue;

username = username.trim();

const q = query(
collection(db,"users"),
where("username","==",username)
);

const snap = await getDocs(q);

if(snap.empty){

await addDoc(collection(db,"users"),{
username:username
});

localStorage.setItem("mineweb_username",username);

alert("Welcome "+username);

location.reload();

break;

}else{

alert("❌ Username already taken!");

}

}

}

registerUsername();
