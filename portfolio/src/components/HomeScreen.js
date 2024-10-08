import styled from "styled-components";
import { Link } from 'react-scroll';
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { SocialMedia } from "./SocialMedia";
import { ConfigureScreen } from "./ConfigureScreen";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: start;

  h1{
    font-size: min(48px, 10vw);
  }
  h3{
    font-weight: 700;
    font-size: 24px;
  }
  
  p{
    text-transform: uppercase;
  }

  button{
    background: transparent;
    border: 1px solid #fffaeb;
    padding: 12px 28px 12px 12px;
    border-radius: 4px;
    font-weight: 100;
    font-size: 12px;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;
    &:hover{
      background: #7D7D7E8a;
      transition: background .5s ease-in-out;
    }
    &:active{
      background: #91B7977a;
    }
    span{
      position: absolute;
      right: 12px;
      top: 0;
      animation: arrowAnimation 1s infinite ease-in-out;
    }
    @keyframes arrowAnimation {
      0%, 100% {
        transform: translateY(8px);
      }
      25% {
        transform: translateY(10px);
      }
      50% {
        transform: translateY(6px);
      }
      75% {
        transform: translateY(10px);
      }
    }
  }
  >div{
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: end;
    align-items: center;
    height: 83vh;
    width: 100%;
    max-width: 1320px;
    /* border: 1px solid red; */
  }
  .title{
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
  }
  .social-media{
    width: 100%;
    padding: 0 40px 0 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: start;
    margin-top: 150px;
    a{
      img{
        filter: brightness(2.5);
      }
    }
    span{
      .moon{
        filter: brightness(5);
      }
    }
    .hidden{
      display: none;
    }
  }
  `

export const HomeScreen = () => {
  const { language, defaultLanguage } = useContext(GlobalContext)

  return(
    <Container id="home-screen">
      <div>
        <h3 className="degrade">Portfolio</h3>
        <span className="title">
          <h1>Laís Rodrigues</h1>
          {language === defaultLanguage ? <p>Desenvolvedora Frontend</p> : <p>Frontend Developer</p>}
        </span>
        <Link to="navContainer" smooth={true} duration={1800}><button>{language === defaultLanguage ? 'Saiba mais' : 'Read more'} <span>&darr;</span></button></Link>
        <span className="social-media">
          <SocialMedia/>
          <ConfigureScreen hidden={true}/>
        </span>
      </div>
    </Container>
  )
}