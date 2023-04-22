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
import {ActionsTypes} from "./redux/state";
import store from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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

export type AppPropsType = {
    appState: AppStateType
    dispatch: (action: ActionsTypes) => void
};

const App: React.FC = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-content'}>
                    <Route path={'/profile'}
                           render={() => <Profile/>}/>
                    <Route exact path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/setting'} component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
