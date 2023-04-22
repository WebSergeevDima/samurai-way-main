import React from "react";
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile: React.FC = (props) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    );
};

export default Profile;