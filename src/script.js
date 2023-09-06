const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;    
    alert(`Name: ${name}\nEmail: ${email}`);
});