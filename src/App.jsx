import "./App.css";

import { GlobalStyle, FlexBox } from "./style";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ToDo from "./pages/ToDo";

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
