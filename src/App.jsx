import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import "./App.scss";
import Home from "./components/Home";
import LanguageChooser from "./components/LanguageChooser";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container pt-3">
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
          <Router path="/languages">
            <LanguageChooser />
          </Router>
          <Router>
            <Redirect to="/" />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
