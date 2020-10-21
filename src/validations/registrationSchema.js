import * as yup from "yup";
import errorMessages from "./errorMessages";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default registrationSchema = yup.object({
  firstName: yup.string().required(errorMessages("firstName")),
  lastName: yup.string().required(errorMessages("lastName")),
  email: yup
    .string()
    .required(errorMessages("email"))
    .email(errorMessages("email", "invalid")),
  phoneNumber: yup
    .string()
    .required(errorMessages("phoneNumber"))
    .matches(phoneRegExp, errorMessages("phoneNumber", "invalid")),
});
