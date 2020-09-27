import React from "react";
import { shallow, configure } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { Container } from "@material-ui/core";
import Dashboard from "./components/Dashboard";
configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render self and sub components", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Container)).toHaveLength(1);
  });
});
