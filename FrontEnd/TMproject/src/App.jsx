import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import SubPage from './pages/SubPage';
import Camera from './pages/Camera';
import Login from './pages/Login';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/subpage" element={<SubPage />} />
                <Route path="/camera" element={<Camera />} />
            </Routes>
        </>
    );
}

export default App;
