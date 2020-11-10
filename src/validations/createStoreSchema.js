import * as yup from "yup";
import errorMessages from "./errorMessages";

export default createStoreSchema = yup.object({
    storeName: yup
        .string()
        .required(errorMessages("storeName"))
});
