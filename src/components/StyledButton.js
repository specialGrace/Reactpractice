import React from 'react'
import styles from 'styled-components';
import {ButtonContainer, Heading, Container} from './ReusableButton'

function StyledButton() {
  return (
    <div>
        <Container>
            <Heading secondary>this is a styled component</Heading>
            <Button>click</Button>
            <ButtonContainer>click me</ButtonContainer>
        </Container>
    
    </div>
  )
}

export default StyledButton



const Button = styles.button`
     color:#fff;
     background-color:green;
     padding:10px 20px;

     &:hover{
        background-color:black;
     }
`