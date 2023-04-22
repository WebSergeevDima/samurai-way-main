import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MyPostsPropsType = {
    store: any
};

const mapStateToProps = (state: any) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(AddPostActionCreator());
        },
        changeTextareaHandler: (text: string) => {

            if (text) {
                dispatch(UpdateNewPostTextActionCreator(text));
            }

        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;