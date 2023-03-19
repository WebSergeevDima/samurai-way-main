import React from "react";
import s from './Sidebar.module.css'
import {SidebarType} from "../../App";

type SidebarPropsType = {
    sidebar: SidebarType[]
}

const Sidebar: React.FC<SidebarPropsType> = (props) => {
    
    const sidebarElements = props.sidebar.map(item => {
        return (
            <div>
                <div><img src={item.img} alt=""/></div>
                <div>{item.name}</div>
            </div>
        )
    });
    
    return (
        <div className={s.sidebar}>
            {sidebarElements}
        </div>
    );

}

export default Sidebar;
