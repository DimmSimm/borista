import './App.css';
import Services from './components/services/Services';
import Career from './components/career/Career';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ButtonToTop from './components/button/ButtonToTop/ButtonToTop';

function App() {
  return (
    <div className="App">
        <Home />
        <Services />
        <Career />
        <Footer />
        <ButtonToTop />
    </div>
  );
}

export default App;
