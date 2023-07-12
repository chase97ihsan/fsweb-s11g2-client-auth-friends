import { createContext } from "react";
import useLocalStorage from "../hook/UseLocalStorage";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useLocalStorage("s11g2", {});
  const { push } = useHistory();
  const logOut = () => {
    setAuthInfo({});
    push("/login");
  };
  const logIn = (credentials) => {
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => {
        setAuthInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const isLogIn = authInfo && authInfo.token;
  return (
    <AuthContext.Provider value={{ authInfo, logIn, logOut, isLogIn }}>
      {children}
    </AuthContext.Provider>
  );
};
