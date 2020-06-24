import { useState, useEffect } from "react";

let useForm = (submitCallback, validateForm) => {
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    console.log("useForm handelSubmit state", state);
    e.preventDefault();
    setErrors(validateForm(state));
    setIsSubmitting(true);
  };

  const handleChange = (name, { nativeEvent }) => {
    setState((state) => ({ ...state, [name]: nativeEvent.text }));
  };

  useEffect(() => {
    console.log("errors length: ", Object.keys(errors).length);

    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitCallback();
    }
  }, [errors]);

  return [state, errors, handleChange, handleSubmit];
};

export default useForm;
