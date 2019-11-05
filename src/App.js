import React from 'react';
import Navbar from './Component/Nav/Nav';
import styled from 'styled-components'
import { Container, Row, Col,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Image = styled.img`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    /*background: url('/${props => props.source}') no-repeat fixed ; */
    background-size: cover;
    height: 100%;                
`

class App extends React.Component {
  render() {
    return (
      <div>
      <Image src="/background/cover.png" />
            <Navbar />
        </div>
    );
  }
}
export default App;
