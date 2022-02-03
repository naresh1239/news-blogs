import React from 'react';
import "./App.scss"
import Navbar from "./Navbar"
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {



  return <>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/blogs/:id" element={<About/>}></Route>
</Routes>
  </>;
};

export default App;
