window.onload = main;



function main() {
    console.log('mounted');
    document.getElementById('logInForm').addEventListener('submit', handleLogin);

}

function handleLogin(e) {

    var userName =  document.getElementById('userName').value;
    var password =  document.getElementById('password').value;

    var valid = true;

    if(!userName) {
        document.getElementById("nameRequired").style.display = "block";
        e.preventDefault();
    }
    
    



}