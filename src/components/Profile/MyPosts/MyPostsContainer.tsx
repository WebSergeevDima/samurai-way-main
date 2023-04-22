import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: any
};


const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(AddPostActionCreator());
    };

    const changeTextareaHandler = (text: string) => {

        if (text) {
            props.store.dispatch(UpdateNewPostTextActionCreator(text));
        }

    }

    return (
        <div>
            <MyPosts changeTextareaHandler={changeTextareaHandler} addPost={addPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
        </div>
    );
};

export default MyPostsContainer;