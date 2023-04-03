import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

const renderEntireTree = (state: any) => {
    ReactDOM.render(
        <App
            appState={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
        />,
        document.getElementById('root')
    );
}


renderEntireTree(state)
subscribe(renderEntireTree);
