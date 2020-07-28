import * as yup from "yup";
import errorMessages from "../errorMessages";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default loginSchema = yup.object({
  phoneNumber: yup
    .string()
    .required(errorMessages("Phone Number"))
    .matches(phoneRegExp, errorMessages("Phone Number", "Invalid")),
});
