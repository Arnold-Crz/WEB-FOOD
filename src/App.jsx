import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Ubication from './pages/ubicacion/Ubication';
import Contact from './pages/contact/Contact';
import TotalCart from './components/cart/TotalCart';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <>
      <CartProvider>
        <TotalCart />
        <Navbar />
        <Home />
        <Menu />
        <Ubication />
        <Contact />
      </CartProvider>
    </>
  );
}

export default App;
