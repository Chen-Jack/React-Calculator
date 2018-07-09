import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #847996;
    border-color: #310a31;
    text-color: #310a31;
    height: 100%;
    width: 100%;
`

class BaseButton extends Component{
    constructor(props){
        super(props);
        if(this.props.clickHandler){         //overwrite the default handler if available
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