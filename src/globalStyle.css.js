import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .button{
    border:3px solid ${({theme})=>theme.text};
    color:${({theme})=>theme.body};
    background-color: ${({theme})=>theme.text}
  }
  .button:hover{
    color:${({theme})=>theme.body};
  }
  .badge{
    background-color:white;
    padding:2rem;
    border-radius: 5rem;
  }
  #toggler{
    margin-top:1rem;
    transition: all 0.2s ease-in-out;
  }
  #toggler:hover{
    transform: scale(1.2);
  }
`