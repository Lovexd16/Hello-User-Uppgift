let checkAdmin = localStorage.getItem('username');

let deleteMemberLinks = document.querySelectorAll(".delete-member-link"); //Hämtar alla element med class "delete-member-link" och gör variabel

if (checkAdmin != 'admin') {
    for (var i = 0; i < deleteMemberLinks.length; i++) { //Ittererar igenom listan som jag gav class "delete-member-link". i används som räknare
        deleteMemberLinks[i].remove(); //Tar bort alla deleteMemberLinks
    }
}

