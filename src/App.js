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
          <Route exact path="/scenicSpot">
            <Spots />
          </Route>
          <Route exact path="/scenicSpot/:city">
            <Spots />
          </Route>
          <Route>
            <Redirect to="/scenicSpot" />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
