import AboutUs from "../aboutUs/AboutUs";
import Navbar from "../navbar/Navbar";
import './home.css';

const Home = () => {
    return ( 
        <div id="home" className="home">
            <Navbar />
            <AboutUs />
        </div>
     );
}
 
export default Home;