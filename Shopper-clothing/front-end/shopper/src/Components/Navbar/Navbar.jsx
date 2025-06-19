import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <Link to="/" className="logo">
          {/* <img
            src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
            alt="Logo"
          /> */}
          <img
            src="https://png.pngtree.com/png-clipart/20240902/original/pngtree-shopping-bag-logo-for-the-web-vector-png-image_15916011.png"
            alt=""
          />
          <span>SHOPPER</span>
        </Link>
      </div>

      {/* Hamburger */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

      {/* Nav Links */}
      <div className={`nav-center ${menuOpen ? "open" : ""}`}>
        {["shop", "mens", "womens", "kids"].map((item) => (
          <Link
            key={item}
            to={`/${item === "shop" ? "" : item}`}
            onClick={() => setMenuOpen(false)}
            className="nav-link"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      {/* Login & Cart */}
      <div className="nav-right">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/cart" className="cart-icon">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/001/504/962/small/shopping-cart-icon-free-vector.jpg"
            alt="cart"
          />
          <span className="cart-count">{getTotalCartItems()}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
