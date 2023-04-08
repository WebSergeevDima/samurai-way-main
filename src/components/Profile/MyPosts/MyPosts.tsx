import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../App";
import {ActionsTypes} from "../../../redux/state";

type MyPostsPropsType = {
    newPostText: string
    postsData: PostsDataType[]
    dispatch: (action: ActionsTypes) => void
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postTextareaRef = React.createRef<HTMLTextAreaElement>();

    const postsElements = props.postsData.map(item => <Post message={item.message}/>);

    const addPostHandler = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    const changeTextareaHandler = () => {
        const newText = postTextareaRef.current?.value;

        if (newText) {
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newPost: newText});
        }

    }

    return (
        <div>
            <div className={s.title}>My posts</div>
            <div>New post</div>
            <div>
                <textarea ref={postTextareaRef} onChange={changeTextareaHandler} value={props.newPostText}/>
                <button onClick={addPostHandler}>Add new post</button>
            </div>


            {postsElements}
        </div>
    );
};

export default MyPosts;