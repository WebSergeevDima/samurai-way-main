import {ActionsTypes} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [
        {id: 1, message: 'Post 1', likeCount: 0},
        {id: 2, message: 'Post 2', likeCount: 0},
        {id: 3, message: 'Post 3', likeCount: 0},
    ],
    newPostText: ''
};

const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPost;
            return state;
        default:
            return state;
    }
}

export const AddPostActionCreator = (): ActionsTypes => {
    return {
        type: ADD_POST
    };
}

export const UpdateNewPostTextActionCreator = (newText: string): ActionsTypes => {
    return {type: UPDATE_NEW_POST_TEXT, newPost: newText};
}

export default profileReducer;