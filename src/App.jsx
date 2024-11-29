import './App.css';
import { useState } from 'react';
import Services from './components/services/Services';
import Career from './components/career/Career';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ButtonToTop from './components/button/ButtonToTop/ButtonToTop';
import Modal from './components/modal/Modal';
import BurgerBtn from './components/button/burgerBtn/BurgerBtn';
import MobileHeader from './components/mobileHeader/MobileHeader';

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
      <Services />
      <Career />
      <Footer />
      <ButtonToTop />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
