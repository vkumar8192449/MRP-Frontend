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
import { useState } from "react";

function App() {
  const [interviewid, setinterviewid] = useState("");
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
              <MainNavbar setinterviewid={setinterviewid} />
              <HeroSection />
            </>
          ),
        },
        {
          path: "about",
          element: (
            <>
              <MainBackWall />
              <MainNavbar setinterviewid={setinterviewid} />
            </>
          ),
        },
        {
          path: "blog",
          element: (
            <>
              <MainBackWall />
              <MainNavbar setinterviewid={setinterviewid} />
            </>
          ),
        },
        {
          path: "contact",
          element: (
            <>
              <MainBackWall />
              <MainNavbar setinterviewid={setinterviewid} />
            </>
          ),
        },
        {
          path: "login",
          element: (
            <>
              <LoginBackWall />
              <MainNavbar setinterviewid={setinterviewid} />
              <AuthLoginComponent />
            </>
          ),
        },
        {
          path: "register",
          element: (
            <>
              <LoginBackWall />
              <MainNavbar setinterviewid={setinterviewid} />
              <AuthRegisterComponent />
            </>
          ),
        },
        {
          path: "addexperience",
          element: (
            <>
              <MainNavbar setinterviewid={setinterviewid} />
              <AuthAddExperience interviewid={interviewid} />
            </>
          ),
        },
        {
          path: "profile/dashboard",
          element: (
            <>
              <MainNavbar setinterviewid={setinterviewid} />
              <AuthProfile setinterviewid={setinterviewid} />
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
