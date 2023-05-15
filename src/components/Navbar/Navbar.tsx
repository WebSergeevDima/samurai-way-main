import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar: React.FC = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active}  to="/dialogs">Message</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active}  to="/users">Users</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active}  to="/news">News</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active}  to="/music">Music</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active}  to="/setting">Setting</NavLink></div>

            {/*<Sidebar sidebar={props.sidebar}/>*/}
        </nav>


    );
}

export default Navbar;