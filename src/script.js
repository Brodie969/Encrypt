const form = document.getElementById('login');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const username = document.getElementById('name').value;
    const key = document.getElementById('key').value;
    password = hash(key);
    alert(`Name: ${username}\nAccess Key: ${key}\nHashed Key: ${password}`);

});

function hash(key) {
    let password = ""
    key = key.split("").reverse().join("");
    for (let i = 0; i < key.length; i++) {
        char = key[i];
        password = password.concat(char.charCodeAt(0).toString(2));
    }
    return password;
}
