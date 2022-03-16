import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Paragraph from "./components/Paragraph";
import Input from "./components/Input";
import {MySelf} from "./components/MySelf";
import {Counter} from "./components/Counter.js"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Paragraph />
      <input type="God"/>
      <MySelf name="Tracy" age={20} gender="female" />
      <MySelf name="Stella" age={28} gender="female" />
      <MySelf name="Tracey" age={29} gender="female" />
      <MySelf name="Stacy" age={24} gender="female" />
      <Counter/>
      
    </div>
  );
}

export default App;
