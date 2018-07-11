import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import NumberButton from './Components/NumberButton'
import ViewField from './Components/ViewField'
import OperationButton from './Components/OperationButton'

const Container = styled.div`
  background-color: black;
  height: 50vh;
  width: 50vw;
  
  border-style:dotted;
  border-color: purple;
  border-width: thick;

  min-width: 350px;
  min-height: 500px;

  max-width: 500px;
  max-height: 700px;
`

const ButtonLayout = styled.div`
  background-color : #310a31;
  margin: 0px;
  padding: 0px;

  border-radius: 5px;

  height: 100%;
  width: 100%;

  grid-gap: 5px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

const GridItem = styled.div`
    grid-column: ${(props)=> props.colStart + '/' + props.colStop};
    grid-row: ${(props)=> props.rowStart + '/' + props.rowStop};
    background-color: purple;

    height: 100%;
    width: 100%;  

`

//Note that the input fields are stored as strings
class Calculator extends Component {
  constructor(props){
    super(props);

    //An enumeration that lists all the possible states the calculator is in
    this.OPERATION_ENUM = {
      NONE : 0, 
      ADD : 1,
      SUB : 2,
      DIV : 3,
      MUL : 4,
      DONE: 5, //All done, ready for a completely new input
    }

    this.state = {
      input_prev : "0",
      input_curr : "0",
      current_operation: this.OPERATION_ENUM.NONE
    }
  }

  add = () => {
    const evaluated_val = String(parseInt(this.state.input_prev) + parseInt(this.state.input_curr))
    const new_state = this.OPERATION_ENUM.ADD;

    this.setState({
      current_operation : new_state,
      input_prev : evaluated_val,
      input_curr : '0'
    })

    console.log("now", this.state.current_operation)
  }

  subtract = ()=>{
    this.setState({
      current_operation : this.OPERATION_ENUM.SUB
    })
  }

  divide = ()=>{
    this.setState({
      current_operation : this.OPERATION_ENUM.DIV
    })
  }

  multiply = ()=>{
    this.setState({
      current_operation : this.OPERATION_ENUM.MULT
    })
  }


  evalulate = ()=>{
    console.log('a', this.state.input_prev , ' ',  this.state.input_curr)
    let computed_value = 0;

    console.log("hm" , this.state.current_operation)
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

    console.log('the result is ', computed_value);
    
    this.setState({
      current_operation : this.OPERATION_ENUM.DONE,
      input_prev : computed_value,
      input_curr : computed_value
    })
  }

  clearInputs = ()=>{
    this.setState({
      current_operation : this.OPERATION_ENUM.DONE,
      input_prev : '0',
      input_curr : '0',
    })
  }

  //When you press a number button, its value will update the input fields
  pushToBuffer = (val)=>{
    let new_input_curr;
    if((this.state.input_curr === '0') || !(this.state.current_operation === this.OPERATION_ENUM.NONE))
      new_input_curr = String(val);
    else
      new_input_curr = this.state.input_curr + String(val);

    this.setState({
      input_curr : new_input_curr
    })
  }

  wrapWithGridItem(child, [rowStart, rowStop=rowStart], [colStart, colStop=colStart]){
    return <GridItem rowStart={rowStart} rowStop={rowStop} colStart={colStart} colStop={colStop}>
      {child}
    </GridItem>
  }


  render() {
    return (
      <Container>
        <ButtonLayout>
          
          {this.wrapWithGridItem(<ViewField history = {this.state.input_prev} display_value = {this.state.input_curr}/>, [1] ,[1,6])}

          {this.wrapWithGridItem(<NumberButton value = {0} clickHandler = {this.pushToBuffer.bind(this,0)}/> , [5], [1,4] )}

          {this.wrapWithGridItem(<NumberButton value = {1} clickHandler = {this.pushToBuffer.bind(this,1)}/> , [4], [1] )}
          {this.wrapWithGridItem(<NumberButton value = {2} clickHandler = {this.pushToBuffer.bind(this,2)}/> , [4], [2] )}
          {this.wrapWithGridItem(<NumberButton value = {3} clickHandler = {this.pushToBuffer.bind(this,3)}/> , [4], [3] )}

          {this.wrapWithGridItem(<NumberButton value = {4} clickHandler = {this.pushToBuffer.bind(this,4)}/> , [3], [1] )}
          {this.wrapWithGridItem(<NumberButton value = {5} clickHandler = {this.pushToBuffer.bind(this,5)}/> , [3], [2] )}
          {this.wrapWithGridItem(<NumberButton value = {6} clickHandler = {this.pushToBuffer.bind(this,6)}/> , [3], [3] )}

          {this.wrapWithGridItem(<NumberButton value = {7} clickHandler = {this.pushToBuffer.bind(this,7)}/> , [2], [1] )}
          {this.wrapWithGridItem(<NumberButton value = {8} clickHandler = {this.pushToBuffer.bind(this,8)}/> , [2], [2] )}
          {this.wrapWithGridItem(<NumberButton value = {9} clickHandler = {this.pushToBuffer.bind(this,9)}/> , [2], [3] )}

          {this.wrapWithGridItem(<NumberButton value = {"."} clickHandler = {()=>{}}/> , [5], [4] )}
          {this.wrapWithGridItem(<NumberButton value = {"c"} clickHandler = {this.clearInputs}/> , [4], [4] )}

          {this.wrapWithGridItem(<OperationButton color={"#eee"} value = {"="} clickHandler = {this.evalulate}/> , [4,6], [5] )}
          {this.wrapWithGridItem(<OperationButton value = {"+"} clickHandler = {this.add}/> ,       [2], [4] )}
          {this.wrapWithGridItem(<OperationButton value = {"-"} clickHandler = {this.subtract}/> ,  [2], [5] )}
          {this.wrapWithGridItem(<OperationButton value = {"*"} clickHandler = {this.multiply}/> ,  [3], [4] )}
          {this.wrapWithGridItem(<OperationButton value = {"%"} clickHandler = {this.divide}/> ,    [3], [5] )} 

        </ButtonLayout> 
      </Container>
    );
  }
}

export default Calculator;
