import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { lazy, Suspense, useEffect, useState } from 'react';
import { SearchContext } from './context/SearchContext';
import { Theme, ThemeProvider } from './context/ThemeContext';

const About = lazy(() => import('./components/About/About'));

function App() {
  const [searchData, setSearchData] = useState<string>('');
  const [theme, setTheme] = useState<Theme>('light');

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.querySelector('body')?.classList.remove('dark-theme', 'light-theme');
    document.querySelector('body')?.classList.add(`${theme}-theme`);

  }, [theme]);

  return (
    <>
      <ThemeProvider value={{theme, changeTheme}}>
        <SearchContext.Provider value={[searchData, setSearchData]}>
          <Router>
            <header className='header'>
              <Nav />
            </header>

            <Suspense>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </Suspense>
          </Router>
        </SearchContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
