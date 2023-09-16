import { createContext, useCallback, useState } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [currentuser, setCurrentuser] = useState(null);
  const updateCurrentUser = useCallback(
    (newUser) => setCurrentuser({ ...newUser }),
    []
  );

  const values = { currentuser, updateCurrentUser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
