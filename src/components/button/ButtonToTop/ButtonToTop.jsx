import './buttonToTop.css';
import { useEffect, useState } from 'react';

const ButtonToTop = () => {

    const [header, setHeader] = useState()
	
	useEffect(() => {
		setHeader(document.getElementById("header"))
    }, [])
	
	const scrollTo = (element) => {
		element.scrollIntoView({
			behavior: 'smooth',
		});
	}

    return (
        <button onClick={() => scrollTo(header)} className="buttonToTop rotateIn rotateOut"></button>
    ) 

}
 
export default ButtonToTop;