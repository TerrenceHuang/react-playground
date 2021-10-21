import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavbarBrand() {
  const { t } = useTranslation();

  return (
    <Link className="navbar-brand" to="/">
      {t("Navbar title")}
    </Link>
  );
}

export default NavbarBrand;
