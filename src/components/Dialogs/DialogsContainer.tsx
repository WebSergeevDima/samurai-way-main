import React from "react";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: any
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState().messagesPage;

    const addMessage = () => {
        props.store.dispatch(AddMessageActionCreator());
    };

    const updateNewMessageText = (text: string) => {

        if (text) {
            props.store.dispatch(UpdateNewMessageTextActionCreator(text));
        }

    }

    return (
        <Dialogs messagesPage={state} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
    );
}

export default DialogsContainer;