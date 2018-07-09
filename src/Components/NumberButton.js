import React, {Component} from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';


class NumberButton extends Component{
    handleClick = ()=>{
        console.log("This is the new overwridden handler")
    }

    render(){
        return <BaseButton clickHandler={this.handleClick}>{this.props.num_value}</BaseButton>
    }

}

export default NumberButton;