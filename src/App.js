import React, { Component } from 'react';
// import logo from './logo.svg';
import './sass/app.scss';
import Header from "./components/Header.jsx";
import Slider from "./components/Slider_main.jsx";
import FilterSection from "./components/FilterSection.jsx";
import FlatDetailedView from "./components/FlatDetailedView.jsx";
import Contact from "./components/Contact.jsx";

class App extends Component {
  render() {
    return (
        <div className="my-container-fluid">
       < Header />
       < Slider />
       < FilterSection />
       < FlatDetailedView />
       < Contact />
        </div>
    );
  }
}

export default App;
