import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Authentication from "../pages/Authentication";
import Patients from "../pages/Patients";
import Sites from "../pages/Sites";
import Teams from "../pages/Teams";
import Trials from "../pages/Trials/Trials";

export default function AppRouter() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/authentication' component={Authentication}/>
        <Route path='/trials' component={Trials} />
        <Route path='/sites' component={Sites} />
        <Route path='/teams' component={Teams} />
        <Route path='/patients' component={Patients} />
      </Switch>
    </Router>
  );
}
