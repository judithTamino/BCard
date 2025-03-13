import { FunctionComponent } from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const navigate = useNavigate();
  return (
    <footer className='footer'>
      <div className='footer-container container grid'>
        <div className='footer-content grid'>
          <div>
            <button className='footer-logo' onClick={() => navigate('/')}>BCard</button>
          </div>

          <ul className='footer-links'>
            <li>
              <button className='footer-link' onClick={() => navigate('/about')}>About</button>
            </li>
          </ul>
        </div>

        <div className='footer-group'>
          <div className='footer-contact'>
            <a href='tel:05256699585' className='footer-contact--link'>
              <i className='ri-phone-fill'></i>
            </a>
            <a href='mailto:judith@gmail.com' className='footer-contact--link'>
              <i className='ri-mail-fill'></i>
            </a>
            <a href='https://www.instagram.com/' target='_blank' className='footer-contact--link'>
              <i className='ri-instagram-fill'></i>
            </a>
          </div>
          <span className='footer-copy'>
            &#169; Copyright Judith. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
