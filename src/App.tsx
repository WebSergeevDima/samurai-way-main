import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";

export type DialogsDataType = {
    id: number
    name: string
};

export type MessagesDataType = {
    message: string
};

export type SidebarType = {
    id: number
    name: string
    img: string
};

export type AddPostType = () => void

export type UpdateNewPostTextType = (newPost: string) => void

export type AddMessageType = () => void

export type UpdateNewMessageTextType = (newPost: string) => void

export type PostsDataType = {
    id: number
    message: string
    likeCount: number
};

export type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
}

export type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessageText: string
}
export type AppStateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,
    sidebar: SidebarType[]
}

export type StoreType = {
    appState: AppStateType
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
    addMessage: AddMessageType
    updateNewMessageText: UpdateNewMessageTextType
}

export type AppPropsType = {
    appState: AppStateType
    addPost: AddPostType
    updateNewPostText: UpdateNewPostTextType
    addMessage: AddMessageType
    updateNewMessageText: UpdateNewMessageTextType
};

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.appState.sidebar}/>
                <div className={'app-content'}>
                    <Route path={'/profile'}
                           render={() => <Profile updateNewPostText={props.updateNewPostText} profilePage={props.appState.profilePage}
                                                  addPost={props.addPost}/>}/>
                    <Route exact path={'/dialogs'}
                           render={() => <Dialogs messagesPage={props.appState.messagesPage}
                               addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/setting'} component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
