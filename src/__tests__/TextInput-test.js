import React from "react";
import { Input } from "../components/common";
import { render, fireEvent } from "@testing-library/react-native";

import renderer from "react-test-renderer";

const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByTestId("text-input");
  return {
    input,
    ...utils,
  };
};

describe("It should display values", () => {
  it("Should display empty value", () => {
    const { input } = setup();

    fireEvent.changeText(input, "");
    expect(input.props.value).toBe("");
  });

  it("Should display `Cherry` value", () => {
    const { input } = setup();
    const string = "Cherry";

    fireEvent.changeText(input, string);
    expect(input.props.value).toBe(string);
  });
});

describe("Render Input", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
