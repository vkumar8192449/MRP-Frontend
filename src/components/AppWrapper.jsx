import { Outlet } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import { useEffect, useState } from "react";
import { initLogin } from "../services/authServices";

function AppWrapper() {
  const { currentUser, updateCurrentUser } = useUserContext();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      if (!currentUser) {
        const { data } = await initLogin();
        if (data?.user) {
          updateCurrentUser(data.user);
        }
      }
      setIsLoaded(true);
    })();
  }, [currentUser, updateCurrentUser]);
  return <>{isLoaded && <Outlet />}</>;
}

export default AppWrapper;
