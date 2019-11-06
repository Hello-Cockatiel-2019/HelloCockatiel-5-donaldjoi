import React from 'react';
import styled, { css } from 'styled-components';

const Boxin = styled.div`
    background-color: rgba(227, 227, 227, 0.5);
    width:30em;
    height:10em;
    border-radius: 20px;
    border-top-width:-2;
    margin-top:0px;
    margin-right: auto;
    margin-left:auto;
    padding-top:20px;
    padding-right:20px;
    padding-left:30px;
    color: black;
`

const Textbox = (props) => {
    return (
        <div className="col-xl-12 " id={props.Textbox}>
            <bg>
                <Boxin>
                    {props.data}
                </Boxin>
            </bg>
        </div >
    )
}
export default Textbox