import "./App.css";
import { MainBackWall } from "./components/MainBackWall";
import { LoginBackWall } from "./components/LoginBackWall";
import { MainNavbar } from "./components/MainNavbar";
import { HeroSection } from "./components/HeroSection";
import { AuthLoginComponent } from "./Authenticator/AuthLoginComponent";
import { AuthAddExperience } from "./Authenticator/AuthAddExperience";
import { AuthRegisterComponent } from "./Authenticator/AuthRegisterComponent";
import { AuthProfile } from "./Authenticator/AuthProfile";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import AppWrapper from "./components/AppWrapper";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <UserProvider>
          <AppWrapper />
        </UserProvider>
      ),
      children: [
        {
          path: "/",
          element: <Navigate replace to="home" />,
        },
        {
          path: "home",
          element: (
            <>
              <MainBackWall />
              <MainNavbar />
              <HeroSection />
            </>
          ),
        },
        {
          path: "about",
          element: (
            <>
              <MainBackWall />
              <MainNavbar />
            </>
          ),
        },
        {
          path: "blog",
          element: (
            <>
              <MainBackWall />
              <MainNavbar />
            </>
          ),
        },
        {
          path: "contact",
          element: (
            <>
              <MainBackWall />
              <MainNavbar />
            </>
          ),
        },
        {
          path: "login",
          element: (
            <>
              <LoginBackWall />
              <MainNavbar />
              <AuthLoginComponent />
            </>
          ),
        },
        {
          path: "register",
          element: (
            <>
              <LoginBackWall />
              <MainNavbar />
              <AuthRegisterComponent />
            </>
          ),
        },
        {
          path: "addexperience",
          element: (
            <>
              <MainNavbar />
              <AuthAddExperience />
            </>
          ),
        },
        {
          path: "profile/dashboard",
          element: (
            <>
              <MainNavbar />
              <AuthProfile />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
