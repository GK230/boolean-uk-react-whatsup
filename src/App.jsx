import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import LoggedInPage from "./pages/LoggedInPage";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [conversations, setConversations] = useState([]);

  const currentUser = users.find((user) => user.id === currentUserId);
  const otherUsers = users.filter((user) => user.id !== currentUserId);

  function logIn(userId) {
    setCurrentUserId(userId);
  }

  // How do I log out?
  function logOut() {
    setCurrentUserId(null);
  }

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    if (!currentUserId) {
      setConversations([]);
      history.push("/login");
    } else {
      fetch(`http://localhost:4000/conversations?userId=${currentUserId}`)
        .then((resp) => resp.json())
        .then(setConversations);

      history.push("/logged-in");
    }
  }, [currentUserId, history]);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage users={users} logIn={logIn}/>
        </Route>
        <Route exact path="/logged-in">
          <LoggedInPage
            currentUser={currentUser}
            logOut={logOut}
            otherUsers={otherUsers}
            conversations={conversations}
          />
        </Route>
        {/* <Route exact path="/logged-in/:chatId">
        </Route> */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        {/* <Route exact path="/">
          {userId ? <Redirect to="/logged-in" /> : <LoginPage />}
        </Route> */}
      </Switch>
    </Router>
  );
}
