import React, {FC} from 'react';
import style from './Users.module.css';

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (id: number) => void
    users: Array<any>
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const Users: FC<UsersType> = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
                pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map((item) => {
                        return <span key={item} onClick={(e)=>props.onPageChanged(item)} className={props.currentPage === item ? style.activePage : ''}>{item}</span>;
                    })}
                </div>
                {props.users.map((item: any) => {
                    return (
                        <div key={item.id} className={style.userItem}>
                            <div>
                                <img src={item.photo} className={style.userItem__image}/>
                                {item.isFollow ?
                                    <button onClick={() => props.unfollow(item.id)}>UNFOLLOW</button> :
                                    <button onClick={() => props.follow(item.id)}>FOLLOW</button>}
                            </div>
                            <div>
                                <div>{item.name}</div>
                                {/*<div>{item.location.city}</div>*/}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    
};


export default Users;