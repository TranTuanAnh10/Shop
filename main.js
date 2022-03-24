document.getElementById("register-click").onclick = function () {
    document.getElementById("register").style.display = 'block';
};
document.getElementById("login-click").onclick = function () {
    document.getElementById("login").style.display = 'block';
};
document.getElementById("back-register").onclick = function () {
    document.getElementById("register").style.display = 'none';
};
document.getElementById("back-login").onclick = function () {
    document.getElementById("login").style.display = 'none';
};
document.getElementById("btn-login").onclick = function () {
    document.getElementById("login").style.display = 'block';
    document.getElementById("register").style.display = 'none';
};
document.getElementById("btn-register").onclick = function () {
    document.getElementById("register").style.display = 'block';
    document.getElementById("login").style.display = 'none';
};