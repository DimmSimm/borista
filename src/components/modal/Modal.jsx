import './modal.css';
import logo from '../../assets/logo.svg';

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <div className='mobilemenu'>
                    <div className='mobilemenu-header'>
                        <div className="logo nav-main-items">
                            <img
                                className="logo-img"
                                src={logo}
                                alt="Корпоративный сайт"
                                title="Корпоративный сайт">
                            </img>
                        </div>
                        <span className="mobilemenu__close stroke-theme-hover" title="Закрыть" onClick={() => setActive(false)}>
                            <i className="svg inline  svg-inline-" aria-hidden="true">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1L1 13M1 1L13 13" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </i>
                        </span>
                    </div>
                    <div className='mobilemenu__menu--top'>
                        <div className='mobilemenu__item'>
                            <ul className="mobilemenu-list">
                                <li onClick={() => setActive(false)}>
                                    <a href='#about_company' className="mobilemenu__menu-item">
                                        О компании
                                    </a>
                                </li>
                                <li onClick={() => setActive(false)}>
                                    <a href='#services' className="mobilemenu__menu-item">
                                        Услуги и решения
                                    </a>
                                </li>
                                <li onClick={() => setActive(false)}>
                                    <a href='#career' className="mobilemenu__menu-item">
                                        Карьера
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mobilemenu__menu--bottom'>
                        <div className='mobilemenu__item'>
                            <div className="mobilemenu__menu-item">
                                <span className="mobilemenu__icon-block">
                                    <i className="svg" aria-hidden="true">
                                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.63104 7.97841C6.80463 8.37048 7.0041 8.78717 7.15518 9.07225C7.27009 9.28907 7.49877 9.67951 7.75313 10.0735C7.76214 10.0675 7.77119 10.0616 7.78029 10.0557C8.42453 9.63686 9.0857 9.68158 9.33213 9.70774C9.65095 9.7416 9.94005 9.82627 10.1562 9.90146C10.5996 10.0556 11.0572 10.2844 11.4507 10.5088C11.8534 10.7384 12.2607 11.0047 12.6067 11.2698C12.7791 11.4018 12.9587 11.5506 13.1228 11.7095C13.2598 11.8422 13.4996 12.0889 13.6819 12.4208C13.9567 12.9214 13.9912 13.4324 13.9984 13.6733C14.0076 13.9837 13.9774 14.2994 13.9216 14.5917C13.8662 14.8818 13.7732 15.2138 13.6215 15.5388C13.4853 15.8308 13.2157 16.3046 12.7088 16.6593C12.2763 16.9621 12.101 17.0614 11.5704 17.3623C11.5097 17.3967 11.4445 17.4337 11.3736 17.4739C10.0199 18.2431 8.63271 17.9822 7.88102 17.8407C7.83467 17.832 7.79075 17.8237 7.74939 17.8162C6.75715 17.6353 5.7137 16.9402 4.80916 16.0871C3.83349 15.1669 2.7972 13.855 1.8574 12.1001C-0.0332021 8.56968 -0.11428 5.48344 0.0632851 4.44905C0.155366 3.91264 0.377274 3.31038 0.67849 2.76835C0.975733 2.23348 1.45254 1.57218 2.16387 1.10241C2.86272 0.640891 3.08665 0.498187 3.5503 0.267086C4.05424 0.0159067 4.54851 -0.00825558 4.84873 0.00182873C5.18399 0.01309 5.50575 0.0758517 5.78987 0.161581C6.29082 0.312738 7.02383 0.643641 7.53773 1.30319C7.84738 1.70061 7.96266 2.13768 8.0032 2.29536C8.0629 2.52757 8.10186 2.76842 8.12854 2.98699C8.18252 3.42919 8.20461 3.93488 8.19668 4.4186C8.1889 4.89393 8.15099 5.42764 8.05633 5.9073C8.00998 6.14217 7.93607 6.43773 7.80765 6.73085C7.7078 6.95878 7.43069 7.53172 6.78987 7.89289C6.7363 7.92309 6.68325 7.95156 6.63104 7.97841ZM4.36756 7.68433C4.55311 8.29107 5.08198 9.4331 5.38688 10.0084C5.69177 10.5837 6.4713 11.8462 6.90539 12.2852C7.33947 12.7242 7.68815 12.619 7.8981 12.5196C7.99603 12.4732 8.11572 12.3629 8.26158 12.2285C8.42842 12.0748 8.62948 11.8895 8.87134 11.7322C9.32463 11.4376 11.633 12.8464 11.9276 13.3829C12.1 13.6969 11.9533 14.7465 11.561 15.0211C11.208 15.2682 11.1075 15.3251 10.5781 15.6255C10.5193 15.6588 10.4551 15.6952 10.3847 15.7353C9.68103 16.1351 8.95879 16.0037 8.10853 15.8487C7.25828 15.6936 5.31836 14.3246 3.62164 11.1563C1.92491 7.98792 1.93885 5.3504 2.03552 4.78725C2.13219 4.22409 2.57448 3.22841 3.267 2.77107C3.95952 2.31373 4.09679 2.22961 4.44334 2.05688C4.78989 1.88414 5.64012 2.12285 5.95894 2.53204C6.27777 2.94122 6.32266 5.86013 5.80696 6.15079C5.54379 6.29912 5.29676 6.38092 5.09355 6.44822C4.89855 6.5128 4.74389 6.56401 4.65399 6.64783C4.65164 6.65003 4.64927 6.65224 4.64688 6.65446C4.4631 6.8257 4.18439 7.08538 4.36756 7.68433Z"
                                                fill="#888888">
                                            </path>
                                        </svg>
                                    </i>
                                </span>
                                <a href='tel:+7(908)0586755' className="mobilemenu__menu-item-phone">
                                    +7 (908) 058-67-55
                                </a>
                            </div>
                            <div className="mobilemenu__menu-item">
                                <span className="mobilemenu__icon-block">
                                    <i className="svg mobilemenu__menu-item-svg" aria-hidden="true">
                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14 7C14 8.84383 13.2871 10.5211 12.1219 11.7714L6.87812 17.8323C6.57514 18.1825 6 17.9682 6 17.5052V13.9291C2.60771 13.4439
                                                    0 10.5265 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858
                                                    12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2Z"
                                                fill="#888888">
                                            </path>
                                        </svg>
                                    </i>
                                </span>
                                <div className="mobilemenu__menu-item-address__text">
                                    г.&nbsp;Челябинск, ул. Бейвеля, д. 20, офис 62
                                </div>
                            </div>
                            <div className='mobilemenu__menu-item'>
                                <span className='mobilemenu__icon-block'>
                                    <i className="svg svg-inline-email mobilemenu__menu-item-svg" aria-hidden="true">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4 0C1.79086 0 0 1.79086 0 4V12C0 14.2091 1.79086 16 4 16H14C16.2091 16 18 14.2091 18 12V4C18 1.79086 16.2091 0 14 0H4ZM2.05092
                                                    3.54958C2.25522 2.66192 3.05031 2 4 2H14C14.9497 2 15.7448 2.66192 15.9491 3.54958L9 7.82594L2.05092 3.54958ZM2 5.86661V12C2 13.1046
                                                    2.89543 14 4 14H14C15.1046 14 16 13.1046 16 12V5.86661L10.0482 9.52925C9.40538 9.92483 8.59462 9.92483 7.95181 9.52925L2 5.86661Z"
                                                fill="#888888">
                                            </path>
                                        </svg>
                                    </i>
                                </span>
                                <a href="mailto:info@etsft.ru" className='mobilemenu__menu-item-email'>
                                    info@etsft.ru
                                </a>
                            </div>
                                <div className="mobilemenu__menu-item">
                                    <span className='mobilemenu__icon-block'>
                                        <i className="svg mobilemenu__menu-item-svg" aria-hidden="true">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M2.00098 9C2.00098 12.866 5.13498 16 9.00098 16C12.867 16 16.001 12.866 16.001 9C16.001 5.13401 12.867 2 9.00098 2C5.13498 2
                                                        2.00098 5.13401 2.00098 9ZM9.00098 18C4.03041 18 0.000976562 13.9706 0.000976562 9C0.000976562 4.02944 4.03041 0 9.00098 0C13.9715
                                                        0 18.001 4.02944 18.001 9C18.001 13.9706 13.9715 18 9.00098 18ZM10.001 5C10.001 4.44772 9.55326 4 9.00098 4C8.44869 4 8.00098
                                                        4.44772 8.00098 5V9C8.00098 9.26522 8.10633 9.51957 8.29387 9.70711L11.2939 12.7071C11.6844 13.0976 12.3176 13.0976 12.7081
                                                        12.7071C13.0986 12.3166 13.0986 11.6834 12.7081 11.2929L10.001 8.58579V5Z"
                                                    fill="#888888"
                                                    >
                                                </path>
                                            </svg>
                                        </i>
                                    </span>										
                                    <div className="mobilemenu__menu-item-opening-hours">
                                        Пн. – Пт.: с 9:00 до 18:00											
                                    </div>
                                </div>
                            <div className='mobilemenu__menu-item'>
                                <a href='https://t.me/batarelkin' className='mobilemenu__menu-item-telegram' target='_blank' rel="noopener noreferrer"> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;