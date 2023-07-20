import { useContext } from "react";
import { Header } from "./Header"
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { Main } from "./Main";

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* position: fixed; */
  /* top: 0; */
  /* border: 1px solid blue; */
  
  >div{
    width: 100%;
    height: 100%;
    max-width: 1200px;
    /* box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.03); */
    display: flex;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      flex-direction: column;
    }
  }
  .error{
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
export const Container = () => {
  const { language, mobileBreakPoint } = useContext(GlobalContext)

  return(
    <Content id="container" bp={mobileBreakPoint}>
      {language === '/' || language === '/pt' || language === '/en'? 
      <div className="content">
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