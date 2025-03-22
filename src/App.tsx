import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
//COMPONENTS
import Footer from './components/Footer/Footer';
//CONTEXT
import { SearchProvider } from './context/SearchContext';
import { Theme, ThemeProvider } from './context/ThemeContext';
import NavGuest from './components/NavGuest/NavGuest';
import { AutoProvider } from './context/AuthContext';
import NavUser from './components/NavUser/NavUser';
import { IUser } from './interfaces/users/IUser';
import { UserProvider } from './context/UserContext';
import BusinessCard from './pages/BusinessCard/BusinessCard';

const About = lazy(() => import('./pages/About/About'));
const Home = lazy(() => import('./pages/Home/Home'));
const FavCards = lazy(() => import('./pages/FavCards/FavCards'));
const CreateCard = lazy(() => import('./pages/CreateCard/CreateCard'));
const MyCards = lazy(() => import('./pages/MyCards/MyCards'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Login = lazy(() => import('./pages/Login/Login'));
const EditCard = lazy(() => import('./pages/EditCard/EditCard'));

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  });
  const [user, setUser] = useState<IUser>();

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const login = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  };
  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    document
      .querySelector('body')
      ?.classList.remove('dark-theme', 'light-theme');
    document.querySelector('body')?.classList.add(`${theme}-theme`);
  }, [theme]);

  useEffect(() => {
    sessionStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  return (
    <>
      <ToastContainer />
      <AutoProvider value={{ isLoggedIn, login, logout }}>
        <UserProvider value={{ user, setUser }}>
          <ThemeProvider value={{ theme, changeTheme }}>
            <SearchProvider value={{ searchTerm, setSearchTerm }}>
              <Router>
                <header className='header'>
                  {isLoggedIn ? <NavUser /> : <NavGuest />}
                </header>
                <Routes>
                  <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path=':id' element={<BusinessCard/>} />
                  </Route>
                  {/* <Route path='/' element={<Home />} /> */}
                  <Route path='/about' element={<About />} />
                  <Route path='/fav' element={<FavCards />} />
                  <Route path='/createCard' element={<CreateCard />} />
                  <Route path='/myCards' element={<MyCards />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/edit/:id' element={<EditCard />} />
                </Routes>
                <Footer isLoggedIn={isLoggedIn} />
              </Router>
            </SearchProvider>
          </ThemeProvider>
        </UserProvider>
      </AutoProvider>
    </>
  );
}

export default App;
