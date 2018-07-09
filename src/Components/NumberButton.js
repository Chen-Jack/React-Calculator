import React, {Component} from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';


class NumberButton extends Component{

    render(){
        return <BaseButton clickHandler={this.props.clickHandler}>{this.props.num_value}</BaseButton>
    }

}

export default NumberButton;