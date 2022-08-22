const ValidateEmail = (email)=>{
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    if(emailRegex.test(email)){
        return true 
    }else{
        return false
    };
};
export default ValidateEmail;