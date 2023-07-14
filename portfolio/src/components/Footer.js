import styled from "styled-components";

const Container = styled.footer`
/* border: 1px  solid red; */
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
  return(
    <Container>
      <p>Codificado em Visual Studio Code por mim mesma. Construído com React e implantado com Vercel. Todo o texto é definido no tipo de letra <a href="https://fonts.google.com/specimen/Josefin+Sans?query=jose">Josefin Sans</a></p>
      <p>Animated header image created by Myriade - <a href="https://lottiefiles.com/animations/waves-in-gradient-1-gKtmMPeAUx">LottieFiles</a></p>
      <p>© Copyright 2023</p>
    </Container>
  )
}

