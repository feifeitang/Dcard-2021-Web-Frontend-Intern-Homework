import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Spots from "./components/Spots";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header title="Scenic Spot" />
      <Switch>
        <div className="container">
          <Route exact path="/Dcard-2021-Web-Frontend-Intern-Homework/scenicSpot">
            <Spots />
          </Route>
          <Route exact path="/Dcard-2021-Web-Frontend-Intern-Homework/scenicSpot/:city">
            <Spots />
          </Route>
          <Route>
            <Redirect to="/Dcard-2021-Web-Frontend-Intern-Homework/scenicSpot" />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
