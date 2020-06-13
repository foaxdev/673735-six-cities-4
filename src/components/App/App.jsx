import React from 'react';
import {Main} from '../Main/Main';

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {availableOffers} = props;
  return <Main availableOffers={availableOffers} />;
};
