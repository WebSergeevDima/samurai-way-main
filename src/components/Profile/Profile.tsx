import React from "react";
import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: any
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </main>
    );
};

export default Profile;