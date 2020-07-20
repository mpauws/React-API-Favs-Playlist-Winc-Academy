import React from "react";
import { Switch, Route } from "react-router-dom";
import SongOverview from "./components/SongOverview";
import About from "./About";
import NavBar from "./components/NavBar";

function App() {
   return (
      <div className="app-wrapper">
         <NavBar />
         <Switch>
            <Route exact path="/" component={SongOverview} />
            <Route path="/About" component={About} />
         </Switch>
      </div>
   );
}
export default App;
