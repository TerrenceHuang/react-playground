import NavbarBrand from "./NavbarBrand";
import NavItems from "./NavItems";
import NavItemsToggler from "./NavItemsToggler";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavbarBrand />
        <NavItemsToggler />
        <NavItems />
      </div>
    </nav>
  );
}

export default Navbar;
