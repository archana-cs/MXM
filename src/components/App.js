import '../styleguide/_genericCSS.scss';
import React, { Component } from 'react';
// import Button from './Button/Button';
import { collapsibleVerticalMenu as VerticalMenu } from './vertical-menu/vertical-menu';
import '../styleguide/_elements.scss';
import MockDataForVerticalMenu from './vertical-menu/tack/mock-data-for-vertical-menu';

class App extends Component {
  render() {
    return (
      <VerticalMenu id="vertical-menu" {...MockDataForVerticalMenu} />
    );
  }
}

export default App;
