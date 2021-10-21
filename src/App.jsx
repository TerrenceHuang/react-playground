import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import LanguageChooser from "./components/LanguageChooser";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div class="container">
        <h1>{t("App Component title")}</h1>
        <LanguageChooser />
      </div>
    </Router>
  );
}

export default App;
