import {ActionsTypes} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Dima2'},
        {id: 3, name: 'Dima3'},
        {id: 4, name: 'Dima4'},
        {id: 5, name: 'Dima5'},
    ],
    messagesData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hello!222'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state:any = initialState, action:any) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            const stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData]

            let newMessage = {
                id: 6,
                message: stateCopy.newMessageText
            }
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            const stateCopy = {...state};
            stateCopy.newMessageText = {...state.newMessageText};

            stateCopy.newMessageText = action.newPost;
            return stateCopy;
        }
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