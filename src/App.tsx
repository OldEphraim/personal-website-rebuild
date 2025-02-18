import "./App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Body from "./components/Body/Body.tsx";
import Copy from "./components/Copy/Copy.tsx";
import TarotProject from "./components/TarotProject/TarotProject.tsx";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Body />
        <Copy />
        <TarotProject />
      </div>
    </>
  );
}

export default App;
