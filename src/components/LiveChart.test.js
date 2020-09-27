import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AppButton from "../common/components/AppButton";
import Loader from "../common/components/Loader";
import LiveChart from "./LiveChart";

configure({ adapter: new Adapter() });

describe("Live Charts", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LiveChart />);
  });
  it("should render home", () => {
    expect(wrapper.find(".live-chart-container")).toHaveLength(1);
  });
  it("should display loader when data is not present", () => {
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
  it("should render type button", () => {
    expect(wrapper.find(AppButton)).toHaveLength(1);
  });
});
