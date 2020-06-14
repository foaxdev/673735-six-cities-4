import React from 'react';
import renderer from 'react-test-renderer';
import {AVAILABLE_OFFERS, OFFERS_TITLES} from '../../mock-test';
import {App} from './App';
import {expect, it} from '@jest/globals';

it(`Should render App screen correctly`, () => {
  const tree = renderer
    .create(
        <App
          availableOffers={AVAILABLE_OFFERS}
          offers={OFFERS_TITLES}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
