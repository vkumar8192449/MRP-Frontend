import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const useUserContext = () => useContext(UserContext);

export default useUserContext;
