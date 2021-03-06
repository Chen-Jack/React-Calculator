import React, { Component } from 'react';
import styled from 'styled-components'
import NumberButton from './Components/NumberButton'
import ViewField from './Components/ViewField'
import OperationButton from './Components/OperationButton'

const Container = styled.div`
  margin: 0px;
  padding: 0px;

  background-color: #eee;

  height: 50vh;
  width: 50vw;

  min-width: 350px;
  min-height: 500px;

  max-width: 500px;
  max-height: 700px;
  
  float: left;

  border-radius: 5px;
  border-style: solid;
  border-color: black;
  border-width: thick;

  // Disable Text Selection on the calculator
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`

const ButtonLayout = styled.div`
  margin: 0px;
  padding: 0px;

  background-color : black; 

  height: 100%;
  width: 100%;

  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

const GridItem = styled.div`
    grid-column: ${(props)=> props.colStart + '/' + props.colStop};
    grid-row: ${(props)=> props.rowStart + '/' + props.rowStop};

    height: 100%;
    width: 100%;  
    
    border-radius: 3px;
`

//Note that the input fields are stored as strings
class Calculator extends Component {
  constructor(props){
    super(props);

    //An enumeration that lists all the possible states the calculator is in
    this.OPERATION_ENUM = {
      NONE: 0,
      ADD : 1,
      SUB : 2,
      DIV : 3,
      MULT : 4,
    }

    this.state = {
      input_prev : "0",
      input_curr : "0",
      decimal_pressed: false,
      current_operation: this.OPERATION_ENUM.NEW,
      append_mode: false,
    }
  }

  add = () => {
    const evaluated_val = String(parseInt(this.state.input_prev) + parseInt(this.state.input_curr))
    const new_state = this.OPERATION_ENUM.ADD;

    this.setState({
      current_operation : this.OPERATION_ENUM.ADD,
      input_prev : evaluated_val,
      input_curr: evaluated_val,
      append: false,
    })
  }

  subtract = ()=>{
    this.setState({
      current_operation : this.OPERATION_ENUM.SUB,
      input_prev: this.state.input_curr,
      append: false
    })
  }

  divide = ()=>{
    this.setState({
      current_operation : this.OPERATION_ENUM.DIV,
      input_prev: this.state.input_curr,
      append: false
    })
  }

  multiply = ()=>{
    this.setState({
      current_operation : this.OPERATION_ENUM.MULT,
      input_prev: this.state.input_curr,
      append: false
    })
  }


  evalulate = ()=>{
    console.log('BUFFER STATE:', this.state.input_prev ,  this.state.input_curr)
    let computed_value = 0;

    console.log("Evaluating " , this.state.current_operation)
    switch(this.state.current_operation){
      case this.OPERATION_ENUM.ADD:
        computed_value = String(parseInt(this.state.input_prev) + parseInt(this.state.input_curr));
        break;
      case this.OPERATION_ENUM.SUB:
        computed_value = String(parseInt(this.state.input_prev) - parseInt(this.state.input_curr));
        break;
      case this.OPERATION_ENUM.MULT:
        computed_value = String(parseInt(this.state.input_prev) * parseInt(this.state.input_curr));
        break;
      case this.OPERATION_ENUM.DIV:
        computed_value = String(parseInt(this.state.input_prev) / parseInt(this.state.input_curr));
        break;
      default:
        console.log("switch " , this.state.current_operation)
    }

  this.setState({
      current_operation : this.OPERATION_ENUM.DONE,
      input_prev : computed_value,
      input_curr : computed_value,
      append: false
    })
  }

  clearInputs = ()=>{
    this.setState({
      current_operation : this.OPERATION_ENUM.NONE,
      input_prev : '0',
      input_curr : '0',
      decimal_pressed: false,
      append: false
    })
  }

  //When you press a number button, its value will update the input fields
  appendValue = (val)=>{
    let new_input_curr = "";
    if(this.state.append)
      new_input_curr = this.state.input_curr + String(val);
    else
      new_input_curr = String(val);
    

    this.setState({
      input_curr : new_input_curr,
      append: true
    })
  }

  //Appends a decimal to the buffer
  appendDecimal = ()=>{
    let new_input_curr = "";

    //If you're in a new state and you press '.', append a 0 before hand.     
    if(this.state.current_operation === this.OPERATION_ENUM.NEW){
      new_input_curr = "0" + "."
    }

    else if(!this.state.decimal_pressed){
      new_input_curr = this.state.input_curr + '.';
    } 

    this.setState({
      decimal_pressed : true,
      input_curr : new_input_curr,
      append: true
    });
  }

  //Surrounds any component with a div that allows for placement inside a grid.
  wrapWithGridItem(child, [rowStart, rowStop=rowStart], [colStart, colStop=colStart]){
    return <GridItem rowStart={rowStart} rowStop={rowStop} colStart={colStart} colStop={colStop}>
      {child}
    </GridItem>
  }


  render() {
    return (
      <Container>
        <ButtonLayout>
          
          {this.wrapWithGridItem(<ViewField history = {this.state.input_prev} display = {this.state.input_curr}/>, [1] ,[1,6])}

          {this.wrapWithGridItem(<NumberButton value = {0} clickHandler = {this.appendValue.bind(this,0)}/> , [5], [1,4] )}

          {this.wrapWithGridItem(<NumberButton value = {1} clickHandler = {this.appendValue.bind(this,1)}/> , [4], [1] )}
          {this.wrapWithGridItem(<NumberButton value = {2} clickHandler = {this.appendValue.bind(this,2)}/> , [4], [2] )}
          {this.wrapWithGridItem(<NumberButton value = {3} clickHandler = {this.appendValue.bind(this,3)}/> , [4], [3] )}

          {this.wrapWithGridItem(<NumberButton value = {4} clickHandler = {this.appendValue.bind(this,4)}/> , [3], [1] )}
          {this.wrapWithGridItem(<NumberButton value = {5} clickHandler = {this.appendValue.bind(this,5)}/> , [3], [2] )}
          {this.wrapWithGridItem(<NumberButton value = {6} clickHandler = {this.appendValue.bind(this,6)}/> , [3], [3] )}

          {this.wrapWithGridItem(<NumberButton value = {7} clickHandler = {this.appendValue.bind(this,7)}/> , [2], [1] )}
          {this.wrapWithGridItem(<NumberButton value = {8} clickHandler = {this.appendValue.bind(this,8)}/> , [2], [2] )}
          {this.wrapWithGridItem(<NumberButton value = {9} clickHandler = {this.appendValue.bind(this,9)}/> , [2], [3] )}

          {this.wrapWithGridItem(<NumberButton value = {"."} clickHandler = {this.appendDecimal}/> , [5], [4] )}
          {this.wrapWithGridItem(<NumberButton value = {"c"} clickHandler = {this.clearInputs}/> , [4], [4] )}

          {this.wrapWithGridItem(<OperationButton color={"#222"} value = {"="} clickHandler = {this.evalulate}/> , [4,6], [5] )}
          {this.wrapWithGridItem(<OperationButton value = {"+"} clickHandler = {this.add}/> ,       [2], [4] )}
          {this.wrapWithGridItem(<OperationButton value = {"-"} clickHandler = {this.subtract}/> ,  [2], [5] )}
          {this.wrapWithGridItem(<OperationButton value = {"*"} clickHandler = {this.multiply}/> ,  [3], [4] )}
          {this.wrapWithGridItem(<OperationButton value = {"/"} clickHandler = {this.divide}/> ,    [3], [5] )} 

        </ButtonLayout> 
      </Container>
    );
  }
}

export default Calculator;
