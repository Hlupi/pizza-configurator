import React, { Component } from 'react';

import Defaults from './styles'
import PizzaContainer from './components/PizzaContainer'

class App extends Component {
  render() {
    return (
      <>
      <Defaults />
        <header>Pizza Pi</header>
        <main>
          <PizzaContainer />
        </main>
      </>
    );
  }
}

export default App;
