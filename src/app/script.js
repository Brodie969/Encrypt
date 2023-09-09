const form = document.getElementById('add');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    alert(`Name: ${name}\n\nDescription: ${description}`);
});
