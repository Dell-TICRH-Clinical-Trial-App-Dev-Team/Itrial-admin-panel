import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loading from "./components/loading";
import AppRouter from "./router/AppRouter";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
