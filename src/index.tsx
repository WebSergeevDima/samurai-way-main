import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

const renderEntireTree = (state: any) => {
    ReactDOM.render(
        <App
            appState={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}


renderEntireTree(store.getState())
store.subscribe(renderEntireTree);
