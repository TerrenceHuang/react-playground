import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import LanguageChooser from "./components/LanguageChooser";
import Navbar from "./components/Navbar";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Navbar />
      <div className="container">
        <LanguageChooser />
      </div>
    </Router>
  );
}

export default App;
