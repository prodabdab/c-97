function Registerred() {
    Username = document.getElementById("Login_username").value;

    localStorage.setItem("Userame_of_the_prson_KK",Username);

    window.location = "kwitter_room.html";
}