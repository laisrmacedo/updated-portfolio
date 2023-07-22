import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Container = styled.div`
    height: 30px;
    display: flex;
    gap: 20px;
    cursor: pointer;

    img{
      height: 25px;
      filter: ${(props) => (props.currentTheme ? 'brightness(1.5)' : 'brightness(3)')};
      &:hover{
        filter: ${(props) => (props.currentTheme ? 'brightness(1.5)' : 'brightness(2)')};
      }
    }
`

export const SocialMedia = () => {
  const { language, defaultLanguage, currentTheme } = useContext(GlobalContext)

  return(
    <Container currentTheme={currentTheme}>
      <a href="https://github.com/laisrmacedo" target="_blank"><img src={github}/></a>
      {language === defaultLanguage ?
        <a href="https://www.linkedin.com/in/laisrmacedo/" target="_blank"><img src={linkedin}/></a>
        :
        <a href="https://www.linkedin.com/in/laisrmacedo/?locale=en_US" target="_blank"><img src={linkedin}/></a>
      }
    </Container>
  )
}