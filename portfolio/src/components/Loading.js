import React, { useContext } from "react";
import Lottie from "lottie-react";
import colors from "../assets/colors.json";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    display: flex;
    align-items: center;
    gap: 15px;
    p{
      font-size: 48px;
      margin: 0px;
    }
  }
`

export const Loading = () => {
  const {language} = useContext(GlobalContext)

  return(
    <Container>
      <div>
        <Lottie animationData={colors} loop={true} style={{height:100, width:100, overflowY: "hidden"}} />
        {language === '/pt'? <p>Bem-vindo!</p> : language === '/en'? <p>Welcame!</p> : <p></p>}
      </div>
    </Container>
  )
}