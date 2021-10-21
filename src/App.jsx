import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import Home from "./components/Home";
import LanguageChooser from "./components/LanguageChooser";
import Navbar from "./components/Navbar";

// TODO: This is for github page, find a way to put to config in the future, homepage property in package.json also
const routeBasename = "/react-playground";

function App() {
  return (
    <Router basename={routeBasename}>
      <Navbar />
      <div className="container pt-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/languages">
            <LanguageChooser />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
