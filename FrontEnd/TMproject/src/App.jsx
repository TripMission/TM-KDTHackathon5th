import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import SubPage from './pages/SubPage';
import Camera from './pages/Camera';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/subpage" element={<SubPage />} />
                <Route path="/camera" element={<Camera />} />
            </Routes>
        </>
    );
}

export default App;
