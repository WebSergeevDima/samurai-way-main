import React from 'react';
import style from './Users.module.css';
import axios from "axios";

//const axios = require('axios');

const KEY = '523d0f3c-d82a-44a9-a924-328d6a4a9c04';

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": KEY
    }
});


const Users = (props: any) => {

    const getUsers = () => {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response:any) => {

            if (props.users.length === 0) {
                props.setUsers(response.data.items);
            }

        });

    }

    return (
        <div>
            {props.users.map((item: any) => {
                return (
                    <div key={item.userId} className={style.userItem}>
                        <div>
                            <img src={item.photo} className={style.userItem__image}/>
                            {item.isFollow ? <button onClick={() => props.unfollow(item.id)}>UNFOLLOW</button> :
                                <button onClick={() => props.follow(item.id)}>FOLLOW</button>}
                        </div>
                        <div>
                            <div>{item.name}</div>
                            {/*<div>{item.location.city}</div>*/}
                        </div>
                    </div>
                )
            })}
            <button onClick={getUsers}>Get Users</button>
        </div>
    );
};


export default Users;