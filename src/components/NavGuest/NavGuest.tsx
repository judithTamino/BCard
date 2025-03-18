import './NavGuest.css';
import '../../css/Nav.css';
import '../../css/btn.css';
import LightDarkMode from '../LightDarkMode/LightDarkMode';
import SearchInput from '../SearchInput/SearchInput';
import { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavGuestProps {}

const NavGuest: FunctionComponent<NavGuestProps> = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const closeNav = () => setShowNav(false);

  return (
    <nav className='nav container'>
      <NavLink className='nav-logo' to='/'>
        BCard
      </NavLink>

      <div className={`nav-menu ${showNav && 'show-menu'}`}>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/about' onClick={closeNav}>
              About
            </NavLink>
          </li>

          <li className='nav-item nav-btns'>
            <NavLink className=' btn-icon' to='/login' onClick={closeNav}>
            <i className="ri-login-box-line"></i>
            </NavLink>
            <NavLink className='btn' to='/signup' onClick={closeNav}>
              Sign up
            </NavLink>
          </li>
        </ul>

        {/* <-- close button --> */}
        <div className='nav-close' onClick={closeNav}>
          <i className='ri-close-line'></i>
        </div>
      </div>

      <div className='nav-actions'>
        <SearchInput />
        <LightDarkMode />
        <div className='nav-toggle' onClick={() => setShowNav(true)}>
          <i className='ri-menu-line'></i>
        </div>
      </div>
    </nav>
  );
};

export default NavGuest;
