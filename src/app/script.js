const form = document.getElementById('send');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('content').value;
    alert(`You are about to send a message, as follows: Subject: ${subject}\n\nDescription: ${text}`);
    $.update(subject, text);
});

$.update = function (subject, text) {
    let messageArea = $("#message");
    let title = $(`<h4>${subject}</h4>`);
    let desc = $(`<p>${text}</p>`);
    messageArea.append(title);
    messageArea.append(desc);
};
