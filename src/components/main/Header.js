import Avatar from "./Avatar";
import EamilInfo from "./EmailInfo";
import DateInfo from "./DateInfo";
import EamilActionsIcons from "./EmailActionIcons";

const Header = () => {
  return (
    <header className="email-content--header">
      <Avatar />
      <EamilInfo />
      <DateInfo />
      <EamilActionsIcons />
    </header>
  );
};
export default Header;
