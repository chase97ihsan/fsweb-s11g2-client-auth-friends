import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
export const AddFriend = () => {
  const [friend, setFriend] = useState({
    name: "",
    email: "",
  });
  const { isLogIn } = useContext(AuthContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/friends", friend, {
        headers: {
          Authorization: isLogIn,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="pages">
      <h1>ADD FRIEND</h1>
      <div>
        <div>
          <h2>FRIEND NAME</h2>
          <input
            onChange={changeHandler}
            type="text"
            value={friend.name}
            name="name"
            className="input"
          />
        </div>
        <div>
          <h2>FRIEND EMAIL</h2>
          <input
            onChange={changeHandler}
            type="email"
            value={friend.email}
            name="email"
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
