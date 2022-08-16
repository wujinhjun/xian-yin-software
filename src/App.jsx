import "./App.css";

import { GlobalStyle, FlexBox } from "./style";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import ToDo from "./pages/ToDo/ToDo";

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
