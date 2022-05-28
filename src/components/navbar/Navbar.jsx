import { useState } from 'react';
import { useCart } from '../../context/cartContext';

import Navmenu from '../../assets/navmenu.svg';
import Navclose from '../../assets/navclose.svg';
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
      <div className="navbar_logo">
        <img className="logo" src={LogoTwo} alt="logo" />
        <h1>
          Capi<span>talina</span>
        </h1>
      </div>
      <div className={`navbar_content ${isOpen ? 'active' : ''} `}>
        <div className="navbar_close" onClick={handleOpen}>
          <img src={Navclose} alt="menu" />
        </div>
        <ul className="navbar_items">
          <a onClick={handleOpen} href="#home">
            Inicio
          </a>
          <a onClick={handleOpen} href="#menu">
            Menu
          </a>
          <a onClick={handleOpen} href="#ubication">
            Ubicacion
          </a>
          <a onClick={handleOpen} href="#contact">
            Horarios
          </a>
        </ul>
        <div className="navbar_social">
          <img className="logo_empresa" src={LogoTwo} alt="LogoTwo" />
          <a href="https://www.instagram.com/lacapitalina1301">
            <i className="bx bxl-instagram"></i>
            Instagram
          </a>
          <a href="https://www.facebook.com/La-Capitalina-101820809147810/">
            <i className="bx bxl-facebook-square"></i>
            facebook
          </a>
        </div>
      </div>
      <div className="navbar_cart_menu">
        <div onClick={handleOpenToCart} className="wrapper_cart">
          <span>{getNumberItemCart()}</span>
          <div className="cart_img">
            <i className="bx bx-cart-alt"></i>
          </div>
        </div>
        <img
          className="navbar_menu"
          src={Navmenu}
          alt="menu"
          onClick={handleOpen}
        />
      </div>
    </nav>
  );
}

export default Navbar;
