function validateForm() {

    let x = document.forms["myForm"]["pass"].value;
    let y = document.forms["myForm"]["cpass"].value;
    if (x!=y) {
        alert("Passwords Do Not Match");
        return false;
    }
    location.reload

}
