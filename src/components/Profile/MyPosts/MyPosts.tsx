import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts: React.FC = () => {
    return (
        <div>
            <div className={s.title}>My posts</div>
            <div>New post</div>
            <Post message={'Post 1'}/>
            <Post message={'Post 2'}/>
        </div>
    );
};

export default MyPosts;