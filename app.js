var form = document.querySelector("form");
var successMessage = document.querySelector(".success-message");
var nameInput = document.getElementById("name");
var dateOfBirthInput = document.getElementById("dateOfBirth");
var emailInput = document.getElementById("email");
var cityInput = document.getElementById("city");

var inputs = [
    nameInput,
    dateOfBirthInput,
    emailInput,
    cityInput,
];

inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
        clearError(input);
        hideSuccessMessage();
    });
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var hasErrors = false;

    clearAllErrors();
    hideSuccessMessage();

    if (!nameInput.value) {
        addError(nameInput, "Por favor preencha seu nome");
        hasErrors = true;
    }

    if (!dateOfBirthInput.value) {
        addError(dateOfBirthInput, "Por favor preencha sua data de nascimento");
        hasErrors = true;
    }

    if (!emailInput.value) {
        addError(emailInput, "Por favor preencha seu email");
        hasErrors = true;
    }

    if (!cityInput.value) {
        addError(cityInput, "Por favor preencha sua cidade");
        hasErrors = true;
    }

    if (hasErrors) {
        return;
    }

    form.reset();

    showSuccessMessage();
})

function addError(input, message) {
    var div = document.createElement("div");

    div.classList.add("error-message");
    div.innerHTML = message;

    input.classList.add("invalid");
    input.parentElement.append(div);
}

function clearAllErrors() {
    inputs.forEach(function (input) {
        clearError(input);
    });
}

function clearError(input) {
    var errorMessage = input.parentElement.querySelector(".error-message");

    if (errorMessage) {
        errorMessage.remove();
    }

    input.classList.remove("invalid");
}

function showSuccessMessage() {
    successMessage.classList.add("is-visible");
}

function hideSuccessMessage() {
    successMessage.classList.remove("is-visible");
}