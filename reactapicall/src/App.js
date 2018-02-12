import React, { Component } from 'react';
import './App.css';
//import Header from './components/header';
//import Footer from './components/footer';
import MainPage from './components/home';
import Login from './components/login';
import {BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';


class App extends Component {

  render() {
    return (
        <div>
            <MainPage/>
            <button onClick={
                <Router>
                <Route path="/lofin" component={Login}/>
                </Router>
            }>Redirect</button>
        </div>
    );
  }
}

export default App;
