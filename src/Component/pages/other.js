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
            <div className="bg3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                        <img className="wanted" src="/images/food.png" style={{position: 'absolute', zIndex: '1', width: '350px', height: '250px', marginTop: '225px',marginLeft: '600px'}}/>
                            <Text style={{ position: 'absolute', zIndex: '0', marginTop: '600px', marginLeft: '100px' }}>
                                <Textbox data="ห่านกินอะไร? หญ้าหรือผักชนิดต่างๆ เช่น รำข้าวหรือข้าวโพดป่น ถั่วเขียวหรือถั่วเหลืองป่น" />
                            </Text>
                            
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About