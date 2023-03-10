import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Profile/Profile.module.css";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-content'}>
                {/*<Profile />*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
