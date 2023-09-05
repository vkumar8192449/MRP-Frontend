import './App.css';
import { MainBackWall } from './components/MainBackWall';
import { LoginBackWall } from './components/LoginBackWall';
import { MainNavbar } from './components/MainNavbar';
import { HeroSection } from './components/HeroSection';
import { LoginComponent } from './components/LoginComponent';
import { AddExperience } from './components/AddExperience';
import { RegisterComponent } from './components/RegisterComponent';
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
        <LoginComponent />
      </>
    },
    {
      path: '/register',
      element: <>
        <LoginBackWall />
        <MainNavbar islogin={islogin} />
        <RegisterComponent />
      </>
    },
    {
      path: '/addexperience',
      element: <>
        <MainNavbar islogin={islogin} />
        <AddExperience />
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
