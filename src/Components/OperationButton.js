import React, {Component} from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton'

const OperationButton = styled.button`
    background-color: ${ (props) => props.color || 'yellow' };
    border-color: #310a31;
    text-color: #310a31;
    height: 100%;
    width: 100%;
`



export default (props)=>{
    return <OperationButton color={props.color} onClick={props.clickHandler}> {props.value}</OperationButton>
}