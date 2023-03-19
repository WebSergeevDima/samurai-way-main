import React from "react";
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../App";

type ProfilePropsType = {
    postsData: PostsDataType[]
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </main>
    );
};

export default Profile;