var personArr = [];

let person = {
    firstName: "first",
    lastName: "last",
    age: 30,
    password: "1234"
};
personArr.push(person);

document.addEventListener('submit', registerSubmit);

function registerSubmit(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = Number(document.getElementById("age").value);
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;

    let lNameValid = lastNameValidation(lastName);
    let ageValid = ageValidation(age);
    let passValid = passwordValidation(pass1, pass2);

    if (lNameValid == '' && ageValid == '' && passValid == '') {
        let person = { firstName, lastName, age, password1: pass1 };
        personArr.push(person);
    }
    else {
        errorDesc = '';
        if (lNameValid != '') errorDesc += lNameValid + ',\n';
        if (ageValid != '') errorDesc += ageValid + ',\n';
        if (passValid != '') errorDesc += passValid + ',\n';
        errorDesc = errorDesc.substring(0, errorDesc.length - 2);
        alert(errorDesc);
    }

    console.log(personArr);
}

function lastNameValidation(lastName) {
    if (isIncludes(lastName.toLowerCase(), 't')) {
        return 'Last Name should not include letter \'t\' or \'T\'';
    }
    else {
        return '';
    }
}

function ageValidation(age) {
    if (isGreaterEqual(age, 18)) {
        return '';
    }
    else {
        return 'Age needs to be equal to or greater than 18';
    }
}

function passwordValidation(pass1, pass2) {
    if (pass1 === pass2 && pass1 !== '') {
        return '';
    }
    else {
        return 'Password is not valid'
    }
}