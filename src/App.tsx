import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CSSBaseLine from "@material-ui/core/CssBaseline";
import Main from "./pages/Main";
import Layout from "./layout";
const customTheme = createMuiTheme({
  palette: {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.06)",
    },
    background: {
      default: "#e0e0e0",
    },
    primary: {
      main: "#dea163",
      dark: "#232323",
      light: "#ffffffc2",
    },
    secondary: {
      main: "#2f2f2f",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CSSBaseLine />
        <Switch>
          <Layout>
            <Route exact path="/">
              <Main />
            </Route>
          </Layout>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
