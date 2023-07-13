import { useContext } from "react";
import { Header } from "./Header"
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { Main } from "./Main";

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  
  >div{
    width: 100%;
    height: 100%;
    max-width: 1200px;
    /* margin: 0 auto; */
    -webkit-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.1); 
    box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.1);
    display: flex;
    /* border: 5px solid red; */
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
      {language === '/' || language === '/pt' || language === '/en'? 
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