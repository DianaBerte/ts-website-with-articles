import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchAllArticlesComponent from './Components/FetchAllArticlesComponent';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path="/" element={<FetchAllArticlesComponent />}>
          </Route>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
