import './LightDarkMode.css';
import { FunctionComponent } from 'react';
import useTheme from '../../context/ThemeContext';

interface LightDarkModeProps {}

const LightDarkMode: FunctionComponent<LightDarkModeProps> = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className='theme-container container'>
      {theme === 'light' ? (
        <i className='ri-moon-line theme-btn' onClick={changeTheme}></i>
      ) : (
        <i className='ri-sun-line theme-btn' onClick={changeTheme}></i>
      )}
    </div>
  );
};

export default LightDarkMode;
