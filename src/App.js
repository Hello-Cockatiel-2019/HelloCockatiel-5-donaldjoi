import React from 'react';
import './App.css';
import Navbar from './Component/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar id="nav"/>
      </div>
    );
  }
}
export default App;
