import React from "react";
import './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";
import {ActionsTypes} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} newPostText={props.profilePage.newPostText}
                     postsData={props.profilePage.postsData}/>
        </main>
    );
};

export default Profile;