import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from './components/Header'

function App() {
return (
  <div className="app">
    <Router>
      <Switch>
        
        <Route path="/" exact>
          <Header/>
          <Home/>
        </Route>
        
      </Switch>
    </Router>
  </div>
);
}
export default App;