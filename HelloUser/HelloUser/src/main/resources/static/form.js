let checkAdmin = localStorage.getItem('username'); //Hämta username från localStorage
let adminAccess = document.getElementById('adminAccess'); //Hämta element med id adminAccess
let notLoggedInMessage = document.getElementById('notLoggedInMessage'); //Hämta element med id notLoggedInMessage

//Om username är admin visas adminAccess, och notLoggedInMessage tas bort
if (checkAdmin === 'admin') { 
    notLoggedInMessage.remove();

//Om username inte är admin tas element med id adminAccess bort
} else {
    adminAccess.remove();
}
