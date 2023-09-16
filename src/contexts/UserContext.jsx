import { createContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [currentuser, setcurrentuser] = useState(null);
  const [islogin, setislogin] = useState("false");

  const values = { currentuser, islogin, setcurrentuser, setislogin };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export { UserProvider };
export default UserContext;
