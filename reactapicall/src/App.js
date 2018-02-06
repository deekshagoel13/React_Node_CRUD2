import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './components/home';


class App extends Component {

  render() {
    return (
        <div>
            <div className="col-md-12 bg-info modal-header">
                <Header/>
            </div>
            <div className="container-fluid main" >
                <MainPage/>
            </div>

            <div className="col-md-12 bg-info footer">
                <Footer/>
            </div>
        </div>
    );
  }
}

export default App;
