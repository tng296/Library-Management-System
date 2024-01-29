const passwordValidationRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).{8,}$/

const passwordValidation = (password: string) => {
    return passwordValidationRegex.test(password);
}

export default passwordValidation;
