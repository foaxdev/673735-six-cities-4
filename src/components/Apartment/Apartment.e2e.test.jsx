import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Apartment} from "./apartment";
import {expect, it} from '@jest/globals';
import {OFFERS_TITLES} from '../../mock-test';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header button be clicked`, () => {
  const onHeaderButtonClick = jest.fn();

  const main = shallow(
      <Apartment
        offer={OFFERS_TITLES[0]}
        headerClickHandler={onHeaderButtonClick}/>
  );

  const headerButton = main.find(`h2.place-card__name`);
  headerButton.props().onClick();
  expect(onHeaderButtonClick.mock.calls.length).toBe(1);
});
