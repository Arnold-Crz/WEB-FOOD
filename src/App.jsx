import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Ubication from './pages/ubicacion/Ubication';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <Ubication />
      <Contact />
    </>
  );
}

export default App;
