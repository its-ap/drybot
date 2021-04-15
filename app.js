import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import AuthScene from './scenes/AuthScene';


class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Auth" component={AuthScene} hideNavBar={true}> </Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;
