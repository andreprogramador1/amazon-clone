import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from './components/Header'
import Login from './components/Login'
import { auth } from "./firebase";
import { useStateValue } from "./components/stateProvider";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser)

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

  }, [])

return (
  <div className="app">
    <Router>
      <Switch>
        
        <Route path="/" exact>
          <Header/>
          <Home/>
        </Route>
        <Route path='/login' component={Login}/>
        
      </Switch>
    </Router>
  </div>
);
}
export default App;