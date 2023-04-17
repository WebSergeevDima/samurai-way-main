import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./redux/reduxStore";

const renderEntireTree = (state: any) => {
    ReactDOM.render(
        <App
            appState={state}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}


renderEntireTree(store.getState())
store.subscribe(()=> {
    let state = store.getState();
    renderEntireTree(state);
});

