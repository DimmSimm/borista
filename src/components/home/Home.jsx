import Navbar from "../navbar/Navbar";
import AboutUs from "../aboutUs/AboutUs";
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