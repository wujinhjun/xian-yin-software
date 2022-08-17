import "./App.css";

import { GlobalStyle, FlexBox } from "./style";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import ToDo from "./pages/ToDo/ToDo";

const Store = window.require("electron-store");
const dataStore = new Store({ name: "data" });
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FlexBox>
        <SideBar />
        <ToDo></ToDo>
      </FlexBox>
    </>
  );
}

export default App;
