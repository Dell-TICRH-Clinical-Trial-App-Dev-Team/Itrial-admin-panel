import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Hello from "../pages/Hello";

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
          <Route path='/patientManagement'>

          </Route>
          <Route path='/siteManagement'>

          </Route>
          <Route path='/trialManagement'>

          </Route>
          <Route path='/teamManagement'>

          </Route>
          <Route path='/authenticate'>

          </Route>
          <Route path='/dashboard'>
            
          </Route>
          <Route path='/'>
              <Hello />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
