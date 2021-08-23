import { Switch, Route, useRouteMatch } from "react-router-dom";

import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import env from "react-dotenv";

import Activate from "./AuthenticationPages/Activate";
import Login from "./AuthenticationPages/Login";

const Authentication = () => {
  let { path } = useRouteMatch();

  const [message, setMessage] = useState("");
  const serverUrl = process.env.PROD
    ? env.REACT_APP_SERVER_PROD_URL
    : env.REACT_APP_SERVER_PROD_URL;

  const { getAccessTokenSilently, user } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/`);

      const responseData = await response.json();

      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token);

      const response = await fetch(`${serverUrl}/auth?email=${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
    }
  };

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
      <div className="container">
        <h1>Authentication</h1>
        <p>Test accessing the API</p>
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="External API Requests Examples"
        >
          <button type="button" className="btn btn-primary" onClick={callApi}>
            Get Public Message
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={callSecureApi}
          >
            Get Protected Message
          </button>
        </div>
        {message && (
          <div className="mt-5">
            <h6 className="muted">Result</h6>
            <div className="container-fluid">
              <div className="row">
                <code className="col-12 text-light bg-dark p-4">{message}</code>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
