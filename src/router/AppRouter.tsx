import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Hello from "../pages/Hello";
import Authenticate from "../pages/Authenticate";
import Dashboard from "../pages/Dashboard";
import PatientManagement from "../pages/PatientManagement";
import SiteManagement from "../pages/SiteManagement";
import TeamManagement from "../pages/TeamManagement";
import TrialManagement from "../pages/TrialManagement";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/authenticate'>
            <Authenticate />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/patientManagement'>
            <PatientManagement />
          </Route>
          <Route path='/siteManagement'>
            <SiteManagement />
          </Route>
          <Route path='/teamManagement'>
            <TeamManagement />
          </Route>
          <Route path='/trialManagement'>
            <TrialManagement />
          </Route>
          <Route path='/'>
            <Hello />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
