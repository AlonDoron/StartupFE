import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StatusBar, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { loadUser } from "../../actions/auth.action";

const AuthLoading = (props) => {
  useEffect(() => {
    props.loadUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <StatusBar barStyle="default" />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser),
  };
};

export default connect(null, mapDispatchToProps)(AuthLoading);
