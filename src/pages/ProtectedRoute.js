import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedPage = ({ pageComponent: PageComponent, from }) => {
  const { isLogIn } = useContext(AuthContext);
  return isLogIn ? <PageComponent /> : <Redirect to="/login" from={from} />;
};
export default ProtectedPage;
