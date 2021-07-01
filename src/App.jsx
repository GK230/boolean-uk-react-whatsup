import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoggedInPage from "./pages/LoggedInPage";
import MessagesPanel from "./components/MessagesPanel";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/logged-in">
          <LoggedInPage />
        </Route>
        <Route exact path="/logged-in/:chatId">
          <MessagesPanel />
        </Route>
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
