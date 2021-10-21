import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavItem({ pathname, textLanguageKey }) {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${location.pathname === pathname ? "active" : ""}`}
        aria-current={location.pathname === pathname ? "page" : ""}
        to={textLanguageKey}
      >
        {t(textLanguageKey)}
      </Link>
    </li>
  );
}

export default NavItem;
