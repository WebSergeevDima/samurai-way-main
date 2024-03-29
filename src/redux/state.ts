import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

type AddPostActionType = {
    type: string
}

type UpdateNewPostPostActionType = {
    type: string
    newPost: string
}

type AddMessageActionType = {
    type: string
}

type UpdateNewMessageTextActionType = {
    type: string
    newPost: string
}

type FollowUsersActionType = {
    type: string,
    userId: number
}
type UnfollowUsersActionType = {
    type: string,
    userId: number
}

type SetCurrenPageActionType = {
    currentPage: number
}
type SetUserTotalCountACActionType = {
    totalUsersCount: number
}
type SetIsFetchingACActionType = {
    isFetching: boolean
}
type SetUserProfileACActionType = {
    profile: any
}

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
type SetUsersActionType = {
    type: string,
    users: UsersType[]
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostPostActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType
    | FollowUsersActionType
    | UnfollowUsersActionType
    | SetUsersActionType
    | SetCurrenPageActionType
    | SetUserTotalCountACActionType
    | SetIsFetchingACActionType
    | SetUserProfileACActionType;

const store = {

    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Post 1', likeCount: 0},
                {id: 2, message: 'Post 2', likeCount: 0},
                {id: 3, message: 'Post 3', likeCount: 0},
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Dima2'},
                {id: 3, name: 'Dima3'},
                {id: 4, name: 'Dima4'},
                {id: 5, name: 'Dima5'},
            ],
            messagesData: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'Hello!222'},
            ],
            newMessageText: ''
        },
        sidebar: [
            {
                id: 1,
                name: 'Dima',
                img: 'https://n1s2.hsmedia.ru/fb/8b/76/fb8b7611e859e0e5fa492b78ce4f9fc7/698x524_0xac120003_5569576151665766714.jpg'
            },
            {
                id: 2,
                name: 'Sveta',
                img: 'https://n1s2.hsmedia.ru/fb/8b/76/fb8b7611e859e0e5fa492b78ce4f9fc7/698x524_0xac120003_5569576151665766714.jpg'
            },
            {
                id: 3,
                name: 'Liza',
                img: 'https://n1s2.hsmedia.ru/fb/8b/76/fb8b7611e859e0e5fa492b78ce4f9fc7/698x524_0xac120003_5569576151665766714.jpg'
            }
        ]

    },

    _callSubscriber() {
        console.log('renderEntireTree');
    },

    getState() {
        return this._state;
    },

    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();

    }
}

export default store;
