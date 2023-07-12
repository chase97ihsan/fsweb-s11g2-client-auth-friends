import "./App.css";
import { AddFriend } from "./pages/AddFriend";
import { FriendList } from "./pages/FriendList";
import { LoginPage } from "./pages/Login";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { LogOut } from "./pages/LogOut";
import ProtectedPage from "./pages/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <header>
        <h2>FRIENDS DATABASE</h2>
        <div>
          <NavLink to="/login" exact>
            LOGIN.
          </NavLink>
          <NavLink to="/friends" exact>
            FRIENDLIST.
          </NavLink>
          <NavLink to="/friends/add" exact>
            ADDFRIEND.
          </NavLink>
          <NavLink to="/logout" exact>
            LOGOUT.
          </NavLink>
        </div>
      </header>
      <div className="pages">
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/friends" exact>
            <ProtectedPage pageComponent={FriendList} from={"/friends"} />
          </Route>
          <Route path="/friends/add" exact>
            <ProtectedPage pageComponent={AddFriend} from={"/friends/add"} />
          </Route>
          <Route path="/logout" exact>
            <LogOut />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
