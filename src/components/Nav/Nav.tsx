import './Nav.css';
import { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LightDarkMode from '../LightDarkMode/LightDarkMode';
import SearchInput from '../SearchInput/SearchInput';

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  const closeNavbar = () => {
    setShowNav(false);
  };

  return (
    <nav className='nav container'>
      <NavLink className='nav-logo' to={`/`}>
        BCard
      </NavLink>

      <div className={`nav-menu ${showNav && 'show-menu'}`}>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink className='nav-link' to={`/about`} onClick={closeNavbar}>
              About
            </NavLink>
          </li>
        </ul>

        <div className='nav-actions'>
          <NavLink className='nav-login' to={'/'} onClick={closeNavbar}>
            Log in
          </NavLink>
          <NavLink className='nav-signup' to={'/signup'} onClick={closeNavbar}>
            Sign up
          </NavLink>
        </div>

        {/* <-- close button --> */}
        <div className='nav-close' onClick={handleShowNavbar}>
          <i className='ri-close-line'></i>
        </div>
      </div>

      {/* <-- search bar --> */}
      <SearchInput/>
  
      {/* <-- light / dark mode btn --> */}
      <LightDarkMode />

      {/* <-- toggle btn --> */}
      <div className='nav-toggle' onClick={handleShowNavbar}>
        <i className='ri-menu-line'></i>
      </div>
    </nav>
  );
};

export default Nav;
