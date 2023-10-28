import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import MyPage from './pages/MyPage'
import SubPage from './pages/SubPage'

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/subpage" element={<SubPage />} />
        </Routes>
      </>
    );
  }
  
export default App;