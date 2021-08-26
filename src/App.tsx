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

  //FIXME: delete
  const handleClick = () => {
    store.setUserInfo("superDad@superStrength.com");
  };

  const getInfo = () => {
    let temp = JSON.stringify(store.getUserInfo, null, 2);
    console.log(temp);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (user?.email) {
    let data = { email: user.email };
    // console.log(user);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
      <button onClick={handleClick}>Click me</button>
      <button onClick={getInfo}>Get Info</button>
    </div>
  );
}

export default App;
