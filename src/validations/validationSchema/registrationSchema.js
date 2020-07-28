import * as yup from "yup";
import errorMessages from "../errorMessages";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default registrationSchema = yup.object({
  firstName: yup.string().required(errorMessages("First Name")),
  lastName: yup.string().required(errorMessages("Last Name")),
  email: yup
    .string()
    .required(errorMessages("Email"))
    .email(errorMessages("Email", "Invalid")),
  phoneNumber: yup
    .string()
    .required(errorMessages("Phone Number"))
    .matches(phoneRegExp, errorMessages("Phone Number", "Invalid")),
});
