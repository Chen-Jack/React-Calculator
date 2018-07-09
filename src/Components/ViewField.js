import React, {Component} from 'react';
import styled from 'styled-components';


const NumberLabel = styled.div`
    display: inline-block;
    margin: 0px;
    padding: 0px;
    background-color: #88B7B5;
    text-align: right;
    height: 100%;
    width: 100%;
    float: right;
    
    .text {
        display: inline;
        font-size; 2em;
    }
`

export default (props)=>{
    return <NumberLabel> <h1 class="text">{props.display_value}</h1> </NumberLabel>
}
