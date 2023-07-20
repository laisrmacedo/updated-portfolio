import styled from "styled-components";
import { AnimatedText } from "./AnimatedText";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* border: 1px solid red; */
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  >span{
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
  }
  button{
    background: transparent;
    border: 1px solid #fff;
    padding: 12px;
    border-radius: 4px;
    font-weight: 100;
    font-size: 12px;
    text-transform: uppercase;

  }
`

export const HomeScreen = () => {
  return(
    <Container id="home-screen">
      <h3 className="degrade">Portfolio</h3>
      <span>
        <h1>Laís Rodrigues</h1>
        <p>Desenvolvedora Web Full Stack</p>
      </span>
      <button>Saiba Mais &rsaquo;</button>
    </Container>
  )
}