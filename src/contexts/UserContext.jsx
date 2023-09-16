import { createContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider(children) {
  const [currentuser, setCurrentuser] = useState(null);

  const values = { currentuser, setCurrentuser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
