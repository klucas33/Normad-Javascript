const email = document.querySelector('.email_log')
const password = document.querySelector('.password_log')
const button = document.querySelector('button')

function login(e){
    e.preventDefault();
    const email_val = email.value;
    const password_val = password.value;
    localStorage.setItem('email', email_val)
    localStorage.setItem('password', password_val)
}

button.addEventListener('click',login)