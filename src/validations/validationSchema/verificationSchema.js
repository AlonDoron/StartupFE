import * as yup from "yup";
import errorMessages from "../errorMessages";

export const verificationSchema = yup.object({
  VerificationCode: yup
    .string()
    .required(errorMessages("Verification Code"))
    .min(5)
    .max(5),
});
