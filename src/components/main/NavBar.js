import NavBarUl from "./NavBarUl";

const NavBar = () => {
  return (
    <nav className="email-toolbar">
      <NavBarUl />
      <div className="space"></div>
      <div>
        <p>1 of 25</p>
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </nav>
  );
};
export default NavBar;
