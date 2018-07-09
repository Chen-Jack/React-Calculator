import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import NumberButton from './Components/NumberButton'

const Background = styled.div`
  background-color: #aaa;
  margin: 0px;
  padding: 0px;
  position: fixed;
  height: 100%;
  width: 100%;
`

const ButtonLayout = styled.div`
  background-color : #222;
  margin: 0px;
  padding: 0px;
  height: 75%;
  width: 50%;
  display: flex;
  border-radius: 5px;
`

class Calculator extends Component {
  constructor(props){
    super(props);

    this.state = {
      input_prev : 0,
      input_curr : 0
    }
  }

  add = (num) => {
  }

  subtract = (num)=>{
  }

  divide = (num)=>{
  }

  multiply = (num)=>{
  }


  evalulate = ()=>{
    const computed_value = this.input_prev + this.input_curr;
    this.setState({
      input_prev : computed_value,
      input_curr : computed_value
    })
  }

  clear_inputs = ()=>{
    this.setState({
      input_1 : 0,
      input_2 : 0,
    })
  }

  render() {
    return (
      <Background>
        <ButtonLayout>
          <NumberButton num_value={0}/>
          <NumberButton num_value={1}/>
          <NumberButton num_value={2}/>
        </ButtonLayout> 
      </Background>
    );
  }
}

export default Calculator;
