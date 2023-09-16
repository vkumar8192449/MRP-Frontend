import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import { useEffect, useState } from "react";

function AppWrapper() {
  const { currentUser, updateCurrentUser } = useUserContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
  }, [currentUser, updateCurrentUser, pathname, navigate]);
  return <>{isLoaded && <Outlet />}</>;
}

export default AppWrapper;
