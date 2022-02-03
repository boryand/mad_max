import logo from "./logo.svg";
import "../src/scss/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Navbar";
import Our_menu from "./components/Our_menu";
import Wine_list from "./components/Wine_list";
import Desserts from "./components/Desserts";
import Contact_us from "./components/Contact_us";
import Soups from "./components/Soups";
import Starters from "./components/Starters";
import Main_dishes from "./components/Main_dishes";
import Cocktails from "./components/Cocktails";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/home">
            <Landing />
          </Route>
          <Route exact path="/menu">
            <Our_menu />
          </Route>
          <Route exact path="/wine_list">
            <Wine_list />
          </Route>
          <Route exact path="/desserts">
            <Desserts />
          </Route>
          <Route exact path="/contact_us">
            <Contact_us />
          </Route>
          <Route exact path="/soups">
            <Soups />
          </Route>
          <Route exact path="/starters">
            <Starters />
          </Route>
          <Route exact path="/main_dishes">
            <Main_dishes />
          </Route>
          <Route exact path="/cocktails">
            <Cocktails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
