import "./App.css";

import { GlobalStyle } from "./style";

import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideBar />
    </>
  );
}

export default App;
