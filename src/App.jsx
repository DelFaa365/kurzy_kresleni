import './App.css';
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
