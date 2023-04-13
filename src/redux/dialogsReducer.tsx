import {ActionsTypes} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state:any, action:any) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newPost;
            return state;
        default:
            return state;
    }

}


export const AddMessageActionCreator = ():ActionsTypes  => {
    return {
        type: ADD_MESSAGE
    };
}

export const UpdateNewMessageTextActionCreator = (newText: string):ActionsTypes  => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newPost: newText};
}


export default dialogsReducer;