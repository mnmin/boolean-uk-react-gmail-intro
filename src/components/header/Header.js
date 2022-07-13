import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import "../../styles/Header/header.css";

function Header() {
  return (
    <header className="header">
      <NavMenu />
      <SearchBar />
    </header>
  );
}

export default Header;
