import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';

const AVAILABLE_OFFERS = 10;

ReactDOM.render(
    <App availableOffers={AVAILABLE_OFFERS} />,
    document.querySelector(`#root`)
);
