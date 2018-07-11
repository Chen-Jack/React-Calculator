import React, {Component} from 'react';
import styled from 'styled-components';

const ViewField = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`

const CurrentBuffer = styled.span`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    margin: 0px;
    padding: 0px;
    background-color: #88B7B5;
    flex: 1;

    font-size: 2em;

`
const HistoryBuffer = styled.span`
    display:flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    margin: 0px;
    padding: 0px;
    background-color: #88B7B5;

    flex: 1;
    position: relative;
    z-index: 2;

`

const HorizontalLine = styled.hr`
    display: absolute;
    margin: 0px;
    padding: 0px;
    border-color: black;
`


export default (props)=>{
    return <ViewField>
        <CurrentBuffer> {props.display_value} </CurrentBuffer>
        <HorizontalLine/>
        <HistoryBuffer> {props.history} </HistoryBuffer>
    </ViewField>
}
