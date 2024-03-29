import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrenPage,
    setIsFetching,
    setUsers,
    setUserTotalCount,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import loader from './../../assets/svg/loader.svg'
import Preloader from "../Preloader/Preloader";
//const axios = require('axios');

const KEY = '523d0f3c-d82a-44a9-a924-328d6a4a9c04';

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": KEY
    }
});

class UsersAPIContainer extends React.Component<any> {

    componentDidMount() {

        this.props.setIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response: any) => { console.log('FETCH: ', this.props.isFetching);
            this.props.setUsers(response.data.items);
            this.props.setUserTotalCount(response.data.totalCount);
            this.props.setIsFetching(false);
        });

    }

    onPageChanged = (pageNumber:number) => {
        this.props.setIsFetching(true);
        this.props.setCurrenPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response: any) => {
            this.props.setUsers(response.data.items);
            this.props.setIsFetching(false);
        });

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader />: null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
};

const mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

//
// const mapDispatchToProps = (dispatch:any) => {
//     return {
//         follow: (userId:number) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId:number) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users:any) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrenPage: (pageNumber: number) => {
//             dispatch(setCurrenPageAC(pageNumber))
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setUserTotalCountAC(totalCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrenPage,
    setUserTotalCount,
    setIsFetching
})(UsersAPIContainer);

export default UsersContainer;