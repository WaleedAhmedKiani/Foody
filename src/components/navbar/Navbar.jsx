import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setshowLogin }) => {

  const [menu, setmenu] = useState("Shop");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to='/'><img className='logo' src={assets.logo} alt="logo" /></Link>
      <ul className="navbar-menu">
        <Link to={"/"} onClick={() => setmenu("Shop")} className={menu === "Shop" ? "active" : ""}>Home</Link>
        <Link to={"/about"} onClick={() => setmenu("About")} className={menu === "About" ? "active" : ""}>About</Link>
        <Link to={"/contact"} onClick={() => setmenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /> </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => { setshowLogin(true) }} className="navbar-button">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar