function register() {
    user = "";
    user = document.getElementById("username").value;
    localStorage.setItem("u", user);
    window.location = "kwitter_room.html"
}