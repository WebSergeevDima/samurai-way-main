import {ActionsTypes} from "./state";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

type LocationType = {
    city: string
    country: string
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
};

const profileReducer = (state: any = initialState, action: any) => {



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
            return {...state, users: [...state.users, ...action.users]}
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


export default profileReducer;