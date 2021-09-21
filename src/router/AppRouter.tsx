import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "../auth/protected-route";
import Authentication from "../pages/Authentication";
import Patients from "../pages/Patients";
import Sites from "../pages/Sites/Sites";
import AddSitesLayout from "../pages/Sites/AddSite/AddSitesLayout";
import Teams from "../pages/Teams";
import Trials from "../pages/Trials/Trials";
import Navbar from "../components/navbar";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/authenticate" component={Authentication} />
        <ProtectedRoute path="/trials" component={Trials} />
        <ProtectedRoute path="/sites" component={Sites} />
        <ProtectedRoute path="/add-sites" component={AddSitesLayout} />
        <ProtectedRoute path="/teams" component={Teams} />
        <ProtectedRoute path="/patients" component={Patients} />
      </Switch>
    </Router>
  );
}
