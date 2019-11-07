import React from 'react';
import '../App.css'
import Navbar from './Nav';
import Textbox from './Textbox';
import styled from 'styled-components'
import { Container, Row, Col,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Category from './pages/Category';
import Gender from './pages/Gender';
import Other from './pages/Other';
import Background from './Background';
import { Desktop, Mobile } from './Responsive'


export default class index extends React.Component {
  render() {
    return (
      <div>
        
        <Background idd="Background"/>
        <Navbar />
        <About idd="About" />
        <Category idd="Category"/>
        <Gender idd="Gender"/>
        <Other idd="Other"/>
        
      </div>
    )
  }
}