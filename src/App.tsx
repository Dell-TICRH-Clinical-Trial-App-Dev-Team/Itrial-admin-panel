import React from "react";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
