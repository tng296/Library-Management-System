const passwordLength = 8
const passwordUppercase = /[A-Z]/
const passwordSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/
const passwordIsNumber = /[0-9]/
const PasswordValidation = (password: string) => {
    if (password.length < passwordLength) {
        return false
    }

    if (!passwordUppercase.test(password)) {
        return false
    }


    if (!passwordSpecialCharacter.test(password)) {
        return false
    }

    if (!passwordIsNumber.test(password)) {
        return false
    }

    return true
}



export default PasswordValidation
