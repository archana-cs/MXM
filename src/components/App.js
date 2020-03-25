import '../styleguide/_genericCSS.scss';
import React, { Component } from 'react';
import Button from './Button/Button';

class App extends Component {
  render() {
    return (
      <Button label="Welcome" />
    );
  }
}

export default App;
