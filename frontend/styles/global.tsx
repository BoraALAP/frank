import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

  body{
    font-family: ${({ theme }) => theme.font.family.main};
    font-weight: 600;
    margin: 0;
    color:  ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.bg};
  }

  small{
    color: ${({ theme }) => theme.color.grey};
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0; 
  }

  h1{
    font-size: 4.5rem;
    line-height: 4.5rem;
  }

  h2{
    font-size: 2rem;

  }

  h3{
    font-size: 1.75rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  h4{
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
   
  }

  h5{
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;
   
  }


  h6{
    font-size: 1rem;
    font-weight: 600;
  }

  p{
    font-size: 1rem;
    line-height: 1.5em;
    font-weight: 400;
    max-width: 35rem;
    margin: 0;
  }

  ul{
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    list-style: none;
    gap: 1rem;

    
  li{
    display: grid;
    align-items: baseline;
    font-size: 0.875rem;
    font-weight: 400;
      color: ${({ theme }) => theme.color.primary};
      h4{
        margin: 0;
      }
  }
}

  a{
    font-size: 1.125rem;
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};
  }
  button{
    font-size: 1.125rem;
    &:disabled{
      background-color: ${({ theme }) => theme.color.grey};
      border: none;
      color: ${({ theme }) => theme.color.lightGrey};
    }
  }

  form{
    display: grid;
    
    h1, h2, h3 {
      margin:0
    }
  }

  input{
    padding: ${({ theme }) => theme.buttonPadding}; 
    border: 1px solid ${({ theme }) => theme.color.grey};
    min-height: 32px;
    font-size: 0.875rem;
    box-sizing: border-box;
  }

  
`;

export default GlobalStyle;
