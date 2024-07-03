import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import menuBtn from '../../assets/shared/icon-hamburger.svg'
import closeBtn from '../../assets/shared/icon-close.svg'

function Nav() {
  const pathname = useLocation()
  const [active, setActive] = useState(pathname.pathname === '/' ? '/home' : pathname.pathname
  );
  const [activeNav, setActiveNav] = useState(false)


  return (

    <nav className="nav">
      <img src={logo} alt="" className="nav__logo" />

      {!activeNav && <img src={menuBtn} alt="open menu" className="nav__openMenu" onClick={() => setActiveNav(true)} style={{ cursor: 'pointer' }} />}

      <div className="nav__line"></div>

      <div className={activeNav ? "nav__links active" : 'nav__links'}>
        <img src={closeBtn} alt="" onClick={() => setActiveNav(false)} style={{ cursor: 'pointer' }} />
        <ul>
          <li
            className={active === "/home" ? "active" : ""}
          >
            <NavLink to="/" onClick={() => setActive(pathname.pathname)}>
              <span>00</span> HOME
            </NavLink>
          </li>
          <li
            className={active === "/destination" ? "active" : ""}
          >
            <NavLink to="/destination" onClick={() => setActive(pathname.pathname)}>
              <span>01</span> DESTINATION
            </NavLink>
          </li>
          <li
            className={active === "/crew" ? "active" : ""}
          >
            <NavLink to="/crew" onClick={() => setActive(pathname.pathname)}>
              <span>02</span> CREW
            </NavLink>
          </li>
          <li
            className={active === "/technology" ? "active" : ""}
          >
            <NavLink to="/technology" onClick={() => setActive(pathname.pathname)}>
              <span>03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>

    </nav>

  );
}

export default Nav;
