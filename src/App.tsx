import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchAllArticlesComponent from './Components/FetchAllArticlesComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import FetchSingleArticleDetails from './Components/FetchSingleArticleDetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <header className='App-header'>
        <Routes>
          <Route path="/" element={<FetchAllArticlesComponent />}>
          </Route>
          <Route path='/details/:id' element={<FetchSingleArticleDetails />}></Route>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
