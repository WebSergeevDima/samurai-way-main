import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsDataType} from "../../../App";

type MyPostsPropsType = {
    postsData: PostsDataType[]
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.postsData.map(item=><Post message={item.message}/> );

    return (
        <div>
            <div className={s.title}>My posts</div>
            <div>New post</div>
            {postsElements}
        </div>
    );
};

export default MyPosts;