import React, { Component } from "react";
import Search from "./Components/Search/Search";
import Saved from "./Components/Saved/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Byrons GIF Search Project</header>

        <Router>
          <NavBar />
          <Switch>
            <Route path="/" component={Search} exact />
            <Route path="/Saved" component={Saved} exact />
            <Route component={Search} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
