import styled from 'styled-components';
import React from 'react';

const Gigg = styled.img` 
    margin-left: 10px;
    margin-top: 40px;
    height: 377px;
    width: 384px;
`
export default class Pic4 extends React.Component {
    render() {
        return(
            <div>
                <Gigg src="/images/picture/digg.png" alt="Gigg"></Gigg>
            </div>
        )
    }
} 