import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="logout">
      <button onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
};
