import "./App.css";
import { NavBar } from "./Components/NavBar";
import { HeaderSection } from "./Components/HeaderSection";
import { About } from "./Components/About";
import { Utlitiy } from "./Components/Utlitiy";
import { Src } from "./Components/Src";

function App() {
  return (
    <div className="body">
      <NavBar />
      <HeaderSection />
      <About />
      <Utlitiy />
      <Src />
    </div>
  );
}

export default App;
