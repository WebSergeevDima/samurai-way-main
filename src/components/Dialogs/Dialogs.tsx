import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../App";

type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const meffageTextareaRef = React.createRef<HTMLTextAreaElement>();

    const dialogsElements = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);
    const messagesElements = props.messagesData.map(item => <Message message={item.message}/>);



    const addMessageHandler = () => {
        let text = meffageTextareaRef.current?.value;
        alert(text);
    };

    return (
        <div>

            <div>Dialog</div>

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.dialogsMessages}>
                    {messagesElements}

                    <div>
                        <textarea ref={meffageTextareaRef}></textarea>
                        <button onClick={addMessageHandler}>Add new message</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dialogs;