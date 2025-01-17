import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { FaHandsHelping, FaLightbulb } from 'react-icons/fa';

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
           <img src="/logoo.png" alt="" className='FaHandsHelping'/> 
          {/* <FaLightbulb className='FaHandsHelping' /> */}
          <span>94Memorials</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">Memorials</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Nshuti David</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/list">Memorials</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>          
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;