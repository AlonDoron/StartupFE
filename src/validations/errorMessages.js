const errorMessages = (fieldName, errorType = "required") => {
  return `*${fieldName} is ${errorType} `;
};

export default errorMessages;
