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
    font-size: 2.5rem;
    line-height: 2.5rem;
    @media screen and (min-width: ${({ theme }) => theme.mq.tablet}){
      font-size: 4.5rem;
      line-height: 4.5rem;
      }
  }

  h2{
    font-size: 1.5rem;
    
    @media screen and (min-width: ${({ theme }) => theme.mq.tablet}){
      
      font-size: 2rem;
      }

  }

  h3{
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 2rem;
    @media screen and (min-width: ${({ theme }) => theme.mq.tablet}){
      font-size: 1.75rem;
      line-height: 2.5rem;
      }
  }

  h4{
    font-weight: 600;
    font-size: 1.125rem;
      line-height: 1.5rem;
    @media screen and (min-width: ${({ theme }) => theme.mq.tablet}){
          
      font-size: 1.5rem;
      line-height: 2rem;
      }
   
  }

  h5{
    font-size: 1rem;
    line-height: 1.125rem;
    
    font-weight: 400;
    @media screen and (min-width: ${({ theme }) => theme.mq.tablet}){
      
      font-size: 1.25rem;
      line-height: 2rem;
          }
  }


  h6{
    font-weight: 600;
    font-size: 0.875rem;
    @media screen and (min-width: ${({ theme }) => theme.mq.tablet}){
      font-size: 1rem;
      
      
          }
  }

  p{
    font-size: 0.875rem;
      line-height: 1.25rem;
  
    font-weight: 400;
    max-width: 35rem;
    margin: 0;

    @media screen and (min-width: ${({ theme }) => theme.mq.tablet}){
      font-size: 1rem;
    line-height: 1.5em;
      
          }
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
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};
    font-size: 1rem;
    @media screen and (min-width: ${({ theme }) => theme.mq.tablet}){
      font-size: 1.125rem;
          
      }
  }
  button{
    font-size: 1.125rem;
    background-color: transparent;
    outline: none;
    border: none;
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

  input, textarea{
    padding: ${({ theme }) => theme.buttonPadding}; 
    border: 1px solid ${({ theme }) => theme.color.grey};
    min-height: 32px;
    font-size: 0.875rem;
    box-sizing: border-box;
    font: 400 0.875rem ${({ theme }) => theme.font.family.main};
  }

  
`;

export default GlobalStyle;
