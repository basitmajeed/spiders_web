const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const button = document.getElementById("button");

function checkForm() {
    if (
        !name.value ||
        !email.value ||
        !phone.value ||
        !password.value ||
        !confirmPass.value
    ) {
        alert("Fill all fields");
        return;
    }

    if (
        isNaN(phone.value) ||
        phone.value < 0 ||
        phone.length < 10 ||
        phone.length > 10
    ) {
        alert("Phone number must be number");
        return;
    }
    if (password.value !== confirmPass.value) {
        alert("Both passwords must be same");
        return;
    }
    alert("Form Submitted successfully");
}
