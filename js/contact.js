function fieldValidation() {

    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email-adress").value;
    const comment = document.getElementById("comment").value;
    const time = document.getElementById("slot").value;


    if (firstName === '') {
        return false;
    }

    if (email === '') {
        return false;
    }

    if (comment === '') {
        return false;
    }

    if (time === '') {
        return false;
    }

    return true;

}


function changeSubmitButtonStatus(validation) {
    const button = document.getElementById('formbutton')
    if (validation) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}


var form = document.querySelector('form');
form.addEventListener('change', function () {
    let valid = fieldValidation()
    console.log(valid)
    changeSubmitButtonStatus(valid);
});