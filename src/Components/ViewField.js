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
    box-sizing: border-box;
    padding: 10px;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    color: #fdfdfd;


   
    background-color: #222;
    flex: 3;

    font-size: 3em;

`
const HistoryBuffer = styled.span`
    box-sizing: border-box;
    padding: 10px;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    color:#fdfdfd;
    font-size: 1.5em;

    width: 100%;
    margin: 0px;
    background-color: #222;

    flex: 1;
    position: relative;
    z-index: 2;

`

const HorizontalLine = styled.hr`
    margin: 0px;
    padding: 0px;
    width: 100%;
    border-color: white;
`


export default (props)=>{
    return <ViewField>
        <CurrentBuffer> {props.display_value} </CurrentBuffer>
        <HorizontalLine/>
        <HistoryBuffer> {props.history} </HistoryBuffer>
    </ViewField>
}
