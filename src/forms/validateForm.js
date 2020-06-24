const validateForm = (state, from) => {
  const regex = {
    email: /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phoneNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,7}$/im,
  };
  const message = (inputField, errorType = "required") => {
    return `*${inputField} is ${errorType}`;
  };
  let errors = {};
  if (from === "login") {
    if (!state.phoneNumber) errors.phoneNumber = message("Phone Number");
    else if (state.phoneNumber && !regex.phoneNumber.test(state.phoneNumber))
      errors.phoneNumber = message("Phone Number", "invalid");
  } else if (from === "registraion") {
    if (!state.firstName) errors.firstName = message("First Name");
    if (!state.lastName) errors.lastName = message("Last Name");
    if (!state.email) errors.email = message("Email address");
    else if (state.email && !regex.email.test(state.email))
      errors.email = message("Email address", "invalid");
    if (!state.phoneNumber) errors.phoneNumber = message("Phone Number");
    else if (state.phoneNumber && !regex.phoneNumber.test(state.phoneNumber))
      errors.phoneNumber = message("Phone Number", "invalid");
  } else if (from === "verifyAuth") {
    if (!state.VerificationCode)
      errors.VerificationCode = message("Verification Code");
    else if (state.VerificationCode && state.VerificationCode.length < 5)
      errors.VerificationCode = message("Verification Code", "invalid");
  }

  return errors;
};

export default validateForm;
