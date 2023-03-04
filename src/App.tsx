import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbs40C5GtOnzyfhBPhp8dm7Tn3a-KkFbvWJlxNPE1sADosQYGI2jq0Jw-28YAT959938&usqp=CAU" alt=""/>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Message</div>
                <div>News</div>
                <div>Music</div>
                <div>Setting</div>
            </nav>
            <main className="content">
                <div>
                    <img src="https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpeg" alt=""/>

                </div>
                <div>
                    ava + desc
                </div>

                <div>
                   My posts
                    <div>New post</div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </main>
        </div>
    );
}

export default App;
