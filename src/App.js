import React from 'react';
import Navbar from './Component/Nav/Nav';
import styled from 'styled-components'
import { Container, Row, Col,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Image = styled.div`
    background: url('/background/cover.png') no-repeat fixed;
    background-size: cover;
    height: 100%;                
`

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Navbar id="nav"/>
=======
      <div>
<<<<<<< HEAD
      <Image source="background/cover.png " >
        <Container fluid>
          <Navbar />
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>   
        </Image>
        </div>
=======
      <Image source="background/cover.png">
      <Navbar />
      </Image>
>>>>>>> 6f751eba9af7f121fa28d13e1bb07e4571d57b65
      </div>
>>>>>>> 80fab65a32ad8e440555dd16e5b0f6e8464ae3e9
    );
  }
}
export default App;
