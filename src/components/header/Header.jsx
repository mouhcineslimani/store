import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import panier from "../../assets/images/panier.png";
import { useCart } from "../../hook/useContextCartProvider";
import { CartItem } from "../index";

function Header() {
  const { state } = useCart();
  const [showCart, setShowCart] = useState(false);
  const MAX_ITEMS_TO_DISPLAY = 3;

  const cartShowHandler = () => {
    setShowCart(!showCart);
  };

  const carts =
    state.products.length > 0
      ? <div className="custome-panier">
          {state.products
            .slice(0, MAX_ITEMS_TO_DISPLAY)
            .map(prd => <CartItem key={prd.id} product={prd} panier={true} />)}
          <div>
            <Link to="/cart" className="view-more-link">
              Go to cart
            </Link>
          </div>
        </div>
      : <span>No item in cart</span>;

  const cartRef = useRef(null);

  useEffect(
    () => {
      const handleClickOutside = event => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
          setShowCart(false);
        }
      };

      const handleScroll = () => {
        setShowCart(false);
      };

      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [cartRef]
  );

  return (
    <nav className="navbar flex">
      <div className="top-header flex">
        <img src={logo} alt="" className="logo" />
        <div className="panier-container">
          <div onClick={cartShowHandler} className="one">
            <img src={panier} alt="" className="panier" />
            <span className="count">
              {JSON.stringify(state.products.length)}
            </span>
          </div>
          {showCart &&
            <div className={showCart ? "cart show" : ""} ref={cartRef}>
              {state.products.length > 0 &&
                <div style={{ textAlign: "center", marginBlock: "10px" }}>
                  Total: ${state.total.toFixed(2)}
                </div>}
              {carts}
            </div>}
        </div>
      </div>
      <div className="bottom-header flex">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/products">
          Products
        </NavLink>
        <NavLink className="link" to="/categories">
          Categories
        </NavLink>
        <NavLink className="link" to="/contact">
          Contact
        </NavLink>
        {/* <NavLink className="link" to="/about">
          About
        </NavLink> */}
      </div>
    </nav>
  );
}

export default Header;
