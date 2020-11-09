import * as yup from "yup";
import errorMessages from "./errorMessages";

export default loginSchema = yup.object({
    storeName: yup
        .string()
        .required(errorMessages("storeName"))
});
