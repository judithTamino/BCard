import './NavUser.css';
import '../../css/Nav.css';
import { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LightDarkMode from '../LightDarkMode/LightDarkMode';
import SearchInput from '../SearchInput/SearchInput';
import useAuto from '../../context/AuthContext';
import { sucessMsg } from '../../services/feedbackService';
import ProfileImage from '../ProfileImage/ProfileImage';
import { decodeToken } from '../../services/tokenService';

interface NavUserProps {}

const NavUser: FunctionComponent<NavUserProps> = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const { logout } = useAuto();
  const closeNav = () => setShowNav(false);

  const token = sessionStorage.getItem('token');
  const decodedToken: any = token ? decodeToken(token) : null;

  const handleLogout = () => {
    sucessMsg('logged out successfuly');
    logout();
  };

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

          <li className='nav-item'>
            <NavLink className='nav-link' to={`/fav`} onClick={closeNav}>
              Fav Cards
            </NavLink>
          </li>

          {decodedToken.isBusiness ? (
            <li className='nav-item'>
              <NavLink className='nav-link' to={`/`} onClick={closeNav}>
                My Cards
              </NavLink>
            </li>
          ) : null}

          <li className='nav-item nav-btns'>
            <button className='btn-icon'>
              <i
                className='ri-logout-box-line'
                onClick={() => {
                  closeNav();
                  handleLogout();
                }}
              ></i>
            </button>
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
        <ProfileImage />
        <div className='nav-toggle' onClick={() => setShowNav(true)}>
          <i className='ri-menu-line'></i>
        </div>
      </div>
    </nav>
  );
};

export default NavUser;
