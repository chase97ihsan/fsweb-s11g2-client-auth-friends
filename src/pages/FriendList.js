import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const FriendList = () => {
  const [friends, setFriends] = useState([]);
  const { isLogIn } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: isLogIn,
        },
      })
      .then((res) => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>FRIENDS LIST</h1>
      {friends.map((friend) => (
        <h2>
          -{friend.name}-{friend.email}
        </h2>
      ))}
    </div>
  );
};
