import React, {FC} from 'react';
import style from './Users.module.css';


const Users: FC<any> = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
                pages.push(i);
        }


        return (
            <div>
                <div>
                    {pages.map(item => {
                        return <span onClick={(e)=>props.onPageChanged(item)} className={props.currentPage === item ? style.activePage : ''}>{item}</span>;
                    })}
                </div>
                {props.users.map((item: any) => {
                    return (
                        <div key={item.userId} className={style.userItem}>
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