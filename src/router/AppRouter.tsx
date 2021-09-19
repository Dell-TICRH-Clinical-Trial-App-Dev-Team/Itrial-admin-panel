import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProtectedRoute from "../auth/protected-route";
import AuthenticationButton from "../components/authentication-button";
import Authentication from "../pages/Authentication";
import Patients from "../pages/Patients";
import Sites from "../pages/Sites/Sites";
import AddSitesLayout from "../pages/Sites/AddSite/AddSitesLayout";
import AddTrialsLayout from "../pages/Trials/AddTrial/AddTrialsLayout";
import Teams from "../pages/Teams";
import Trials from "../pages/Trials/Trials";
import Greetings from "../components/Greetings";

export default function AppRouter() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <span> </span>
            <Link to="/authenticate">Authenticate</Link>
            <span> </span>
            <Link to="/trials">Trials</Link>
            <span> </span>
            <Link to="/sites">Sites</Link>
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
        <ProtectedRoute path="/add-sites" component={AddSitesLayout} />
        <ProtectedRoute path="/add-trials" component={AddTrialsLayout} />
        <ProtectedRoute path="/teams" component={Teams} />
        <ProtectedRoute path="/patients" component={Patients} />
        <Route path="/" component={Greetings} />
      </Switch>
    </Router>
  );
}
