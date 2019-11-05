import React from 'react';
import Navbar from './Component/Nav/Nav';
import Textbox from './Component/Content/Textbox'
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
        <Container-fluid>
          <div>
            <Image src="/background/cover.png" />
            <Navbar />
            <div>
            <Image src="/background/bg.png" />
            </div>
            <Image src="/background/bg2.jpg" />
            <Image src="/background/bg3.png" />
            <Textbox data=" about
                      สถานะการอนุรักษ์ : ไม่น่ากังวล
                      ชนิด : สัตว์เลี้ยงลูกด้วยนม
                      แหล่งมักพบ : เม็กซิโก , อเมริกากลาง และอเมริกาใต้
                      เรื่องจริงหรอเนี้ยย!!!
                      สลอธใช้เวลาในการเผาผลาญอาหารนานถึงหนึ่งเดือนสำหรับในการย่อยอาหารมื้อเดียว"/>
          </div>
        </Container-fluid>
        </div>
    );
  }
}
export default App;
