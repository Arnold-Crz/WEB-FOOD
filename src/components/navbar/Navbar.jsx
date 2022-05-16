import { useState } from 'react';
import { useCart } from '../../context/cartContext';

import Navmenu from '../../assets/navmenu.svg';
import Navclose from '../../assets/navclose.svg';
import Facebook from '../../assets/face.svg';
import Instagram from '../../assets/insta.svg';
import Cart from '../../assets/cart.svg';
import Logo from '../../assets/logo.png';
import LogoTwo from '../../assets/logotwo.png';

import './navbar.scss';

function Navbar() {
  const { setOpencart, getNumberItemCart } = useCart();
  const handleOpenToCart = () => {
    setOpencart(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="logo" src={Logo} alt="logo" />
        <h1>
          Capi<span>talina</span>
        </h1>
      </div>
      <ul className={isOpen ? 'active' : ''}>
        <div>
          <img src={Navclose} alt="menu" onClick={handleOpen} />
        </div>
        <li>
          <a href="#home">Inicio</a>
          <a href="#menu">Menu</a>
          <a href="#ubication">Ubicacion</a>
          <a href="#contact">Horarios</a>
          <div className="btnMenu">
            <a href="#">Descarga Menu</a>
          </div>
          <div className="btnSocial">
            <img src={LogoTwo} alt="LogoTwo" />
            <a href="https://www.instagram.com/lacapitalina1301">
              <img src={Instagram} alt="Instagram" />
              Instagram
            </a>
            <a href="https://www.facebook.com/La-Capitalina-101820809147810/">
              <img src={Facebook} alt="Instagram" />
              facebook
            </a>
          </div>
        </li>
      </ul>
      <div className="navbar__menu">
        <div>
          <div onClick={handleOpenToCart} className="Wrapper_Cart">
            <span>{getNumberItemCart()}</span>
            <img className="Cart" src={Cart} alt="Cart" />
          </div>
        </div>
        <img
          className="Cart_Menu"
          src={Navmenu}
          alt="menu"
          onClick={handleOpen}
        />
      </div>
    </nav>
  );
}

export default Navbar;
