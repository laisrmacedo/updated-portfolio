import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import github from '../assets/github.png'
import home from '../assets/home.png'
import linkedin from '../assets/linkedin.png'
import { Link } from "react-scroll";

const Container = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    gap: 20px;

    a{
      height: 100%;
      display: flex;
      align-items: center;
    }
    
    img{
      cursor: pointer;
      height: 28px;
      filter: ${(props) => (props.currentTheme ? 'brightness(1.5)' : 'brightness(1.8)')};
      &:hover{
        filter: ${(props) => (props.currentTheme ? 'brightness(1)' : 'brightness(3)')};
      }
    }
`

export const SocialMedia = () => {
  const { language, defaultLanguage, currentTheme } = useContext(GlobalContext)

  return(
    <Container currentTheme={currentTheme}>
      <Link to="home-screen" smooth={true} duration={1800}><img className="hidden" src={home}/></Link>
      <a href="https://github.com/laisrmacedo" target="_blank"><img src={github}/></a>
      {language === defaultLanguage ?
        <a href="https://www.linkedin.com/in/laisrmacedo/" target="_blank"><img src={linkedin}/></a>
        :
        <a href="https://www.linkedin.com/in/laisrmacedo/?locale=en_US" target="_blank"><img src={linkedin}/></a>
      }
    </Container>
  )
}