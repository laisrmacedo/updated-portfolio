import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
    background:  ${(props) => (props.currentTheme ? '#fff' : '#485C6D')};
    color:  ${(props) => (props.currentTheme ? '#485C6D' : '#fffaeb')};
    transition: background 1s ease-in-out;

    ::-webkit-scrollbar-track {
      background: #000; 
    };
    ::-webkit-scrollbar{
      width: 8px;
    };
    ::-webkit-scrollbar-thumb {
      background: #7b2609; 
      border-radius: 4px;
    };
    ::-webkit-scrollbar-thumb:hover {
      background: #D5D8DE; 
    }
    ::-webkit-scrollbar-thumb:active {
      background: #D5D8DE; 
    }
  }

  h1{
    font-size: 32px;
  }
  
  h3{
    font-size: 16px;
    text-transform: uppercase;
  }

  p{
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
    text-align: justify;
  }

  .smallBtn{
    background: ${(props) => (props.currentTheme ? '#F4E9DB' : '#5A8279')};
    border: none;
    border-radius: 8px;
    padding: 4px 20px;
    font-size: 12px;
    font-variant: all-small-caps;
    cursor: pointer;
    &:hover{
      background: ${(props) => (props.currentTheme ? '#DED0B8' : '#F4E9DB8a')};
      transition: background .3s ease-in-out;
    }
  }
`