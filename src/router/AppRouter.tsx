import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AuthenticationButton from "../components/authentication-button";

import Hello from "../pages/Hello";
import Authenticate from "../pages/Authenticate";
import Dashboard from "../pages/Dashboard";
import PatientManagement from "../pages/PatientManagement";
import SiteManagement from "../pages/SiteManagement";
import TeamManagement from "../pages/TeamManagement";
import TrialManagement from "../pages/TrialManagement";
import ProtectedRoute from "../auth/protected-route";

export default function AppRouter() {
  return (
    <Router>
      <div>
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
          <Route path="/authenticate">
            <Authenticate />
          </Route>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute
            path="/patientManagement"
            component={PatientManagement}
          />
          <ProtectedRoute path="/siteManagement" component={SiteManagement} />
          <ProtectedRoute path="/teamManagement" component={TeamManagement} />
          <ProtectedRoute path="/trialManagement" component={TrialManagement} />
          <Route path="/">
            <Hello />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
