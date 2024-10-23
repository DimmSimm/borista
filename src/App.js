import './App.css';
import Services from './components/services/Services';
import Career from './components/career/Career';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ButtonToTop from './components/button/ButtonToTop/ButtonToTop';
import Modal from './components/modal/Modal';
import BurgerBtn from './components/button/burgerBtn/BurgerBtn';
import { useState } from 'react';

function App() {

  const [modalActive, setModalActive] = useState(false);
  const screenWidth = window.screen.width
//   const [scrollY, setScrollY] = useState(window.scrollY)
//   useEffect(() => {
// 	setScrollY(window.scrollY)
// 	console.log(scrollY, window.scrollY)
//   }, [window.scrollY])
  return (
    <div className="App">
		{screenWidth < 1000 && (
        	<BurgerBtn onClick={setModalActive} />
		)}
        <Home />
        <Services />
        <Career />
        <Footer />
        <ButtonToTop
		// scrollY={scrollY}
		/>
        <Modal active={modalActive} setActive={setModalActive}>
        	<div className="logo nav-main-items">
				<img className="logo-img" src="https://etsft.ru/upload/CAllcorp3Digital/b31/fo31wv9ygu5wuzgwpvzhsx6ftit672i2.svg" alt="Корпоративный сайт" title="Корпоративный сайт"></img>
			</div>
			<ul className="mobilemenu-list">
				<li>
					<a href='#!' className="nav-list__item">
						О компании
					</a>
				</li>
				<li>
					<a href='#!' className="nav-list__item">
						Услуги и решения
					</a>
				</li>
				<li>
					<a href='#!' className="nav-list__item">
						Карьера
					</a>
				</li>
			</ul>
			<div className="nav-list nav-list__link-tel nav-main-items">
				<a href='#!' className="nav-list__item">
					+7 (908) 058-67-55
				</a>
			</div>  
        </Modal>
    </div>
  );
}

export default App;
