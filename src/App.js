import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact='true' element={} />
      </Routes>
    </>
  );
}

export default App;
