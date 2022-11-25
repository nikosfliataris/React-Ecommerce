import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import "./SideBar.scss";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

function Sidebar() {
  const { CloseSideBar, isSideBarOpen } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <div className="sidebar">
      <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} alt="comfy logo" className="logo" />
          <button className="close-btn" type="button" onClick={CloseSideBar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url} onClick={CloseSideBar}>
                {link.text}
              </Link>
            </li>
          ))}
          {myUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}

          <CartButtons />
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
