import './App.css';
import { MainBackWall } from './components/MainBackWall';
import { LoginBackWall } from './components/LoginBackWall';
import { MainNavbar } from './components/MainNavbar';
import { HeroSection } from './components/HeroSection';
import { AuthLoginComponent } from './Authenticator/AuthLoginComponent';
import { AuthAddExperience } from './Authenticator/AuthAddExperience';
import { AuthRegisterComponent } from './Authenticator/AuthRegisterComponent';
import { AuthProfile } from './Authenticator/AuthProfile';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [islogin, setislogin] = useState('false');
  const [currentuser, setcurrentuser] = useState({
    "user": {},
  })
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate replace to="/home" />
    },
    {
      path: '/home',
      element: <>
        <MainBackWall />
        <MainNavbar islogin={islogin} />
        <HeroSection />
      </>
    },
    {
      path: '/about',
      element: <>
        <MainBackWall />
        <MainNavbar islogin={islogin} />
      </>
    },
    {
      path: '/blog',
      element: <>
        <MainBackWall />
        <MainNavbar islogin={islogin} />
      </>
    },
    {
      path: '/contact',
      element: <>
        <MainBackWall />
        <MainNavbar islogin={islogin} />
      </>
    },
    {
      path: '/login',
      element: <>
        <LoginBackWall />
        <MainNavbar islogin={islogin} />
        <AuthLoginComponent islogin={islogin} setislogin={setislogin} setcurrentuser={setcurrentuser} />
      </>
    },
    {
      path: '/register',
      element: <>
        <LoginBackWall />
        <MainNavbar islogin={islogin} />
        <AuthRegisterComponent islogin={islogin} setislogin={setislogin} setcurrentuser={setcurrentuser} />
      </>
    },
    {
      path: '/addexperience',
      element: <>
        <MainNavbar islogin={islogin} />
        <AuthAddExperience islogin={islogin} />
      </>
    },
    {
      path: '/profile/dashboard',
      element: <>
        <MainNavbar islogin={islogin} />
        <AuthProfile islogin={islogin} />
      </>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
