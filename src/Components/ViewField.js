import React, {Component} from 'react';
import styled from 'styled-components';


const NumberLabel = styled.h1`
    margin: 0px;
    padding: 0px;
    text-color: #A7CAB1;
    text-align: center;
    background-color: #88B7B5;
    line-height:200%
    
`

export default (props)=>{
    return <NumberLabel> {props.display_value} </NumberLabel>
}
