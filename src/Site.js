import Calculator from './Calculator';
import styled from 'styled-components'
import React from 'react'

const FlushedText = styled.p`

`


export default ()=>{
    return <div>
         <Calculator />
        <FlushedText>  This is my calculator .</FlushedText>
       
    </div>    
    
}