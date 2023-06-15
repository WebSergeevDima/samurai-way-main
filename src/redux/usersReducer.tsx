import {ActionsTypes} from "./state";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';

type LocationType = {
    city: string
    country: string
}

type InitialStateType = {
    users: Array<any>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

type UsersType = {
    id: number
    photo: string
    isFollow: boolean
    fullName: string
    status: string
    location: LocationType
}

const initialState= {
    users: [],
    pageSize: 5,
    totalUsersCount: 36,
    currentPage: 1
};

const profileReducer = (state: InitialStateType = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
           return {
                ...state,
                users: state.users.map((item:UsersType) => {
                    if(item.id === action.userId) {
                        return {...item, isFollow: true}
                    }
                    return item;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((item:UsersType) => {
                    if(item.id === action.userId) {
                        return {...item, isFollow: false}
                    }
                    return item;
                })
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USER_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state
    }
}

export const followAC = (userId: number): ActionsTypes => {
    return {
        type: FOLLOW,
        userId
    };
}
export const unfollowAC = (userId: number): ActionsTypes => {
    return {
        type: UNFOLLOW,
        userId
    };
}
export const setUsersAC = (users: UsersType[]): ActionsTypes => {
    return {
        type: SET_USERS,
        users
    };
}

export const setCurrenPageAC = (currentPage: number): ActionsTypes => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
}


export const setUserTotalCountAC = (totalUsersCount: number): ActionsTypes => {
    return {
        type: SET_USER_TOTAL_COUNT,
        totalUsersCount
    };
}


export default profileReducer;