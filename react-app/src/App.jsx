import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InputPage from './pages/InputPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inputpage" element={<InputPage />} />
        <Route path="/todopage" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
