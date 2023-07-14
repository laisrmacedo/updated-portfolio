import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const Container = styled.footer`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p{
    font-size: 10px;
    line-height: 12px;
  }
  a{
    text-decoration: none;
  }
`

export const Footer = () => {
  const { language, defaultLanguage } = useContext(GlobalContext)

  return(
    <Container>
      {language === defaultLanguage? 
        <>
          <p>Codificado em Visual Studio Code por mim mesma. Construído com React e implantado com Vercel. Todo o texto é definido no tipo de letra <a href="https://fonts.google.com/specimen/Josefin+Sans?query=jose">Josefin Sans</a></p>
          <p>Imagem de cabeçalho animada criada por Myriade - <a href="https://lottiefiles.com/animations/waves-in-gradient-1-gKtmMPeAUx">LottieFiles</a></p>
        </>
        :
        <>
          <p>Coded in Visual Studio Code by yours truly. Built with React and deployed with Vercel. All text is set in font<a href="https://fonts.google.com/specimen/Josefin+Sans?query=jose">Josefin Sans</a></p>
          <p>Animated header image created by Myriade - <a href="https://lottiefiles.com/animations/waves-in-gradient-1-gKtmMPeAUx">LottieFiles</a></p>
        </>
      }
      <p>© Copyright 2023</p>
    </Container>
  )
}

