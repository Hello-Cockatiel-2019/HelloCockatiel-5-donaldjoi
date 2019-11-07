import React, { Component } from 'react'
import styled from 'styled-components'
import Overlay from 'react-image-overlay'
import { Desktop, Mobile } from './Responsive'

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
  render() {
    return (
      
      
      <div><Desktop>
      <div className="cover " id={this.props.idd}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-1"></div>
              <div className="col-md-5">
              <img className="cgoose" src="background/cgoose.png" style={{ position: 'absolute', zIndex: '1', width: '450px', height: '500px', marginTop: '525px', marginLeft: '850px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </Desktop>
      </div>
      
    )
  }
}