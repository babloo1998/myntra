import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navbar';
import Slide from './components/slide';
import Slider from './components/slider';
import Advertisement from './components/advertisement'
import Banner from './components/banner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Slide />
        <Slider/>
        <Advertisement/>
        <h2 class="focused-brands">BRANDS IN FOCUS</h2>
        <p>Show some brand love</p>
        <Slider/>
        <Slider/>
        <h2 class="focused-brands">WE CURATE, YOU SHOP</h2>
        <p>Handpicked favourites just for you</p>
        <Banner/>
      </div>
    );
  }
}

export default App;
