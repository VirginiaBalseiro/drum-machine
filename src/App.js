import React, { Component } from 'react';
import './App.css';
import Pads from './Pads/Pads';
import Display from './Display/Display';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
       padsarray : [
        {name: 'Heater-1', letter: 'Q', keyCode: 81}, 
        {name: 'Heater-2', letter: 'W', keyCode: 87}, 
        {name: 'Dsc_Oh', letter: 'E', keyCode: 69}, 
        {name: 'Kick_n_Hat', letter: 'A', keyCode: 65}, 
        {name: 'Chord_1', letter: 'S', keyCode: 83}, 
        {name: 'Chord_3', letter: 'D', keyCode: 68}, 
        {name: 'punchy_kick_1', letter: 'Z', keyCode: 90}, 
        {name: 'side_stick_1', letter: 'X', keyCode: 88}, 
        {name: 'Brk_Snr', letter: 'C', keyCode: 67}
        ],
    }
  }

  
  render() {
    return (
      <div className="App">
      <h1 id="title">Drum Machine</h1>
      <h3 id="credits">Created by <a href="http://www.virginiabalseiro.com" target="_blank"> Virginia Balseiro </a></h3>
      <div id="drum-machine">
      <Pads 
         padsarray = {this.state.padsarray}
         />
      <Display />
      </div>
      </div>
    );
  }
}

export default App;
