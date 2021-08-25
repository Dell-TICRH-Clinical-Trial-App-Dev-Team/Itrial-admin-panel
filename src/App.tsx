import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loading from "./components/loading";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import AppRouter from "./router/AppRouter";
import store from "./store";

function App() {
  const { isLoading, user } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (user?.email) {
    let data = { email: user.email };
    store.setUserInfo(data);
    console.log(user);
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
