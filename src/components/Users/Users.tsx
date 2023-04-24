import React from 'react';

const Users = (props:any) => {

    if(props.users.length === 0) {

        props.setUsers([
            {id: 1, photo: 'https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg', isFollow: true, fullName: 'Name 1', status: 'My status', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, photo: 'https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg', isFollow: true, fullName: 'Name 2', status: 'My status 2', location: {city: 'Moscow 2', country: 'Russia 2'}},
            {id: 3, photo: 'https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg', isFollow: false, fullName: 'Name 3', status: 'My status 3', location: {city: 'Moscow 3', country: 'Russia 3'}},
        ]);

    }


    return (
        <div>
            {props.users.map((item:any) => {
                return (
                    <div key={item.userId}>
                        <div>
                            <img src={item.photo}/>
                            {item.isFollow ? <button onClick={()=>props.follow(item.id)}>UNFOLLOW</button> : <button onClick={()=>props.unfollow(item.id)}>FOLLOW</button>}
                        </div>
                        <div>
                            <div>{item.fullName}</div>
                            <div>{item.location.city}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};



export default Users;