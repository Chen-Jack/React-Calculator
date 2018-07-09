import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 50px;
    height: 50px;
`

class BaseButton extends Component{
    constructor(props){
        super(props);
        if(this.props.clickHandler){         //overwrite the handler if available
            this.clickHandler = this.props.clickHandler;
        }
    }

    clickHandler = ()=>{
        console.log("This is the default click handler")
    }

    render(){
        return <Button type = "button" onClick = {this.clickHandler}>{this.props.children}</Button>
    }

}

export default BaseButton;