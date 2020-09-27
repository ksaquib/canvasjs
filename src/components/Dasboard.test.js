import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dashboard from "./Dashboard";
import AppTab from "./AppTab";

configure({ adapter: new Adapter() });

describe("Home", () => {
  it("should render AppBar", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(AppTab)).toHaveLength(1);
  });
});
