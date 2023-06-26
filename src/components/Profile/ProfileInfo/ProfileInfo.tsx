import React from "react";
import './ProfileInfo.module.css';
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props: any) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src={props.profile.photos.large}
                    alt=""/>

            </div>
            <div>
                ava + desc
            </div>
        </div>

    );
};

export default ProfileInfo;