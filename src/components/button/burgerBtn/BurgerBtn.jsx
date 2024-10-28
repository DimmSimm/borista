import './burgerBtn.css'

const BurgerBtn = ({onClick}) => {
    return (
        <button className="line-block__item open-btn" data-ajax-load-block="HEADER_MOBILE_TOGGLE_BURGER_LEFT" onClick={onClick}>
			<div className="burger light-opacity-hover fill-theme-hover banner-light-icon-fill menu-light-icon-fill fill-dark-light-block">
				<i className="svg inline  svg-inline-burger" aria-hidden="true">
					<svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 0C0.447716 0 0 0.447716 0 1C0 1.55228 0.447716 2 1 2H15C15.5523 2 16 1.55228 16 1C16 0.447716 15.5523 0 15 0H1Z" fill="#333333"></path>
						<path d="M1 5C0.447716 5 0 5.44772 0 6C0 6.55228 0.447716 7 1 7H9C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5H1Z" fill="#333333"></path>
					</svg>
			    </i>						
			</div>
		</button>
    );
}
 
export default BurgerBtn;