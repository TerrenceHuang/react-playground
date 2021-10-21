import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import NavItem from "./NavItem";
import NavItemsToggler from "./NavItemsToggler";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div Class="container-fluid">
        <Link class="navbar-brand" to="/">
          {t("Navbar title")}
        </Link>
        <NavItemsToggler />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem pathname="/languages" textLanguageKey="Languages" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
