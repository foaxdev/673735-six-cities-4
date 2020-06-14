import React from 'react';
import PropTypes from "prop-types";
import {Main} from '../Main/Main';

export const App = (props) => {
  const {availableOffers, offers, headerClickHandler} = props;
  return <Main availableOffers={availableOffers} offers={offers} headerClickHandler={headerClickHandler} />;
};

App.propTypes = {
  availableOffers: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  headerClickHandler: PropTypes.func.isRequired
};
