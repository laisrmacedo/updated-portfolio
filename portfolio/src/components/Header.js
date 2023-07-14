import Lottie from "lottie-react";
import colors from "../assets/colors.json";
import styled from "styled-components";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from 'react-scroll';
import { SocialMedia } from "./SocialMedia";

const Container = styled.header`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;

  @media screen and (max-width: ${(props) => (props.bp + 'px')}){
    width: 100%;
    height: 20%;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
  }
  
  .title{
    height: 10%;
    display: flex;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      /* border: 1px solid red; */
      height: 100%;
      max-width: 100vw;
      justify-content: center;
      min-height: 65px;
      h1{
        font-size: min(6vw, 32px)
      }
      p{
        font-size: min(4vw, 16px)
      }
    }
  }
  .menu{
    display: flex;
    align-items: start;
    height: 60%;
    gap: 15px;
    flex-direction: column;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      display: none;
    }
    div{
      display: flex;
      align-items: center;
      gap: 10px;
      span{
        display: none;
      }
    }
    h3{
      &:hover{
        color: #91B797;
        transition: color .3s ease-in-out;
      }
    }
  }

  #${(props) => (props.id)}{
    display: ${(props) => (props.id? 'block' : '')};
    background: #91B797;
    height: 3px;
    margin-bottom: 3px;
    animation-name: spanWidth;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  @keyframes spanWidth {
    0% {
      width: 0;
    }
    100% {
      width: 50px;
    }
  }

  .hidden{
    display: flex;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      display: none;
    }
  }
`

export const Header = () => {
  const { language, defaultLanguage, mobileBreakPoint } = useContext(GlobalContext)
  const [menuCliked, setMenuCliked] = useState(false)

  return (
    <Container id={menuCliked} bp={mobileBreakPoint}>
      <div className="title">
        <Lottie animationData={colors} loop={true} style={{ height: 60, overflowY: "hidden" }} />
        <span>
          <h1>Laís Rodrigues</h1>
          {language === defaultLanguage ? <p>Desenvolvedora Web Full Stack</p> : <p>Web Full Stack Desenveloper</p>}
        </span>
      </div>
      <div className="menu">
        <div>
          <span id="btn-1"></span>
          <Link onClick={() => setMenuCliked("btn-1")} to="about" smooth={true} duration={500} containerId="navContainer"><h3 style={{cursor:"pointer"}}>{language === defaultLanguage ? 'Sobre mim' : 'About'}</h3></Link>
        </div>
        <div>
          <span id="btn-2"></span>
          <Link onClick={() => setMenuCliked("btn-2")} to="experience" smooth={true} duration={500} containerId="navContainer"><h3 style={{cursor:"pointer"}}>{language === defaultLanguage ? 'Experiência' : 'Experience'}</h3></Link>
        </div>
        <div>
          <span id="btn-3"></span>
          <Link onClick={() => setMenuCliked("btn-3")} to="projects" smooth={true} duration={500} containerId="navContainer"><h3 style={{cursor:"pointer"}}>{language === defaultLanguage ? 'Projetos' : 'Projects'}</h3></Link>
        </div>
        <div>
          <span id="btn-4"></span>
          <Link onClick={() => setMenuCliked("btn-4")} to="contact" smooth={true} duration={500} containerId="navContainer"><h3 style={{cursor:"pointer"}}>{language === defaultLanguage ? 'Contato' : 'Contact'}</h3></Link>
        </div>
      </div>
      <span className="hidden">
        <SocialMedia/>
      </span>
    </Container>
  )
}