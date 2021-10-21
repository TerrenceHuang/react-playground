import { useTranslation } from "react-i18next";

import "./App.scss";
import LanguageChooser from "./components/LanguageChooser";

function App() {
  const { t } = useTranslation();

  return (
    <div class="container">
      <h1>{t("App Component title")}</h1>
      <LanguageChooser />
    </div>
  );
}

export default App;
