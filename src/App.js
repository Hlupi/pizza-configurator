import React, { Component } from 'react';
import TopBar from './components/TopBar'
import PizzaContainer from './components/PizzaContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>

        <main>
          <PizzaContainer />
        </main>

      </div>
    );
  }
}

export default App;
