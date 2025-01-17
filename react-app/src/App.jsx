import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InputPage from './pages/InputPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inputpage" element={<InputPage />} />
      </Routes>
    </Router>
  );
}

export default App;
