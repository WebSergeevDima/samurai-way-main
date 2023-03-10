import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
      <div>
          <NavLink activeClassName={`${s.active}`} to={'/dialogs/' + props.id} className={`${s.dialog}`}>{props.name}</NavLink>
      </div>
    );
}

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
      <div className={s.message}>{props.message}</div>
    );
}

const Dialogs: React.FC = () => {
    return (
        <div>

            <div>Dialog</div>

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Dima" id="1"/>
                    <DialogItem name="Dima2" id="2"/>
                    <DialogItem name="Dima3" id="3"/>
                    <DialogItem name="Dima4" id="4"/>
                    <DialogItem name="Dima5" id="5"/>
                </div>
                <div className={s.dialogsMessages}>
                    <Message message={'Hello!'}/>
                    <Message message={'Hello2222!'}/>
                    <Message message={'Hello333333!'}/>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;