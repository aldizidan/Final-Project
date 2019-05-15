$('#submitBtn').click(function () {
    /* when the button in the form, display the entered values in the modal */
    $('#nick').text($('#nickname').val());
    $('#msg').text($('#message').val());
});

$('#submit').click(function () {
    /* when the submit button in the modal is clicked, submit the form */
    $('#formfield').submit();
});