const form = document.getElementById('add');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    //alert(`Name: ${name}\n\nDescription: ${description}`);
    $.add(name, description);
});

$.add = function (taskName, taskDescription) {
    let tasks = $("#tasks");
    let title = $(`<h4>${taskName}</h4>`);
    let desc = $(`<p>${taskDescription}</p>`);
    let line = $("<hr>");
    tasks.append(title);
    tasks.append(desc);
    tasks.append(line);
};
