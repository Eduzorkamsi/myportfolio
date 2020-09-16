import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./component/home";
import Skills from "./component/skills";
import Projects from "./component/project";
import Contacts from "./component/contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/Skills">Skills</NavLink></li>
              <li><NavLink to="/Projects">Projects</NavLink></li>
              <li><NavLink to="/Contacts">Contacts</NavLink></li>

            </ul>
          </nav>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/Skills" component={Skills}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Contacts" component={Contacts}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;