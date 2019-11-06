import React, {Component} from 'react'
import styled from 'styled-components'


const Image = styled.img`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    /*background: url('/${props => props.source}') no-repeat fixed ; */
    background-size: contain;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;                
`


  
export default class background extends Component {
  render () {
    return (
      <div>             
        <div className="row">
            <Image src="/background/cover.png" />
            <img className="cgoose" src="/background/cgoose.png" margin="0px 0px 0px 0px"/>
        </div>
      </div>
    )
  }
}