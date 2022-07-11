import Li from "./ListItem";

import rubbishButton from "../../assets/icons/rubbish-bin-delete-button.png";
import rateStarButton from "../../assets/icons/rate-star-button.png";
import backArrow from "../../assets/icons/back-arrow.png";

const EmailUl = () => {
  return (
    <ul>
      <Li url={backArrow} text="reply button" />
      <Li url={rateStarButton} text="star button" />
      <Li url={rubbishButton} text="delete button" />
    </ul>
  );
};

export default EmailUl;
