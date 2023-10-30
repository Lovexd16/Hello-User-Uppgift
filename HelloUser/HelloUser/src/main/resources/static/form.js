let checkAdmin = localStorage.getItem('username'); //Hämta username från localStorage
let adminAccess = document.getElementById('adminAccess'); //Hämta element med id adminAccess
let notLoggedInMessage = document.getElementById('notLoggedInMessage'); //Hämta element med id notLoggedInMessage

//Om username är admin visas adminAccess, och notLoggedInMessage döljs
if (checkAdmin === 'admin') { 
    adminAccess.style.display = 'block';
    notLoggedInMessage.style.display = 'none';

//Om username inte är admin döljs adminAccess och notLoggedInMessage visas
} else {
    adminAccess.style.display = 'none';
    notLoggedInMessage.style.display = 'block';
}
