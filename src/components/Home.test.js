import React from "react";
import { shallow, configure } from "enzyme";
import Home from "./Home";
import Adapter from "enzyme-adapter-react-16";
import AppButton from "../common/components/AppButton";
import Chart from "../common/components/Chart";
import Loader from "../common/components/Loader";

configure({ adapter: new Adapter() });

describe("Home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it("should render home", () => {
    expect(wrapper.find(".home-container")).toHaveLength(1);
  });
  it("should display loader when data is not present", () => {
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
  it("should render type button", () => {
    expect(wrapper.find(AppButton)).toHaveLength(1);
  });
});
