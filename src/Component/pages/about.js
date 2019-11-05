import React from 'react';
import styled from 'styled-components';
import Textbox from '../textbox';

const Text = styled.p`
text-align: left;
font-family: Itim;
font-size: 25px;
line-height: 36px;
color: #000000;
`

class About extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-md-8">
                <img className="about" src="/background/bg.png" />
                <Text>
                <Textbox data="ห่าน (Goose/Gander)
                     จัดเป็นนกขนาดใหญ่ที่อยู่ในวงศ์ Anatidae 
                     อันเป็นวงศ์เดียวกับเป็ด, หงส์ และนกเป็ดน้ำชนิดต่าง ๆ 
                     ห่านมีลักษณะทั่วไปคล้ายกับหงส์ แต่หงส์มีขนาดใหญ่กว่า 
                     และมีจุดเด่นคือในตัวผู้เมื่อถึงวัยโตเต็มที่แล้วจะมีปุ่มเนื้อแข็งหรือ
                     โหนกบริเวณก่อนถึงจะงอยปากตอนบนเด่นเห็นได้ชัดเจน มนุษย์นิยมนำมาเลี้ยงเพื่อเฝ้าบ้าน
                     หรือกำจัดวัชพืชในสวน 
                     และนำมาเลี้ยงเพื่อบริโภคเป็นอาหาร" />
                </Text>
            </div>
            <div className="col-md-4">
                <img className="polaroid" src="/background/polaroid.png" />
            </div>
        </div>
        
    )
    }
  }
  
  export default About