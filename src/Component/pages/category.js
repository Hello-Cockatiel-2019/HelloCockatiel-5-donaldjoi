import React from 'react';
import styled from 'styled-components';
import Textbox from '../textbox';

const Text = styled.p`
text-align: center;
font-family: Itim;
font-size: 25px;
line-height: 36px;
color: #000000;
`

class About extends React.Component {
    render() {
      return (
        <div className="row">
             <img className="about" src="/background/bg2.jpg" />
             <div className="row">
                <img className="wanted" src="/images/Wanted.png" />
            </div>
            <div className="col-lg-6">
                <Text>
                <Textbox data="ประเภทของห่าน 1. Toulous 2. Embden 3. African 4. Chinese มีลักษณะคล้ายพันธุ์ Africanมี 2 ชนิด คือ ห่านจีนขาวและห่านจีนสีเทาปนน้ำตาล เป็นห่าน ที่พบ และเลี้ยงมากที่สุดในไทย 6. Egyptian 7. Sebastopol " />
                </Text>
            </div>
            
        </div>
        
    )
    }
  }
  
  export default About