import React from 'react';
import styled from 'styled-components';
import Textbox from '../Textbox';
import Overlay from 'react-image-overlay'
import { Desktop, Mobile } from '../Responsive'

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
          <div>
              <Desktop>
        <div className="bg" id={this.props.idd}>
            <div className="container-fluid">
            <div className="row"> 
                <div className="col-md-6">
                    <Text style={{position: 'absolute', zIndex: '0', marginTop: '540px',marginLeft: '125px'}}>
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
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <img className="polaroid" src="../../../public/background/polaroid.png" style={{position: 'absolute', zIndex: '1', width: '550px', height: '600px', marginTop: '365px',marginLeft: '100px'}}/>
                    <img className="jjgoose" src="../../../public/images/JGoose.png" style={{position: 'absolute', zIndex: '2', width: '250px', height: '300px', marginTop: '365px',marginLeft: '180px'}}/>
                </div>
            </div>
            </div>
        </div>
        </Desktop>
        </div>
    )
    }
  }
  
  export default About