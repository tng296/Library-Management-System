const passwordLength = 8;
const passwordUppercase = /[A-Z]/;
const passwordSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
const passwordIsNumber = /[0-9]/;

const PasswordValidation = (password: string) => {
    return password.length >= passwordLength &&
        passwordUppercase.test(password) &&
        passwordSpecialCharacter.test(password) &&
        passwordIsNumber.test(password);
}

export default PasswordValidation;
