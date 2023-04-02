import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPostType, PostsDataType, UpdateNewPostTextType} from "../../../App";

type MyPostsPropsType = {
    newPostText: string
    postsData: PostsDataType[]
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postTextareaRef = React.createRef<HTMLTextAreaElement>();

    const postsElements = props.postsData.map(item=><Post message={item.message}/> );

    const addPostHandler = () => {
            props.addPost();
    };

    const changeTextareaHandler = () => {
        const newText = postTextareaRef.current?.value;

        if(newText) {
            props.updateNewPostText(newText);
        }

    }

    return (
        <div>
            <div className={s.title}>My posts</div>
            <div>New post</div>
            <div>
                <textarea ref={postTextareaRef} onChange={changeTextareaHandler} value={props.newPostText} />
                <button onClick={addPostHandler}>Add new post</button>
            </div>


            {postsElements}
        </div>
    );
};

export default MyPosts;