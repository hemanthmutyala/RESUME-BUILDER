import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import TemplateData from '../src/components/TemplateData';
import Registration from './components/Registration';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/templates" element={<TemplateData />} />
    </Routes>
  );
}

export default App;
