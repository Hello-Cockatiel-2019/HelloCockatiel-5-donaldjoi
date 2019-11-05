import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    background-color: black;
    width: 50px;
    height:200px;
    border-radius: 35px;
    padding-top:22px;
    margin-top:76px;
    /* margin-right:auto;
    margin-left:auto;
    opacity: 0.75; */
    /* // filter: alpha(opacity=50); */
`

const Boxin = styled.div`
    background-color: white;
    background : transparent;
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