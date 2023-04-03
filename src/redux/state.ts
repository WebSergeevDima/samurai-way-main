let renderEntireTree = (state: any) => {

}


const state = {
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

};


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.newMessageText = '';
    renderEntireTree(state);
}

export const updateNewMessageText = (newText:string) => {
    state.messagesPage.newMessageText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer: any) => {
    renderEntireTree = observer;
}


export default state;