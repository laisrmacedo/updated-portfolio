import Lottie from "lottie-react";
import colors from "../assets/colors.json";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

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
    h1{
      margin-bottom: 8px;
    }
  }
  .menu{
    display: flex;
    align-items: start;
    height: 60%;
    gap: 15px;
    flex-direction: column;
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
`

export const Header = () => {
  const { language } = useContext(GlobalContext)

  return (
    <Container>
      <div className="title">
        <Lottie animationData={colors} loop={true} style={{ height: 60, overflowY: "hidden" }} />
        <span>
          <h1>Laís Rodrigues</h1>
          {language === '/pt' ? <p>Desenvolvedora Web Full Stack</p> : <p>Web Full Stack Desenveloper</p>}
        </span>
      </div>
      {language === '/pt' ?
        <div className="menu">
          <h3>Sobre mim</h3>
          <h3>Experiência</h3>
          <h3>Projetos</h3>
          <h3>Contato</h3>
        </div>
        :
        <div className="menu">
          <h3>About</h3>
          <h3>Experience</h3>
          <h3>Projects</h3>
          <h3>Contact</h3>
        </div>
      }
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