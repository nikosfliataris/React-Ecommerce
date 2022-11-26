import React from "react";
import "./NavBar.scss";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

function Nav() {
  const { OpenSideBar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={OpenSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <link>
            <a href="/">home</a>
          </link>
          <link>
            <a href="/about">about</a>
          </link>
          <link>
            <a href="/products">products</a>
          </link>

          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </nav>
  );
}

export default Nav;
