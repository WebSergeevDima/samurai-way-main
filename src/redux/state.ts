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


export type ActionsTypes = AddPostActionType | UpdateNewPostPostActionType | AddMessageActionType | UpdateNewMessageTextActionType;


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

    dispatch(action: any) {

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newPost;
            this._callSubscriber();
        }
    }
}

export default store;
