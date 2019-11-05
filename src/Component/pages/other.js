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
             <img className="about" src="/background/bg3.png" />
            
            <div className="col-lg-6">
               
                <Text>
                <Textbox data="ห่านกินอะไร? หญ้าหรือผักชนิดต่างๆ เช่น รำข้าวหรือข้าวโพดป่น ถั่วเขียวหรือถั่วเหลืองป่น" />
                </Text>
            </div>
            <div className="row">
                <img className="food" src="/images/food.png" />
            </div>
        </div>
        
    )
    }
  }
  
  export default About