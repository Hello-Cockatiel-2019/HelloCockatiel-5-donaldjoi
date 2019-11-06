import React, {Component} from 'react'
import styled from 'styled-components'
import Overlay from 'react-image-overlay'


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
        <Overlay 
          url='/background/cover.png' 
          overlayUrl='/background/cgoose.png'
          imageHeight={1080}
          imageWidth={1520}
          position={'bottomRight'}
          overlayWidth={250}
          overlayHeight={400}
          overlayPadding={60}
          watermark={false}
      />
      </div>
    )
  }
}