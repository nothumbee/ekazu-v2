import { useContext } from "react";
import AuthUserContext from "../context";

const useAuth = () => useContext(AuthUserContext);

export default useAuth;
