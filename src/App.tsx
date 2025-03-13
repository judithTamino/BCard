import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
//COMPONENTS
import Nav from './components/Nav/Nav';
//PAGES
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
//CONTEXT
import { SearchProvider } from './context/SearchContext';
import { Theme, ThemeProvider } from './context/ThemeContext';

import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';




const About = lazy(() => import('./pages/About/About'));

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document
      .querySelector('body')
      ?.classList.remove('dark-theme', 'light-theme');
    document.querySelector('body')?.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <>
    <ToastContainer/>
      <ThemeProvider value={{ theme, changeTheme }}>
        <SearchProvider value={{searchTerm, setSearchTerm}}>
          <Router>
            <header className='header'>
              <Nav />
            </header>

            <Suspense>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />
              </Routes>
            </Suspense>
            <Footer/>
          </Router>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
