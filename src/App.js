import './App.css';
import { MainBackWall } from './components/MainBackWall';
import { LoginBackWall } from './components/LoginBackWall';
import { MainNavbar } from './components/MainNavbar';
import { HeroSection } from './components/HeroSection';
import { AuthLoginComponent } from './Authenticator/AuthLoginComponent';
import { AuthAddExperience } from './Authenticator/AuthAddExperience';
import { AuthRegisterComponent } from './Authenticator/AuthRegisterComponent';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [islogin, setislogin] = useState('true');
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
        <AuthLoginComponent islogin={islogin} />
      </>
    },
    {
      path: '/register',
      element: <>
        <LoginBackWall />
        <MainNavbar islogin={islogin} />
        <AuthRegisterComponent islogin={islogin} />
      </>
    },
    {
      path: '/addexperience',
      element: <>
        <MainNavbar islogin={islogin} />
        <AuthAddExperience islogin={islogin} />
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
