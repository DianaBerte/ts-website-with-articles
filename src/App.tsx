import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path="/">
          </Route>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
