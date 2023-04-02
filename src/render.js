import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

export const renderEntireTree = (state) => {
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

