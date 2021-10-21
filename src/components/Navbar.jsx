import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div Class="container-fluid">
        <Link class="navbar-brand" to="/">
          {t("Navbar title")}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
