import Lottie from "lottie-react";
import colors from "../assets/colors.json";
import styled from "styled-components";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import { Link } from 'react-scroll';

const Container = styled.header`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  padding: 40px;
  
  .title{
    height: 10%;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .menu{
    display: flex;
    align-items: start;
    height: 60%;
    gap: 15px;
    flex-direction: column;
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
  .social-media{
    /* border: 5px solid red; */
    height: 10%;
    display: flex;
    align-items: end;
    gap: 8px;
    img{
      height: 25px;
      opacity: 0.5;
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
`

export const Header = () => {
  const { language } = useContext(GlobalContext)
  const [menuCliked, setMenuCliked] = useState(false)

  return (
    <Container id={menuCliked}>
      <div className="title">
        <Lottie animationData={colors} loop={true} style={{ height: 60, overflowY: "hidden" }} />
        <span>
          <h1>Laís Rodrigues</h1>
          {language === '/pt' ? <p>Desenvolvedora Web Full Stack</p> : <p>Web Full Stack Desenveloper</p>}
        </span>
      </div>
        <div className="menu">
          <div>
            <span id="btn-1"></span>
            <Link onClick={() => setMenuCliked("btn-1")} to="about" smooth={true} duration={500} containerId="navContainer"><h3 style={{cursor:"pointer"}}>{language === '/pt' ? 'Sobre mim' : 'About'}</h3></Link>
          </div>
          <div>
            <span id="btn-2"></span>
            <Link onClick={() => setMenuCliked("btn-2")} to="experience" smooth={true} duration={500} containerId="navContainer"><h3 style={{cursor:"pointer"}}>{language === '/pt' ? 'Experiência' : 'Experience'}</h3></Link>
          </div>
          <div>
            <span id="btn-3"></span>
            <Link onClick={() => setMenuCliked("btn-3")} to="projects" smooth={true} duration={500} containerId="navContainer"><h3 style={{cursor:"pointer"}}>{language === '/pt' ? 'Projetos' : 'Projects'}</h3></Link>
          </div>
          <div>
            <span id="btn-4"></span>
            <Link onClick={() => setMenuCliked("btn-4")} to="contact" smooth={true} duration={500} containerId="navContainer"><h3 style={{cursor:"pointer"}}>{language === '/pt' ? 'Contato' : 'Contact'}</h3></Link>
          </div>
        </div>
      <div className="social-media">
        <a href="https://github.com/laisrmacedo"><img src={github}/></a>
        {language === '/pt' ?
          <a href="https://www.linkedin.com/in/laisrmacedo/"><img src={linkedin}/></a>
          :
          <a href="https://www.linkedin.com/in/laisrmacedo/?locale=en_US"><img src={linkedin}/></a>
        }
      </div>
    </Container>
  )
}