import React, {Component} from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';

const NumberButton = styled.button`
    background-color: #847996;
    text-color: #310a31;
    height: 100%;
    width: 100%;

    border-color: black;

    :focus{
        position: relative;
        outline-color: red;
        z-index: 100;
    }
`



 
export default (props) => {
    return <NumberButton onClick={props.clickHandler}>{props.value}</NumberButton>
}