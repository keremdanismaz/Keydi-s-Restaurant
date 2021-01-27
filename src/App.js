import "./App.css";
import Menu from "./component/Menu";
import Add from "./component/AddNewItem";
import NotFound from "./component/NotFound";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Uptade from "./component/Uptade";

function App() {

  return (
    <Router>
    <div>
      <section className="menu section">
        <div className="title">
          <h2 >Keydi's Restaurant <i style={{color:"#c59d5f"}} class="fa fa-cutlery" aria-hidden="true"></i></h2>
          <div className="underline"></div>
        </div>
        <Navbar/>
        <Switch>
        <Route exact path="/AddItem" component={Add}></Route>
        <Route exact path="/" component={Menu}></Route>
        <Route exact path="/Edit/:id" component={Uptade}></Route>
        <Route  component={NotFound}></Route>
        </Switch>
      </section>
    </div>
    </Router>
  );
}

export default App;
