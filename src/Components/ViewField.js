import React, {Component} from 'react';
import styled from 'styled-components';

const NumberLabel = styled.h1`
    margin: 0px;
    padding: 0px;
    // width: 50px;
    // height: 50px;
    text-align: center;
    background-color: #eee;
`


class ViewField extends Component{
    render(){
        return <NumberLabel> {this.props.input_curr} </NumberLabel>
    }
}


export default ViewField;