import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ButtonToTop from './components/button/ButtonToTop/ButtonToTop';
import Modal from './components/modal/Modal';
import BurgerBtn from './components/button/burgerBtn/BurgerBtn';
import MobileHeader from './components/mobileHeader/MobileHeader';
import License from './components/license/License';
import Main from './components/main/Main';

function App() {

  const [modalActive, setModalActive] = useState(false);
  
  const screenWidth = window.screen.width;

  return (
    <div className="App">
        {screenWidth < 992 && (
          <MobileHeader>
            <BurgerBtn onClick={setModalActive} />
          </MobileHeader>
        )}
        <Home />
        <Routes>
            <Route path='*' element={<Main />} />
            <Route path='license' element={<License />} />
        </Routes>
        <ButtonToTop />
        <Modal active={modalActive} setActive={setModalActive} />
        <Footer />
    </div>
  );
}

export default App;
