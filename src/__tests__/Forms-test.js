import React from "react";
import { Input } from "../components/common";
import { RegistrationForm, LoginForm, VerifyAuthForm } from "../forms";
import { render, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
