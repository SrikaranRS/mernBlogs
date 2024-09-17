import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Layout/Header';
import Main from './Layout/Main';
import { Route, Routes } from 'react-router';
import Details from './Blog/Details';
import Category from './Blog/Category';

function App() {


  
 


  return (
    <div className="App">

      <Header/>
      <Routes>

        <Route path='/' element={<Main/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/category/:id' element={<Category/>}/>

      </Routes>
      
      
    </div>
  );
}

export default App;
