import React, {Component} from 'react'
import styled from 'styled-components'


const Image = styled.img`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    /*background: url('/${props => props.source}') no-repeat fixed ; */
    background-size: cover;
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
        
            <div className="col-md-8">
            <Image src="/background/cover.png" />
            </div>
            <div className="col-md-4">
                <img className="polaroid" src="/background/cgoose.png" />
            </div>
        </div>
      </div>
    )
  }
}