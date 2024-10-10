import './footer.css';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='footer-top-container'>
                <div className='footer-top'>
                    <div className='footer-top-items'>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.34544 9.19035C4.3752 9.1854 4.40497 9.18018 4.43443 9.17502C4.57281 9.15079 4.70419 9.12778 4.79424 9.13924C4.98831 9.16393 5.27614 9.5452 5.52934 10.0011C5.80442 10.4963 6.00721 10.9435 5.99815 11.2339C5.9891 11.5243 5.52934 11.9971 5.27589 11.9988C5.02244 12.0005 4.84757 11.9988 4.38109 11.9511C3.9146 11.9034 3.24475 11.4539 3.05287 11.15C3.01142 11.0843 2.9725 11.0222 2.93476 10.9589C2.79777 10.7292 2.67639 10.4843 2.50683 10.0011C2.38177 9.64464 2.27993 9.27989 2.2013 8.9099C2.14516 8.64574 2.10086 8.3789 2.06839 8.11052C2.02384 7.74223 2.00157 7.37103 2.00158 6.99983C2.00159 6.62863 2.02389 6.25743 2.06846 5.88914C2.09963 5.63166 2.14168 5.37559 2.19462 5.12194C2.27415 4.74093 2.37824 4.36536 2.50691 3.99859C2.67086 3.53124 2.78974 3.27887 2.92127 3.05774C2.96323 2.9872 3.00647 2.91984 3.05287 2.8497C3.24475 2.55965 3.88724 2.09621 4.38109 2.04852C4.8225 2.0059 5.01031 2.00383 5.20555 2.00168C5.22875 2.00142 5.25205 2.00116 5.27589 2.00084C5.50043 1.99777 5.99548 2.46384 5.99815 2.76576C6.00082 3.06768 5.80442 3.50335 5.52934 3.99859C5.27614 4.45445 5.03412 4.83208 4.79424 4.86041C4.67301 4.87473 4.50319 4.84587 4.34543 4.81906C4.34446 4.8189 4.34349 4.81873 4.34253 4.81857C4.18927 4.79252 4.04775 4.76868 3.97373 4.78862C3.82312 4.82918 3.54967 4.93563 3.49577 5.30943C3.4932 5.32726 3.49073 5.34436 3.48836 5.36079C3.44104 5.68869 3.43248 5.74799 3.41183 5.99941C3.38433 6.33416 3.37058 6.66702 3.37058 6.99987C3.37058 7.3327 3.38433 7.66553 3.41183 8.00024L3.4131 8.0158C3.43387 8.26866 3.44294 8.37914 3.49577 8.69023C3.54967 9.00762 3.74545 9.17549 3.97986 9.2127C4.08232 9.22896 4.21374 9.21225 4.34544 9.19035ZM5.37457 6.77929C6.14981 6.56283 6.59901 5.993 6.72764 5.82983L6.72889 5.82825C6.95961 5.53558 7.15007 5.20246 7.27928 4.96984C7.43376 4.69172 7.59825 4.374 7.72726 4.05043C7.84309 3.75989 8.00443 3.28778 7.99965 2.74807C7.99459 2.17599 7.77645 1.73588 7.64424 1.50955C7.49263 1.24999 7.31188 1.03239 7.1437 0.862322C6.97566 0.692392 6.7691 0.518305 6.5318 0.372388C6.36872 0.272112 5.89055 -0.00858388 5.24849 0.000201648C5.22601 0.000509335 5.20348 0.000767052 5.18064 0.00102835C4.96138 0.00353635 4.71253 0.00638317 4.18864 0.056969C3.48664 0.124753 2.88759 0.440169 2.52245 0.674477C2.16526 0.903692 1.69714 1.27167 1.38331 1.74608C1.09444 2.18276 0.885227 2.57501 0.618097 3.33648C0.204199 4.51633 4.27173e-05 5.76124 6.70177e-09 6.99976C-4.27039e-05 8.23838 0.204061 9.48338 0.618057 10.6633C0.893193 11.4474 1.10375 11.8115 1.3601 12.2177C1.69309 12.7452 2.20651 13.1264 2.55172 13.3424C2.91355 13.5689 3.50343 13.8727 4.17747 13.9416C4.7199 13.997 4.96732 14.0017 5.28924 13.9996C5.89878 13.9955 6.3547 13.7409 6.55244 13.6179C6.80037 13.4635 7.01009 13.2804 7.17649 13.1062C7.34392 12.9308 7.51551 12.7142 7.65817 12.4628C7.78234 12.2439 7.98212 11.8299 7.99876 11.2962C8.01649 10.7279 7.84015 10.23 7.72897 9.95186C7.59938 9.62767 7.4336 9.30764 7.27928 9.02981C7.11975 8.74261 6.91803 8.42008 6.68541 8.1374C6.57069 7.99798 6.40884 7.81945 6.202 7.65484C6.06387 7.54492 5.77994 7.33821 5.3746 7.22192C5.37135 7.07433 5.37134 6.92688 5.37457 6.77929Z" fill="#888888"></path>
                        </svg>
                        <a className='footer-top-item phones__phone-link' href='#!'>
                            +7 (908) 058-67-55
                        </a>
                        <i class="svg inline svg-inline-email" aria-hidden="true">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                <path d="M1 3.1499C1 2.04533 1.89543 1.1499 3 1.1499H9C10.1046 1.1499 11 2.04533 11 3.1499V8.1499C11 9.25447 10.1046 10.1499 9 10.1499H3C1.89543 10.1499 1 9.25447 1 8.1499V3.1499Z" stroke="#333333" stroke-width="2"></path>
                                <mask id="mask0" maskUnits="userSpaceOnUse" x="1" y="1" width="10" height="10">
                                    <path d="M1 3.1499C1 2.04533 1.89543 1.1499 3 1.1499H9C10.1046 1.1499 11 2.04533 11 3.1499V8.1499C11 9.25447 10.1046 10.1499 9 10.1499H3C1.89543 10.1499 1 9.25447 1 8.1499V3.1499Z" fill="#C4C4C4"></path>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M6.66499 6.25604L25.0381 -10.1032C25.7245 -10.7144 25.2922 -11.8501 24.3731 -11.8501H-12.3731C-13.2922 -11.8501 -13.7245 -10.7144 -13.0381 -10.1032L5.33501 6.25604C5.71409 6.59357 6.28591 6.59357 6.66499 6.25604Z" stroke="#333333" stroke-width="2"></path>
                                </g>
                                </g>
                            </svg>
                        </i>
                        <a href="mailto:info@etsft.ru" className='footer-top-item footer-email'>
                            info@etsft.ru
                        </a>
                    </div>
                    <div className='footer-top-items'>
                        <a href='#!' className='footer-top-item'>
                            telega
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-container">
                <div className="footer-bottom">
                    <div className='footer-bottom-items'>
                        © 2018-2024 Это софт <br />
                        ИНН: 7448214368<br />
                        ОГРН: 1187456043048
                    </div>
                    <div className='footer-bottom-items'>
                        <a class="footer-license" href="https://etsft.ru/include/licenses_detail.php">
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;