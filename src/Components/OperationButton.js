import React, {Component} from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton'

const OperationButton = styled.button`
background-color: #243956;
border-color: #310a31;
text-color: #310a31;
height: 100%;
width: 100%;
`

export default (props)=>{
    return <OperationButton onClick={props.clickHandler}> {props.value}</OperationButton>
}