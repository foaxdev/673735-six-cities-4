import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';

const AVAILABLE_OFFERS = 10;
const OFFERS_TITLES = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];
const HEADER_CLICK_HANDLER = () => {};

ReactDOM.render(
    <App availableOffers={AVAILABLE_OFFERS} offers={OFFERS_TITLES} headerClickHandler={HEADER_CLICK_HANDLER} />,
    document.querySelector(`#root`)
);
