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

export type PostsDataType = {
    id: number
    message: string
};

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

type AppPropsType = {
    appState: {
        profilePage: {
            postsData: PostsDataType[]
        },
        messagesPage: {
            dialogsData: DialogsDataType[]
            messagesData: MessagesDataType[]
        },
        sidebar: SidebarType[]
    }
};

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.appState.sidebar} />
                <div className={'app-content'}>
                    <Route path={'/profile'} render={()=><Profile postsData={props.appState.profilePage.postsData}/>}/>
                    <Route exact path={'/dialogs'} render={()=><Dialogs dialogsData={props.appState.messagesPage.dialogsData} messagesData={props.appState.messagesPage.messagesData} />}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/setting'} component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
