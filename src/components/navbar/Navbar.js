// import { NavLink } from 'react-router-dom';
// import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';


const Navbar = () => {
	// const activeLink = 'nav-list__link nav-list__link--active';
	// const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<div className="logo">
						<strong>ЭТОСОФТ</strong>
					</div>

					<ul className="nav-list">
						<li className="nav-list__item">
							О компании
						</li>

						<li className="nav-list__item">
							Услуги и решения
						</li>
						<li className="nav-list__item">
							Карьера
						</li>
                        <li>
                            +7 (908) 058-67-55
                        </li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
