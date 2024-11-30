import './buttonToTop.css';
import { useEffect, useState } from 'react';

const ButtonToTop = () => {

    const [home, setHeader] = useState();
	
	useEffect(() => {
		setHeader(document.getElementById("home"));
    }, [])
	
	const scrollTo = (element) => {
		element.scrollIntoView({
        	behavior: 'smooth',
		});
	}

    return (
        <button onClick={() => scrollTo(home)} className="buttonToTop rotateIn rotateOut"></button>
    ) 

}
 
export default ButtonToTop;