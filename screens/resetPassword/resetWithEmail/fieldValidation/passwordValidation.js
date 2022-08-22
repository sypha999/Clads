const ValidatePassword = (password) => {
    if ( password.trim() && password.length >= 6) {
        return true
    } else {
        return false
    };
};
export default ValidatePassword;