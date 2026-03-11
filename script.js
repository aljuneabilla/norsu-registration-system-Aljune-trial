function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === "admin" && password === "admin123"){
        document.getElementById('loginPage').style.display = 'none';
        document.querySelector('.admin-panel').style.display = 'block';
    } else {
        alert("Incorrect username or password!");
    }
}
