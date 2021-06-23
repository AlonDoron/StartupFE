import i18n from "../i18n";

const errorMessages = (fieldName, errorType = "required") => {
  return i18n.t(`errors.${fieldName}_is_${errorType}`);
};

export default errorMessages;
