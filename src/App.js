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
      <div>
      <Image source="background/cover.png " />
        <Container fluid>
          <Navbar />
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>   
        </div>
    );
  }
}
export default App;
