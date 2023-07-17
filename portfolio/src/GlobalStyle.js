import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
    background:  ${(props) => (props.currentTheme ? '#fff' : '#33414d')};
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
    margin: 20px 0 100px 0;
    position: relative;
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

  a{
    text-decoration: none;
    &:hover{
      color: #91B797;
      transition: color .3s ease-in-out;
    }
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
    background:  ${(props) => (props.currentTheme ? '#F9F3EB8a' : '#50677A5a')};
    font-variant: all-small-caps;
    padding: 0px 12px;
    border-radius: 12px;
    font-size: 14px;
    color: ${(props) => (props.currentTheme ? '#485C6D' : '#C4C7AC')};
    cursor: default;
    &:hover{
      background: ${(props) => (props.currentTheme ? '#F4E9DB' : '#203647')};
      transition: background .3s ease-in-out;
    }
  }

  .degrade{
    background-color: transparent;
    
    background: linear-gradient(20deg, #7CA1BF, #C4C7AC, #5A8279, #91B797);
    background-size: 200% 100%;
    animation: effect 2s linear infinite alternate;
    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes effect{
    0%{
      background-position: 0%;
    }
    100%{
      background-position: 100%;
    }
  }
`

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`
