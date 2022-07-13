import MainContent from "./MainContent";
import NavBar from "./NavBar";
import "../../styles/Main/main.css";

const Main = () => {
  return (
    <main className="email-view">
      <NavBar></NavBar>
      <MainContent></MainContent>
    </main>
  );
};

export default Main;
