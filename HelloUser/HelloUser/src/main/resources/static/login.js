let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "admin") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "/";

    } else {
        alert("Fel användarnamn eller lösenord!")
    }
})