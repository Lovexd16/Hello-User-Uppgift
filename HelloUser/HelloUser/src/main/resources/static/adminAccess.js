let checkAdmin = localStorage.getItem('username');
let adminAccess = document.getElementById('adminAccess');
let notLoggedInMessage = document.getElementById('notLoggedInMessage');

if (checkAdmin === 'admin') {
    adminAccess.style.display = 'block';
    notLoggedInMessage.style.display = 'none';

} else {
    adminAccess.style.display = 'none';
    notLoggedInMessage.style.display = 'block';
}
