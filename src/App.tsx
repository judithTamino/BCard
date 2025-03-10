import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { lazy, Suspense, useEffect, useState } from 'react';
import { SearchProvider } from './context/SearchContext';
import { Theme, ThemeProvider } from './context/ThemeContext';
import Signup from './components/Forms/Signup/Signup';



const About = lazy(() => import('./components/About/About'));

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
              </Routes>
            </Suspense>
          </Router>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
