import React from 'react';
import styled from 'styled-components';
import Textbox from '../Textbox';

const Text = styled.p`
text-align: center;
font-family: Itim;
font-size: 25px;
line-height: 36px;
color: #000000;
`
const Box = styled.div`
    background-color: #7C7878;
    width:30em;
    height:10em;
    border-radius: 20px;
    border-top-width:-2;
    margin-top:250px;
    margin-left:600;
    padding-top:20px;
    padding-right:20px;
    padding-left:30px;
    
`

class Category extends React.Component {
    render() {
      return (
        <div className="bg2" id={this.props.idd}>
            <div className="container-fluid">
            <div className="row"> 
                <div className="col-md-6">
                <img className="wanted" src="/images/wanted.png" style={{position: 'absolute', zIndex: '1', width: '300px', height: '350px', marginTop: '250px',marginLeft: '600px'}}/>
                    <Text style={{position: 'absolute', zIndex: '0', marginTop: '650px',marginLeft: '350px'}}>
                        <Textbox data="ประเภทของห่าน 
                        1. Toulous 
                        2. Embden 
                        3. African 
                        4. Chinese มีลักษณะคล้ายพันธุ์ Africanมี 2 ชนิด คือ ห่านจีนขาวและห่านจีนสีเทาปนน้ำตาล เป็นห่าน ที่พบ และเลี้ยงมากที่สุดในไทย 6. Egyptian 7. Sebastopol" />
                    </Text>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                </div>
              </div>
            </div>
        </div>
      )
    }
  }
  
  export default Category