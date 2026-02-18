import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav ${show ? "nav_black" : ""}`}>
      
      {/* LEFT SIDE */}
      <div className="nav_left">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        />

        <ul className="nav_links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav_right">
        <FaSearch className="nav_icon" />
        <IoMdNotificationsOutline className="nav_icon" />

        <div
          className="profile"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
          />
          <IoMdArrowDropdown className="dropdown_icon" />
        </div>

        {menuOpen && (
          <div className="profile_dropdown">
            <p>Manage Profiles</p>
            <p>Account</p>
            <p>Help Center</p>
            <hr />
            <p>Sign out of Netflix</p>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
