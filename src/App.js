import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Ngo from "./components/Ngo";
import ShortAbout from "./components/ShortAbout";
import Footer from "./components/footer";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Hero />
        <Ngo />
        <ShortAbout />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
