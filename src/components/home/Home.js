import About from "../about/About";
import Navbar from "../navbar/Navbar";
import './style.css'



const Home = () => {
    return ( 
        <div className="home">
            <Navbar />
            <About />
        </div>
     );
}
 
export default Home;