import React from "react";
import { shallow } from "enzyme";

import Lobby from './Lobby';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

describe("<Lobby>", () => {
  it("should render Game name", () => {
    const wrapper = shallow(<Lobby />);
    expect(wrapper.find(Navbar).exists()).toBeTruthy();
    expect(wrapper.find(Navbar).text()).toContain("Collab Games");
  });

  it("should render create game block", () => {
    const wrapper = shallow(<Lobby />);
    expect(wrapper.find(Card).length).toBe(2);

    expect(wrapper.find(Card).at(0).find(Card.Img).exists()).toBeTruthy();
  });

  it("should render create room and join room options", () => {
    const wrapper = shallow(<Lobby />);
    const card = wrapper.find(Card).at(1);

    expect(card.find(Button).at(0).text()).toContain("Create Room");
    expect(card.find(Button).at(1).text()).toContain("Join Room");
  });


});