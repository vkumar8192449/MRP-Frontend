import { Outlet } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import { useEffect, useState } from "react";
import { initLogin } from "../services/authServices";

function AppWrapper() {
  const { currentuser, setcurrentuser, setislogin } = useUserContext();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      if (!currentuser) {
        const { data } = await initLogin();
        if (data?.user) {
          setcurrentuser({ user: data.user });
          setislogin("true");
        }
      }
      setIsLoaded(true);
    })();
  }, [currentuser, setcurrentuser, setislogin]);
  return <>{isLoaded && <Outlet />}</>;
}

export default AppWrapper;
