import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddPostType, PostsDataType} from "../../../App";

type MyPostsPropsType = {
    postsData: PostsDataType[]
    addPost: AddPostType
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postTextareaRef = React.createRef<HTMLTextAreaElement>();

    const postsElements = props.postsData.map(item=><Post message={item.message}/> );

    const addPostHandler = () => {

        if(postTextareaRef.current) {
            props.addPost(postTextareaRef.current.value);
            postTextareaRef.current.value = '';
        }

    };



    return (
        <div>
            <div className={s.title}>My posts</div>
            <div>New post</div>
            <div>
                <textarea ref={postTextareaRef} name="" id=""></textarea>
                <button onClick={addPostHandler}>Add new post</button>
            </div>


            {postsElements}
        </div>
    );
};

export default MyPosts;