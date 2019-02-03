import React, { Component } from 'react';
import Scrape from './scrape.js'
import PrintHoros from './printhoros.js'
import './App.css';

class App extends Component {
  
  state = {
    userSign: ''
  }

setSign = (userSign) => {
  this.setState({
    userSign: userSign
  })
}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Scrape 
            updateParentState={this.setSign}
          /> 
           {this.state.userSign.length > 0 ? 
          <PrintHoros userSign={this.state.userSign}/> :
          null
        }  
        </header>
      </div>
    );
  }
}

export default App;
