import React, { Component } from 'react';
import './App.css';
import PizzaContainer from './components/PizzaContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">It's pizza time</h1>
        </header>

        <main>

          <h1>Feel free to make your own pizza:</h1>
          <PizzaContainer />

        </main>

      </div>
    );
  }
}

export default App;
