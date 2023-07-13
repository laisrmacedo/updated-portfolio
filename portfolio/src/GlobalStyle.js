import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
    background:  ${(props) => (props.currentTheme ? '#fff' : '#485C6D')};
    color:  ${(props) => (props.currentTheme ? '#485C6D' : '#fffaeb')};
    transition: background 1s ease-in-out;

    ::-webkit-scrollbar-track {
      /* background: #000;  */
    };
    ::-webkit-scrollbar{
      width: 8px;
    };
    ::-webkit-scrollbar-thumb {
      background: rgba(124,161,191,0.1);
      border-radius: 4px;
    };
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(124,161,191,0.2); 
    }
    ::-webkit-scrollbar-thumb:active {
      background: rgba(124,161,191,0.3); 
    }
  }

  body{
    overflow-y: hidden;
  }

  section{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 120px;
    /* height: 100%; */
  }

  h1{
    font-size: 32px;
  }

  h2{
    font-size: 20px;
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

  .skill{
    background:  ${(props) => (props.currentTheme ? '#F9F3EB8a' : '#50677A')};
    font-variant: all-small-caps;
    padding: 2px 12px;
    border-radius: 12px;
    font-size: 14px;
    color: ${(props) => (props.currentTheme ? '#485C6D' : '#C4C7AC')};
  }
`

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`
