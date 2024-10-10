import './navbar.css';


const Navbar = () => {
	
	return (
		<nav className="nav">
			<div className='container'>
				<div className="nav-row">
					<div className="logo nav-main-items">
						<img className="logo-img" src="https://etsft.ru/upload/CAllcorp3Digital/b31/fo31wv9ygu5wuzgwpvzhsx6ftit672i2.svg" alt="Корпоративный сайт" title="Корпоративный сайт"></img>
					</div>
					<div className="nav-list nav-main-items">
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
					<div className="nav-list nav-list__link-tel nav-main-items">
            			<a href='#!' className="nav-list__item">
                       		+7 (908) 058-67-55
                		</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
