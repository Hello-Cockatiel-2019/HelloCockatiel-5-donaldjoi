import React, {Component} from 'react'
import styled from 'styled-components'
const FixedBackground = styled.div`
  width:100%;
  height: 100vh;
  background-repeat:no-repeat;
  background-position: absolute;
  position:fixed;
  background-size:cover;
  background-image:url('/background/cover.jpg');
    /*@bg (max-width: 1440px){
      background-image:url('/img/bg1.png');
    }
    @bg (max-width: 1440px) {
      background-image:url('/img/bg2.png');
    }
    @bg (max-width: 1440px) {
        background-image:url('/img/bg3.png');
      }*/
   
`
export default class background extends Component {
  render () {
    return (
      <FixedBackground/>
    )
  }
}