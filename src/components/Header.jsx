import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = (props) => {
  return (
    <nav>
      {/* Made nav Content separte component cause we can later reuse it  */}
      <NavContent />

      <button onClick={() => props.setMenuOpen(!props.menuOpen)}>
        {!props.menuOpen ? <GiHamburgerMenu /> : <GrClose />}
      </button>
    </nav>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>
      <a href="#home">Jamal.</a>
    </h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#projects">
        Projects
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:jamalkhanwaxir@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
