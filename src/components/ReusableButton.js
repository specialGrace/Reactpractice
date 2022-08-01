import styles from 'styled-components'

export const  ButtonContainer = styles.button`
color:#fff;
background-color:green;
padding:10px 20px;

&:hover{
   background-color:black;
}
`

export const Heading = styles.h1`
     color:${(props)=> props.primary ? 'blue' : props.secondary?'yellow' : '#fff'};
     background-color:${(props)=> props.primary ? 'green' : props.secondary?'black' : 'red'};

     @media (max-width:768px){
            font-size:0.9rem;
     }
`

export const Container= styles.div`
     height:400px;
     width:100%;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     background-color:grey;
`