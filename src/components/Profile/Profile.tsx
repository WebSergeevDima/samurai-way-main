import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props: any) => {

    return (
        <>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </>
    );
}

export default Profile;