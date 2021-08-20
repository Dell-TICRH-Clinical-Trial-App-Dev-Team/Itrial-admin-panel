import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProtectedRoute from "../auth/protected-route";
import AuthenticationButton from "../components/authentication-button";
import Authentication from "../pages/Authentication";
import Patients from "../pages/Patients";
import Sites from "../pages/Sites";
import Teams from "../pages/Teams";
import Trials from "../pages/Trials";

export default function AppRouter() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <span> </span>
            <Link to="/authenticate">Authenticate</Link>
          </li>
          <li>
            <AuthenticationButton></AuthenticationButton>
          </li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/authenticate" component={Authentication} />
        <ProtectedRoute path="/trials" component={Trials} />
        <ProtectedRoute path="/sites" component={Sites} />
        <ProtectedRoute path="/teams" component={Teams} />
        <ProtectedRoute path="/patients" component={Patients} />
      </Switch>
    </Router>
  );
}
