import React from "react";
import { Auth } from "../screens/auth";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Auth />).toJSON();
  expect(tree).toMatchSnapshot();
});
