const firstnameEl = document.querySelector('#firstname');
const addressEl = document.querySelector('#address');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const phoneEl = document.querySelector('#phone');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const lastnameEl = document.querySelector('#lastname');
const cityEl = document.querySelector('#city');
const zipcodeEl = document.querySelector('#zipcode');



const form = document.querySelector('#signup');

const checkFirstname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const firstname = firstnameEl.value.trim();

    if (!isRequired(firstname)) {
        showError(firstnameEl, 'First name cannot be blank.');
    } else if (!isBetween(firstname.length, min, max)) {
        showError(firstnameEl, `First name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};

const checkLastname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const lastname = lastnameEl.value.trim();

    if (!isRequired(lastname)) {
        showError(lastnameEl, 'Last name cannot be left blank.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, `Last name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(lastnameEl);
        valid = true;
    }
    return valid;
};

const checkCity = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const city = cityEl.value.trim();

    if (!isRequired(city)) {
        showError(cityEl, 'City field cannot be left blank.');
    } else if (!isBetween(lastname.length, min, max)) {
        showError(cityEl, `City must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(cityEl);
        valid = true;
    }
    return valid;
};

const checkAddress = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const address = addressEl.value.trim();

    if (!isRequired(address)) {
        showError(addressEl, 'Address field cannot be left blank.');
    } else if (!isBetween(address.length, min, max)) {
        showError(addressEl, `Address must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(addressEl);
        valid = true;
    }
    return valid;
};

const checkZipcode = () => {

    let valid = false;

    const min = 5,
        max = 5;

    const zipcode = zipcodeEl.value.trim();

    if (!isRequired(zipcode)) {
        showError(zipcodeEl, 'Zipcode field cannot be left blank.');
    } else if (!isBetween(zipcode.length, min, max)) {
        showError(zipcodeEl, `Zipcode must be ${max} characters.`)
    } else {
        showSuccess(zipcodeEl);
        valid = true;
    }
    return valid;
};



const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};



const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid. Requires an @ symbol, a domain name, and a top level domain such as .com. ')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPhone = () => {
    let valid = false;
    const phone = phoneEl.value.trim();
    if (!isRequired(phone)) {
        showError(phoneEl, 'Phone field cannot be left blank.');
    } else if (!isPhoneValid(phone)) {
        showError(phoneEl, 'Enterd phone number is not valid. Valid phone formats include 123-456-7890, 1234567890, and 123 456 7890')
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};
const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isPhoneValid = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhone(),
        isCityValid = checkCity(),
        isZipcodeValid = checkZipcode(),
        isAddressValid = checkAddress(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword(),
        isFirstnamevalid = checkFirstname(),
        isLastnamevalid = checkLastname();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isCityValid &&
        isZipcodeValid &&
        isAddressValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isFirstnamevalid &&
        isPhoneValid &&
        isLastnamevalid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
            case 'firstname':
                checkFirstname();
                break;
                case 'lastname':
                    checkLastname();
                    break;
        case 'email':
            checkEmail();
            break;
        case 'phone':
                checkPhone();
                break;

        case 'city':
                checkCity();
                break;

        case 'zipcode':
              checkZipcode();
              break;

        case 'address':
                checkAddress();
                break;

        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
