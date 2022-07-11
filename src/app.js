import "./styles/app.css";
import Header from "./components/header/Header";
import LeftMenu from "./components/left-menu/LeftMenu";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
