import React from 'react';
import renderer from 'react-test-renderer';
import {Apartment} from "./apartment";
import {expect, it} from '@jest/globals';
import {AVAILABLE_OFFERS, HEADER_CLICK_HANDLER} from '../../mock-test';

it(`Should render Apartment item correctly`, () => {
  const tree = renderer
    .create(<Apartment
      offer={AVAILABLE_OFFERS[0]}
      onHeaderButtonClick={HEADER_CLICK_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
