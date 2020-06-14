import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './Main';
import {AVAILABLE_OFFERS, OFFERS_TITLES} from '../../mock-test';
import {expect, it} from '@jest/globals';

it(`Should render Main screen correctly`, () => {
  const tree = renderer
    .create(
        <Main
          availableOffers={AVAILABLE_OFFERS}
          offers={OFFERS_TITLES}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
