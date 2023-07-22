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
  align-items: center;

  h1{
    font-size: max(48px, 5vw);
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
    border: 1px solid #fff;
    padding: 12px 28px 12px 12px;
    border-radius: 4px;
    font-weight: 100;
    font-size: 12px;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;
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
    justify-content: center;
    align-items: center;
    >span{
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: center;
      align-items: center;
    }
  }
  >span{
    width: 100%;
    max-width: 1320px;
    padding: 0 40px;
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
      img{
        filter: brightness(2);
      }
    }
    span{
      .sun{
        filter: invert(1);
      }
    }
  }
  `

export const HomeScreen = () => {
  const { language, defaultLanguage } = useContext(GlobalContext)

  return(
    <Container id="home-screen">
      <div>
        <h3 className="degrade">Portfolio</h3>
        <span>
          <h1>Laís Rodrigues</h1>
          {language === defaultLanguage ? <p>Desenvolvedora Web Full Stack</p> : <p>Web Full Stack Desenveloper</p>}
        </span>
        <Link to="navContainer" smooth={true} duration={1800}><button>{language === defaultLanguage ? 'Sobre mim' : 'Read more'} <span>&darr;</span></button></Link>
      </div>
      <span>
        <SocialMedia/>
        <ConfigureScreen hidden={true}/>
      </span>
    </Container>
  )
}