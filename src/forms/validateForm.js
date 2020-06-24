const validateForm = (state) => {
  console.log("validateForm state: ", state);
  const regex = {
    email: /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phoneNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,7}$/im,
  };
  let errors = {};
  if (state.firstName) {
    if (state.firstName.length === 0)
      errors.firstName = "*First Name is required";
  }

  if (state.lastName) {
    if (state.lastName.length === 0) errors.lastName = "*Last Name is required";
  }

  if (state.email) {
    if (state.email.length === 0) errors.email = "*Email is required";
    if (!regex.email.test(state.email))
      errors.email = "*Email address is invalid";
  }

  if (state.phoneNumber) {
    if (state.phoneNumber.length === 0)
      errors.phoneNumber = "*Phone Number is required";
    if (!regex.phoneNumber.test(state.phoneNumber))
      errors.phoneNumber = "*Phone Number is invalid";
  }

  if (state.VerificationCode) {
    if (state.VerificationCode.length < 5)
      errors.VerificationCode = "*Verification Code is required";
  }

  return errors;
};

export default validateForm;
