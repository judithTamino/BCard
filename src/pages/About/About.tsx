import { FunctionComponent } from 'react';
import './About.css';
import useTheme from '../../context/ThemeContext';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  const { theme } = useTheme();
  return (
    <section className='about section'>
      <div className='about-container container grid'>
        <div className='about-data'>
          {theme === 'light' ? (
            <img
              src='./logo-light.png'
              alt='BCard logo'
              className='about-logo about-logo--light'
            />
          ) : (
            <img
              src='./logo-dark.png'
              alt='BCard logo'
              className='about-logo about-logo--dark'
            />
          )}
          <h1 className='about-title'>BCard</h1>
        </div>

        <p className='about-description'>
          At BCard, we believe that first impressions matter. That's why we've
          made it easy for entrepreneurs, freelancers, and businesses of all
          sizes to create professional, eye-catching business cards that leave a
          lasting impact.
        </p>

        <div className='about-offer'>
          <h2 className='section-title'>Why Choose Us?</h2>
          <ul className='about-list'>
            <li className='about-item'>
              <i className='ri-check-line'></i>
              <span>
                Create professional business cards with our creation tools.
              </span>
            </li>

            <li className='about-item'>
              <i className='ri-check-line'></i>
              <span>Edit and Delete your business card.</span>
            </li>

            <li className='about-item'>
              <i className='ri-check-line'></i>
              <span>
                Explore a wide range of business cards within our app.
              </span>
            </li>
          </ul>
        </div>

        <div className='about-mission'>
          <h2 className='section-title'>Our Mission</h2>
          <p>
            We're on a mission to help businesses and professionals make
            meaningful connections. Whether you're just starting out or an
            established brand, we're here to provide you with the tools to
            promote yourself with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
