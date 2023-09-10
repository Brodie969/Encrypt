const form = document.getElementById('encrypt');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const key = document.getElementById('key').value;
    const text = document.getElementById('content').value;
    $.update();
});

$.update = function () {
    let input = $("#content").val();
    $("#encryptout").val(input);
};
