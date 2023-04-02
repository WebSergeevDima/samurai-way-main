import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageType, MessagesPageType, UpdateNewMessageTextType} from "../../App";

type DialogsPropsType = {
    messagesPage: MessagesPageType
    addMessage: AddMessageType
    updateNewMessageText: UpdateNewMessageTextType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const messageTextareaRef = React.createRef<HTMLTextAreaElement>();

    const dialogsElements = props.messagesPage.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>);
    const messagesElements = props.messagesPage.messagesData.map(item => <Message message={item.message}/>);

    const addMessageHandler = () => {
        props.addMessage();
    };

    const changeTextareaHandler = () => {
        const newText = messageTextareaRef.current?.value;

        if(newText) {
            props.updateNewMessageText(newText);
        }

    }

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
                        <textarea ref={messageTextareaRef} onChange={changeTextareaHandler} value={props.messagesPage.newMessageText}></textarea>
                        <button onClick={addMessageHandler}>Add new message</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dialogs;