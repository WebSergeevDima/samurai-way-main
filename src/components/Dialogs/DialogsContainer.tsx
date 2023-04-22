import React from "react";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type DialogsPropsType = {
    store: any
}

const mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(AddMessageActionCreator());
        },
        updateNewMessageText: (text: string) => {
            if (text) {
                dispatch(UpdateNewMessageTextActionCreator(text));
            }
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;