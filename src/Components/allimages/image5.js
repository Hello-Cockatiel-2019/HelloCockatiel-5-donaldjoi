import styled from 'styled-components';
import React from 'react';

const Dbg = styled.img` 
    margin-left: 100px;
    margin-top: -50px;
    height: 480px;
    width: 580px;
`
export default class Pic5 extends React.Component {
    render() {
        return(
            <div>
                <Dbg src="/images/picture/dbg.png" alt="Dbg"></Dbg>
            </div>
        )
    }
} 