import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configurestore';
import Approuter from './routers/AppRouter';
import { Provider } from 'react-redux';


// setting up redux store
const store = configureStore();

const jsx = (
    <Provider store={store} history={history} >
        <Approuter/>
    </Provider>
);

// mount components to the html page
ReactDOM.render(
	jsx,
	document.getElementById("app")
);
