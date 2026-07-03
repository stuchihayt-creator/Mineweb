// ===============================
// MineWeb Username System
// ===============================

let username = localStorage.getItem("mineweb_username");

// Agar username nahi hai to pucho
if (!username) {

    username = prompt("👋 Welcome to MineWeb!\n\nEnter your username:");

    while (!username || username.trim() === "") {
        username = prompt("Username cannot be empty!\n\nEnter your username:");
    }

    username = username.trim();

    localStorage.setItem("mineweb_username", username);

    alert("✅ Welcome " + username + "!");

}

// Welcome Text Show

window.onload = function () {

    const welcome = document.getElementById("welcomeText");

    if (welcome) {
        welcome.innerHTML = "👋 Welcome, <b>" + localStorage.getItem("mineweb_username") + "</b>";
    }

};

window.likePost=function(id){
alert("❤️ Like system will be connected in next update.\nPost ID: "+id);
}

window.openComments=function(id){
alert("💬 Comments page coming soon.\nPost ID: "+id);
}
