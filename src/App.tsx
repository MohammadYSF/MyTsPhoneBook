import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewContactForm from './components/newContactForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<NewContactForm />} path="/addNew" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
