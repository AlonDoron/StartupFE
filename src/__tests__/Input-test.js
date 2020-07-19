import React from "react";
import { Input } from "../components/common";
import { mount } from "enzyme";

import renderer from "react-test-renderer";

describe("Render Input", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
