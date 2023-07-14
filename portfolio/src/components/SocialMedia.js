import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Container = styled.div`
    height: 30px;
    display: flex;
    gap: 8px;

    img{
      height: 25px;
      opacity: 0.5;
    }
`

export const SocialMedia = () => {
  const { language, defaultLanguage } = useContext(GlobalContext)

  return(
    <Container>
      <a href="https://github.com/laisrmacedo"><img src={github}/></a>
      {language === defaultLanguage ?
        <a href="https://www.linkedin.com/in/laisrmacedo/"><img src={linkedin}/></a>
        :
        <a href="https://www.linkedin.com/in/laisrmacedo/?locale=en_US"><img src={linkedin}/></a>
      }
    </Container>
  )
}