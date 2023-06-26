import React from "react";
import s from "./Post.module.css";
import {NavLink} from "react-router-dom";

type PostPropsType = {
    message: string,
    id: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    <img
                src="https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg"
                alt=""/>
                </NavLink>
                </div>
            <div>{props.message}</div>
        </div>
    );
};

export default Post;