import React from 'react';
import './App.css';
import Navbar from './Component/Nav/Nav';
import styled, { css } from 'styled-components'
import { Container, Row, Col, Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Image = styled.div`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background: url('/${props => props.source}') no-repeat fixed ; 
    background-size: cover;                     
`

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Navbar id="nav"/>
=======
      <div>
      <Image source="background/cover.png">
      <Navbar />
      </Image>
>>>>>>> 6f751eba9af7f121fa28d13e1bb07e4571d57b65
      </div>
    );
  }
}
export default App;
