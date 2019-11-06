import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    background-color: rgba(227, 227, 227, 0.5);
    width:30em;
    height:17em;
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

const Largebox = (props) => {
    return (
        <div className="col-xl-12 " id={props.Box}>
            <bg>
                <Box>
                    {props.data}
                </Box>
            </bg>
        </div >
    )
}
export default Largebox