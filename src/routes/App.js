import Nav from "../components/Nav";
import Footer from "../components/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Kitties from "./Kitties";
import Contact from "./Contact";
import About from "./About";
import "../styles/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={Kitties} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
