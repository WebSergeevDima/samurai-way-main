import React from "react";
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostType, ProfilePageType, UpdateNewPostTextType} from "../../App";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPosts newPostText={props.profilePage.newPostText} postsData={props.profilePage.postsData} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </main>
    );
};

export default Profile;