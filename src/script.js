const form = document.getElementById('login');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const username = document.getElementById('username').value;
    const key = document.getElementById('key').value;    
    alert(`Name: ${username}\nAccess Key: ${key}`);
});