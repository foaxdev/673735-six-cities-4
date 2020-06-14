import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';

const AVAILABLE_OFFERS = 10;
const OFFERS_TITLES = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

ReactDOM.render(
    <App availableOffers={AVAILABLE_OFFERS} offers={OFFERS_TITLES} />,
    document.querySelector(`#root`)
);
