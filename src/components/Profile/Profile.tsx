import React from "react";
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, PostsDataType} from "../../App";

type ProfilePropsType = {
    postsData: PostsDataType[]
    addPost: AddPostType
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </main>
    );
};

export default Profile;