import './App.css';
import Services from './components/services/Services';
import Career from './components/career/Career';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Services />
        <Career />
        <Footer />
      </header>
    </div>
  );
}

export default App;
