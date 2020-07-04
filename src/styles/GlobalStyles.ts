import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
   height: 100vh; 
  }
  *, button, input{
    border: 0;
    outline: 0;


    font-family: 'Roboto', sans-serif;
  }

  .wrapper-notifications{
    position: absolute;
    right: 2rem;
    bottom:5rem;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32, 34, 37);
    --quaternary: #292b2f;
    --quinary: #393d42
    --senary: #828386;

    --negative: #f84a4b;
    --positive: #21ba45;

    --white: #ffffff;

    --focus: #51cbee;
  }

  
`;