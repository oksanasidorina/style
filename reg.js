
document.getElementById('registerButton').addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = {
        email, 
        password
    }

    fetch('/register', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => console.log(response))
})