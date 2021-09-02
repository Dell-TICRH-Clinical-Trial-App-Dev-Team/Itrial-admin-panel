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
      //   //FIXME: /api/cccs/:id, id is hardcoded. (also fix in store.test.tsx)
      //   store.setUserInfo("tree@hipster.com", "61269208a73cdc406c9641c4");
      //   setIsUserInfo(true);
    }
  });

  const setClick = () => {
    store.setUserInfo("tree@hipster.com", "61269208a73cdc406c9641c4");
  };
  const handleClick = () => {
    console.log(store.getUserInfo);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
      <button onClick={setClick}>Set</button>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
}

export default App;
