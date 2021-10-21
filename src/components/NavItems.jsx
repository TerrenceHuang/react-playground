import NavItem from "./NavItem";

function NavItems() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavItem pathname="/languages" textLanguageKey="Languages" />
      </ul>
    </div>
  );
}

export default NavItems;
