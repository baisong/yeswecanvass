import React from 'react';
import logo from './logo.svg';
import Nav from './components/nav';
import './App.css';
import './assets/scss/base.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Home from './pages/home';
import NotesAdd from './pages/notes-add';
import Notes from './pages/notes';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes-add" element={<NotesAdd />} />
          <Route element={() => 404} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
