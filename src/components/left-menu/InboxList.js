import Starred from "./Starred";
import Inbox from "./Inbox";
import HideRead from "./HideRead";
const InboxList = () => {
  return (
    <ul className="inbox-list">
      <Inbox></Inbox>
      <Starred></Starred>
      <HideRead></HideRead>
    </ul>
  );
};
export default InboxList;
