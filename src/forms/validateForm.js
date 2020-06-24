const validateForm = (state, from) => {
  const regex = {
    email: /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phoneNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,7}$/im,
  };
  let errors = {};
  if (from === "login") {
    if (!state.phoneNumber) errors.phoneNumber = "*Phone Number is required";
    else if (state.phoneNumber && !regex.phoneNumber.test(state.phoneNumber))
      errors.phoneNumber = "*Phone Number is invalid";
  } else if (from === "registraion") {
    if (!state.firstName) errors.firstName = "*First Name is required";
    if (!state.lastName) errors.lastName = "*Last Name is required";
    if (!state.email) errors.email = "*Email address is required";
    else if (state.email && !regex.email.test(state.email))
      errors.email = "*Email address is invalid";
    if (!state.phoneNumber) errors.phoneNumber = "*Phone Number is required";
    else if (state.phoneNumber && !regex.phoneNumber.test(state.phoneNumber))
      errors.phoneNumber = "*Phone Number is invalid";
  } else if (from === "verifyAuth") {
    if (!state.VerificationCode)
      errors.VerificationCode = "*Verification Code is required";
    else if (state.VerificationCode && state.VerificationCode.length < 5)
      errors.VerificationCode = "*Verification Code is invalid";
  }

  return errors;
};

export default validateForm;
