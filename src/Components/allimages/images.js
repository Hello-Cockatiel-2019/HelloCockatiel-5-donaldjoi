import styled from 'styled-components';
import React from 'react';

const Smallgoose = styled.img`
    
    margin-left: -1000px;
    margin-top: 516.47px;
    height: 173.79px;
    width: 162.71px;
`
export default class Pic extends React.Component {
    render() {
        return(
            <div>
                <Smallgoose src="/images/picture/smallgoose.png" alt="Smallgoose"></Smallgoose>
            </div>
        )
    }
} 