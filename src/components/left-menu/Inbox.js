import SpanCount from "./SpanCount";
import SpanLabel from "./SpanLabel";

const Inbox = () => {
  return (
    <li className="item active">
      <SpanLabel text="Inbox" />
      <SpanCount text="3" />
    </li>
  );
};
export default Inbox;
