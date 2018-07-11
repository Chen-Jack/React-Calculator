import React, {Component} from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';

const NumberButton = styled.button`
    background-color: #fdfdfd;
    height: 100%;
    width: 100%;

    border-radius: inherit;

    font-size: 2em;

    padding: 0px;
    margin: 0px;

    
    border-color: #fdfdfd;

    :focus{
        position: relative;
        outline-color: red;
        z-index: 100;
        outline-width: thick;
    }
`



 
export default (props) => {
    return <NumberButton onClick={props.clickHandler}>{props.value}</NumberButton>
}