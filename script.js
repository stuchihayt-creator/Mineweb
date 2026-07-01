// Username System

let username = localStorage.getItem("mineweb_username");

if (!username) {
    setTimeout(() => {
        let name = prompt("👋 Welcome to MineWeb!\n\nEnter your username:");

        while (!name || name.trim() === "") {
            name = prompt("Username cannot be empty!");
        }

        localStorage.setItem("mineweb_username", name.trim());

        alert("Welcome " + name + "!");
        location.reload();
    }, 500);
} else {
    console.log("Logged in as: " + username);
}
