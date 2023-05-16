import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrenPageAC, setUsersAC, setUserTotalCountAC, unfollowAC} from "../../redux/usersReducer";


const mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users));
        },
        setCurrenPage: (pageNumber: number) => {
            dispatch(setCurrenPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setUserTotalCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;