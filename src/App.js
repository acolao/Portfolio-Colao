import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <App />
      </main>
      <Footer />
    </div>
  );
}

export default App;
