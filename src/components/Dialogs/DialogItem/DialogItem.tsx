import React from "react";
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div>
            <NavLink activeClassName={`${s.active}`} to={'/dialogs/' + props.id}
                     className={`${s.dialog}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;