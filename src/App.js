import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Services from './components/services/Services';
import Career from './components/career/Career';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
        <Services />
        <Career />
      </header>
    </div>
  );
}

export default App;
