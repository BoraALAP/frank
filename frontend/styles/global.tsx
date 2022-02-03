import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --font-main: 'Heebo', sans-serif;
    --boxShadow: 0.1em 0.1em 0.3em 0.1em rgba(0,0,0,0.4);
    --buttonPadding: 0.5em 1em;
    --boxPadding: 1em;
    --boxRadius: 0;
    --cardRadius: 1em;
    --cardShadow: 0 0.25em 2em 0.25em rgba(0,0,0,0.15);
    --cardPadding: 3em 3em;
    --contentPadding: 2.5vw;
    --padding: 2rem;
    --gap: 2rem;

    --color-primary: hsl(209,71%,19%);
    --color-primaryDisabled: hsla(209,71%,19%,60%);
    --color-secondary: hsl(166, 100%, 28%);
    --color-grey: hsl(0, 0%, 40%);
    --color-lightGrey: hsl(0, 0%, 84%);
    --color-lightGrey2: hsl(0, 0%, 89%);
    --color-bg: hsl(0, 0%, 95%);
    --color-black: hsl(0, 0%, 0%);
    --color-white: hsl(0, 0%, 100%);
    --color-whiteDisabled: hsla(0, 0%, 100%,60%);
    --color-highlight: hsla(0, 0%, 100%, 0.4);
    --color-error: hsl(0, 100%, 15%);
    --color-whiteBg: hsla(0, 0%, 100%, 0.5);
    --color-overlay: hsla(0, 0%, 0%, 90%);

    --mq-small: 414px;
    --mq-tablet: 768px;
    --mq-desktop: 991px;
    --mq-xl: 1440px;

    --color-gray: var(--color-grey);
    --color-lightGray: var(--color-lightGrey);
    --color-lightGray2: var(--color-lightGrey2);

    @media screen and (min-width: 768px){
      --padding: 3.5rem;
      --gap: 2rem;
    }
  }

*:focus{
  outline: 1px solid #001ec9;
}
  body{
    font-family: var(--font-main);
    font-weight: 400;
    margin: 0;
    color:  var(--color-primary);
    background-color: var(--color-bg);
  }

  small{
    color: var(--color-grey);
  }

  h1,h2,h3,h4,h5,h6{
    margin: 0; 
  }

  h1{
    font-size: 2.5rem;
    line-height: 3.5rem;
    @media screen and (min-width: 768px){
      font-size: 4.5rem;
      line-height: 6.5rem;
      }
  }

  h2{
    font-size: 1.5rem;
    
    @media screen and (min-width: 768px){
      
      font-size: 2rem;
      }

  }

  h3{
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
    @media screen and (min-width: 768px){
      font-size: 1.75rem;
      line-height: 2.5rem;
      }
  }

  h4{
    font-weight: 600;
    font-size: 1.125rem;
      line-height: 1.5rem;
    @media screen and (min-width: 768px){
          
      font-size: 1.5rem;
      line-height: 2.5rem;
      }
   
  }

  h5{
    font-size: 1rem;
    line-height: 1.125rem;
    
    font-weight: 400;
    @media screen and (min-width: 768px){
      
      font-size: 1.25rem;
      line-height: 2rem;
          }
  }


  h6{
    font-weight: 600;
    font-size: 0.875rem;
    @media screen and (min-width: 768px){
      font-size: 1rem;
      
      
          }
  }

  p{
    font-size: 0.875rem;
      line-height: 1.25rem;
  
    font-weight: 400;
    max-width: 35rem;
    margin: 0;

    @media screen and (min-width: 768px){
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
      color: var(--color-primary);
      h4{
        margin: 0;
      }
  }
}

  a{
    text-decoration: none;
    color: var(--color-primary);
    font-size: 1rem;
    font-weight: 500;
    @media screen and (min-width: 768px){
      font-size: 1.125rem;
          
      }
  }
  button{
    font-size: 1.125rem;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    color: var(--color-primary);
    &:disabled{
      background-color: var(--color-grey);
      border: none;
      color: var(--color-lightGrey);
    }
  }

  form{
    display: grid;
    
    h1, h2, h3 {
      margin:0
    }
  }

  input, textarea{
    padding: var(--buttonPadding); 
    border: 1px solid var(--color-grey);
    min-height: 32px;
    font-size: 0.875rem;
    box-sizing: border-box;
    font: 400 0.875rem var(--font-main);
  }


.lock{
  overflow: hidden;
}
  
`;

export default GlobalStyle;
