import "../styles/App.css";

import { useAuth0 } from "@auth0/auth0-react";

const Greetings = () => {
  const { user } = useAuth0();

  return (
    <h1>
      Welcome to Itrial
      {user?.name ? ", " + user.name + "." : ". Please login or signup!"}
    </h1>
  );
};

export default Greetings;
