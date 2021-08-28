import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import Loading from "./components/loading";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import AppRouter from "./router/AppRouter";
import store from "./store";

function App() {
  const { isLoading, user } = useAuth0();
  const [isUserInfo, setIsUserInfo] = useState(false);

  useEffect(() => {
    if (user?.email && !isUserInfo) {
      console.log("Here", Date.now());
      store.setUserInfo(user.email);
      setIsUserInfo(true);
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
