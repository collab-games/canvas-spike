import React from "react";
import { shallow } from "enzyme";

import Lobby from './Lobby';
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'

describe("<Lobby>", () => {
  it("should render Game name", () => {
    const wrapper = shallow(<Lobby />);
    expect(wrapper.find(Navbar).exists()).toBeTruthy();
    expect(wrapper.find(Navbar).text()).toContain("Collab Games");
  });

  it("should render create game block", () => {
    const wrapper = shallow(<Lobby />);
    expect(wrapper.find(Card).exists()).toBeTruthy();
  });

});