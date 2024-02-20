function Validation(values){
    let error = {};
    const password_pattern = /^(?=.*\S).{6,}$/;

    // Validate name
    if (values.name === "") {
        error.name = "Name is required";
    }
    else{
        error.name = ""
    }

    // Validate password
    if (!values.password === "" || !password_pattern.test(values.password)) {
        error.password = "Password must be at least 6 characters";
    }
    else{
        error.password = ""
    }

    return error;
}
export default Validation;