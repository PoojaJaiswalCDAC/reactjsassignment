import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Admin from './components/Admin'
import Logout from './components/Logout'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}>
      </Route>
      <Route path="/admin" component={Admin}>
      </Route>
      <Route path="/logout" component={Logout}>
      </Route>
    </Switch>
  );
}


const A = () => {
  return (
    <div>
      <h1>this is component A page</h1>
      <Link to="/b">B component</Link>
    </div>
  )
}



const B = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
    </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
    </a>
      </header>
    </div>
  )
}


export default App;
