import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const [state, setState] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const { logIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    logIn(state);
  };
  return (
    <div className="pages">
      <h1>LOGIN</h1>
      <div>
        <div>
          <h2>USERNAME</h2>
          <input
            onChange={changeHandler}
            type="text"
            value={state.username}
            name="username"
            className="input"
          />
        </div>
        <div>
          <h2>PASSWORD</h2>
          <input
            onChange={changeHandler}
            type="password"
            value={state.password}
            name="password"
            className="input"
          />
        </div>
        <hr />
        <button onClick={handleLogin}>
          <span>SUBMIT</span>
        </button>
      </div>
    </div>
  );
};
