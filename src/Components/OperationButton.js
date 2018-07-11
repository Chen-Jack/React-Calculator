import React, {Component} from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton'

const OperationButton = styled.button`
    background-color: ${ (props) => props.color || '#ed264e' };
    border-color: #310a31;
    color: #fdfdfd;
    height: 100%;
    width: 100%;
    font-size: 1.75em;
    border-radius: 3px;
`



export default (props)=>{
    return <OperationButton color={props.color} onClick={props.clickHandler}> {props.value}</OperationButton>
}