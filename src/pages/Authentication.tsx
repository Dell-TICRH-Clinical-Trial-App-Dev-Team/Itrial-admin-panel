import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Activate from "./AuthenticationPages/Activate";
import Login from "./AuthenticationPages/Login";

const Authentication = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/activate`}>
          <Activate />
        </Route>
        <Route path={`${path}/login`}>
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default Authentication;
