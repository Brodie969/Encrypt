const form = document.getElementById('add');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    alert(`Name: ${name}\n\nDescription: ${description}`);
});

// Testing Variables:
let name = "Example Task";
let description = "This is an example task I made.";

$(document).ready(function () {
    var tasks = $("#tasks");
    var newTask = $(`<h5>${name}</h5>`);
    var newDescription = $(`<p>${description}</p>`);
    tasks.append(newTask);
    tasks.append(newDescription);
});
