import { useState } from "react";

let useForm = (submitCallback) => {
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  const handleChange = (name, { nativeEvent }) => {
    setState((state) => ({ ...state, [name]: nativeEvent.text }));
  };

  return [state, handleChange, handleSubmit];
};

export default useForm;
