import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import NumberButton from './Components/NumberButton'
import ViewField from './Components/ViewField'

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

//Note that the input fields are stored as strings
class Calculator extends Component {
  constructor(props){
    super(props);

    this.state = {
      input_prev : "0",
      input_curr : "0"
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
    // const computed_value = String(parseInt(this.input_prev) + parseInt(this.input_curr));
    // this.setState({
    //   input_prev : computed_value,
    //   input_curr : computed_value
    // })
  }

  clear_inputs = ()=>{
    this.setState({
      input_prev : '0',
      input_curr : '0',
    })
  }

  //When you press a number button, its value will update the input fields
  number_btn_press = (val)=>{
    console.log(val)
    let new_input_curr;
    if(this.state.input_curr === '0'){
      new_input_curr = String(val);
    }
    else{
      new_input_curr = this.state.input_curr + String(val);
    }

    this.setState({
      input_curr : new_input_curr
    })
  }



  render() {
    return (
      <Background>
        <ButtonLayout>
          <ViewField input_curr = {this.state.input_curr} />
          <NumberButton num_value={0} clickHandler={this.number_btn_press.bind(this,0)}/>
          <NumberButton num_value={1} clickHandler={this.number_btn_press.bind(this,1)}/>
          <NumberButton num_value={2} clickHandler={this.number_btn_press.bind(this,2)}/>
        </ButtonLayout> 
      </Background>
    );
  }
}

export default Calculator;
