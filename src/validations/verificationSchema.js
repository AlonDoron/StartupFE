import * as yup from "yup";
import errorMessages from "./errorMessages";

export default verificationSchema = yup.object({
  VerificationCode: yup
    .string()
    .required(errorMessages("verificationCode"))
    .min(5, errorMessages("verificationCode", "invalid"))
    .max(5, errorMessages("verificationCode", "invalid")),
});
