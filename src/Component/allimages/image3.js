import styled from 'styled-components';
import React from 'react';

const Food = styled.img` 
    margin-left: 10px;
    margin-top: 40px;
    height: 390px;
    width: 420px;
`
export default class Pic3 extends React.Component {
    render() {
        return(
            <div>
                <Food src="/images/picture/food.png" alt="Food"></Food>
            </div>
        )
    }
} 