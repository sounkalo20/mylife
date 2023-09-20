import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import About from './pages/About';
import Profil from './pages/Profil';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acceuil />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profil' element={<Profil />}/>
        <Route path='*' element={<Acceuil />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
