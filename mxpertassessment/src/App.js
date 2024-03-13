import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarTop from './components/navbarTop.jsx';
import Home from './components/home';
import StoryTabsPage from './components/StoryTabsPage.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
      <BrowserRouter>
        <NavbarTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:id" element={<StoryTabsPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;