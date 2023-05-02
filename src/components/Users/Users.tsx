import React from 'react';
import style from './Users.module.css';
import axios from "axios";


const KEY = '523d0f3c-d82a-44a9-a924-328d6a4a9c04';

export const instance = axios.create({
    withCredentials: true,
    headers:     {
        "API-KEY": KEY
    }
});


const Users = (props:any) => {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

        if(response.data.items === 0) {
            props.setUsers(response.data.items);
        }

    });

    // if(props.users.length === 0) {
    //
    //     props.setUsers([
    //         {id: 1, photo: 'https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg', isFollow: true, fullName: 'Name 1', status: 'My status', location: {city: 'Moscow', country: 'Russia'}},
    //         {id: 2, photo: 'https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg', isFollow: true, fullName: 'Name 2', status: 'My status 2', location: {city: 'Moscow 2', country: 'Russia 2'}},
    //         {id: 3, photo: 'https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg', isFollow: false, fullName: 'Name 3', status: 'My status 3', location: {city: 'Moscow 3', country: 'Russia 3'}},
    //     ]);
    //
    // }


    return (
        <div>
            {props.users.map((item:any) => {
                return (
                    <div key={item.userId} className={style.userItem}>
                        <div>
                            <img src={item.photo} className={style.userItem__image}/>
                            {item.isFollow ? <button onClick={()=>props.unfollow(item.id)}>UNFOLLOW</button> : <button onClick={()=>props.follow(item.id)}>FOLLOW</button>}
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