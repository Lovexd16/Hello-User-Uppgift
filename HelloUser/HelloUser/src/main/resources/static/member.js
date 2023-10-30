let checkAdmin = localStorage.getItem('username');

let deleteMemberLinks = document.querySelectorAll(".delete-member-link"); //Hämtar alla element med class "delete-member-link" och gör variabel

if (checkAdmin === 'admin') {
    for (var i = 0; i < deleteMemberLinks.length; i++) { //Ittererar igenom listan som jag gav class "delete-member-link där i används som räknare."
        deleteMemberLinks[i].style.display = "inline"; //Ändrar style till inline för varje element som hämtades
    }
} else {
    for (var i = 0; i < deleteMemberLinks.length; i++) {
        deleteMemberLinks[i].style.display = "none"; //Ändrar style till none för varje element som hämtades. Alltså döljs.
    }
}