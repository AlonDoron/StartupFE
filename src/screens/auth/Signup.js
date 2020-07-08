import React from "react";
import { View } from "react-native";
import SignupForm from "../../forms/SignupForm";
import { checkIfUserExists } from "../../api/wrappers/authService";

const Signup = (props) => {
  const handleSubmitForm = (vals) => {
    checkIfUserExists("Registration", { phoneNumber: vals.phoneNumber })
      .then((result) => {
        if (result) {
          props.navigation.navigate("Login");
        } else {
          props.navigation.navigate("VerifyAuth", {
            vals: vals,
            sentFrom: "Registration",
          });
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <View>
      <SignupForm submitForm={handleSubmitForm} submitting={false} />
    </View>
  );
};

export default Signup;
