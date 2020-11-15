import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
