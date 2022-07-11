// import rubbishButton from "../../assets/icons/rubbish-bin-delete-button.png";
// import rateStarButton from "../../assets/icons/rate-star-button.png";
// import backArrow from "../../assets/icons/back-arrow.png";
// import flaticonWelcomeImage from "../../assets/images/flaticon-welcome-image.png";
import Title from "./Title";
import Header from "./Header";
import EmailBody from "./EmailBody";
import EmailActions from "./EmailActions";
const MainContent = () => {
  return (
    <article className="email-content">
      <Title />
      <Header />
      <EmailBody />
      <EmailActions />
    </article>
  );
};
export default MainContent;
