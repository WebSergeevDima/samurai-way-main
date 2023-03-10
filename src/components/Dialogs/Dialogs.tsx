import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs: React.FC = () => {
    return (
        <div>

            <div>Dialog</div>

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <NavLink activeClassName={`${s.active}`} to={'/dialogs/1'} className={`${s.dialog}`}>1</NavLink>
                    <NavLink activeClassName={`${s.active}`} to={'/dialogs/2'} className={s.dialog}>2</NavLink>
                    <NavLink activeClassName={`${s.active}`} to={'/dialogs/3'} className={s.dialog}>3</NavLink>
                    <NavLink activeClassName={`${s.active}`} to={'/dialogs/4'} className={s.dialog}>4</NavLink>
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