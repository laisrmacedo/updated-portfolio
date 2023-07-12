import { useContext, useState } from "react";
import { Header } from "./Header"
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { ConfigureScreen } from "./ConfigureScreen";
import { Main } from "./Main";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  >div{
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    -webkit-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.1); 
    box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.1);
    /* border: 5px solid red; */
    display: flex;
  }
  .error{
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
export const Container = () => {
  const { language } = useContext(GlobalContext)

  return(
    <Content>
      {language === '/pt' || language === '/en'? 
      <div>
        <Header/>
        <Main/>

      </div>
      :
      <div className="error">
        <h1>404 ERROR</h1>
        <p>PAGE NOT FOUND</p>
      </div>
      }
    </Content>
  )
}