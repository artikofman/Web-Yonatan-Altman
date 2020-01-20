$(document).ready(setEventListeners);

function setEventListeners() {
    let emailElem = $("#volunt-email");
    emailElem.keypress(() => {initInputBox(emailElem);});
    emailElem.blur(validateEmail);
}

function validateEmail() {
    let emailElem = $("#volunt-email");
    if (emailElem.val() !== ""  &&  !isValidEmail(emailElem.val())) {
        markInvalid(emailElem);
    }
}

function markInvalid(inputBox) {
    $(inputBox).css({"border-width": "1.5px", "border-color": "red"});
}

function initInputBox(inputBox) {
    $(inputBox).css({"border-width": "2px", "border-color": "initial"});
}