import "./App.css";
import { MainBackWall } from "./components/MainBackWall";
import { LoginBackWall } from "./components/LoginBackWall";
import { MainNavbar } from "./components/MainNavbar";
import { Element } from "react-scroll";
import { Team } from "./components/Team";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
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
              <Element name="home">
                <HeroSection />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="team">
                <Team />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
              <Footer />
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
          path: "team",
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
              {/* <MainNavbar setinterviewid={setinterviewid} /> */}
              <div className="flex sm:p-24 px-8 pt-16 gap-12 sm:gap-52 md:flex-row flex-col-reverse items-center justify-center">
                <LoginBackWall />
                <AuthLoginComponent />
              </div>
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
