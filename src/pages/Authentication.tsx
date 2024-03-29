import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Authentication = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_LOCAL_URL;

  const { getAccessTokenSilently, user } = useAuth0();

  const callApi = async () => {
    const response = await fetch(`${serverUrl}/`);

    const responseData = await response.json();

    setMessage(responseData);
  };

  const callSecureApi = async () => {
    const token = await getAccessTokenSilently();

    const response = await fetch(`${serverUrl}/auth?email=${user?.email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();

    setMessage(responseData);
  };

  return (
    <div>
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
