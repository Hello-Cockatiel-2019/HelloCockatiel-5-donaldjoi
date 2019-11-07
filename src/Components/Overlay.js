import React, { Component } from 'react'
import Overlay from 'react-image-overlay'
import styled from 'styled-components';



export default class overlay extends Component {
  render () {
    return (
      <Overlay 
          url=''//require 
          overlayUrl=''//require
          imageHeight={1080}
          imageWidth={1520}
          position={'bottomRight'}
          overlayWidth={250}
          overlayHeight={400}
          overlayPadding={60}
          watermark={false}
      />
    );
  }
};