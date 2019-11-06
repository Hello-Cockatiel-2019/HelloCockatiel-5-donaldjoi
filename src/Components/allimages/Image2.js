import styled from 'styled-components';
import React from 'react';

const Wanted = styled.img` 
    margin-left: 0px;
    margin-top: 99px;
    height: 432pxx;
    width: 337px;
`
export default class Pic2 extends React.Component {
    render() {
        return(
            <div>
                <Wanted src="/images/picture/Wanted.png" alt="Wanted"></Wanted>
            </div>
        )
    }
} 