import * as yup from "yup";
import errorMessages from "./errorMessages";

export default addItemSchema = yup.object({
  ItemName: yup.string().required(errorMessages("storeName")),
  ItemPrice: yup.number().required(errorMessages("storeName")),
  ItemDescription: yup.string().required(errorMessages("storeName")),
});
