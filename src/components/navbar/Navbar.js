// import { NavLink } from 'react-router-dom';
// import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';


const Navbar = () => {
	// const activeLink = 'nav-list__link nav-list__link--active';
	// const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="nav-row">
				<div className="logo">
					<img className="logo-img" src="https://etsft.ru/upload/CAllcorp3Digital/b31/fo31wv9ygu5wuzgwpvzhsx6ftit672i2.svg" alt="Корпоративный сайт" title="Корпоративный сайт"></img>
				</div>
				<div className="nav-list">
					<div className="nav-list__items">
						<a href='#!' className="nav-list__item">
							О компании
						</a>
						<a href='#!' className="nav-list__item">
							Услуги и решения
						</a>
						<a href='#!' className="nav-list__item">
							Карьера
						</a>
					</div>
					<div className='link-tel-nav-list'>
            			<a href='#!'>
                        	+7 (908) 058-67-55
                		</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
