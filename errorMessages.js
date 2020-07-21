export default errormMessages = (fieldName, errorType = "Required") => {
  return `*${fieldName} is ${errorType} `;
};
