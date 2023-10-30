let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function() { //Lyssnar efter click på knappen
    
    //Sparar det man skrev i inputfälten i variabel
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    //Om det man skrev matchar admin skickas man till startsidan ("/")
    if (username == "admin" && password == "admin") {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "/";

    //Om det man skrev inte matchar får man ett felmeddelande
    } else {
        alert("Fel användarnamn eller lösenord!")
    }
})