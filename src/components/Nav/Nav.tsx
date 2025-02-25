import './Nav.css';
import { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';


interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  }

  return (
    <nav className='nav container'>
      <NavLink className='nav-logo' to={`/`}>
        BCard
      </NavLink>

      <div className={`nav-menu ${showNav && 'show-menu'}`}>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink className='nav-link' to={`/about`}>
              About
            </NavLink>
          </li>
        </ul>

        <div className='nav-actions'>
          <NavLink className='nav-login' to={'/'}>
            Log in
          </NavLink>
          <NavLink className='nav-signup' to={'/'}>
            Sign up
          </NavLink>
        </div>

        {/* <-- close button --> */}
        <div className='nav-close' onClick={handleShowNavbar}>
          <i className='ri-close-line'></i>
        </div>
      </div>

      <div className='nav-search'>
        <div className='search-form'>
          <input
            type='search'
            className='serch-input'
            placeholder='Search...'
          />
        </div>
      </div>

      {/* <-- toggle button --> */}
      <div className='nav-toggle' onClick={handleShowNavbar}>
        <i className='ri-menu-line'></i>
      </div>
    </nav>
  );
};

export default Nav;
