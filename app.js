var form = document.querySelector("form");
var inputs = document.querySelectorAll(".form__input");
var successMessage = document.querySelector(".success-message");

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

    inputs.forEach(function (input) {
        if (!input.value) {
            addError(input);
            hasErrors = true;
        }
    });

    if (hasErrors) {
        return;
    }

    form.reset();

    showSuccessMessage();
})

function addError(input) {
    var message = input.getAttribute("data-error");
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