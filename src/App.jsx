import { useTranslation } from "react-i18next";

import "./App.scss";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>{t("App Component title")}</h1>
    </>
  );
}

export default App;
