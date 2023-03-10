import React from "react";
import s from './Dialogs.module.css';

const Dialogs: React.FC = () => {
    return (
        <div>

            <div>Dialog</div>

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={`${s.dialog} ${s.active}`}>11</div>
                    <div className={s.dialog}>11</div>
                    <div className={s.dialog}>11</div>
                </div>
                <div className={s.dialogsMessages}>
                    <div className={s.message}>22</div>
                    <div className={s.message}>22</div>
                    <div className={s.message}>22</div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;