import styled from "styled-components";
import { ConfigureScreen } from "./ConfigureScreen";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  
  
  @media screen and (max-width: ${(props) => (props.bp + 'px')}){
    width: 100%;
    height: 80%;
  }
  
  >div{
    display: flex;
    margin: 0 auto;
    max-width: 1320px;
    height: 100%;
    display: flex;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      flex-direction: column;
    }
    >div{
      /* border: 1px solid red; */
      width: 60%;
      height: 100%;
      margin-top: 36px;
      >div{
        padding: 0 40px 0 0;
      }
      @media screen and (max-width: ${(props) => (props.bp + 'px')}){
        padding: 0 0 0 40px;
        width: 100%;
      }
    }
  }
  
  nav{
    /* border: 1px solid blue; */
    padding-right: 40px;
    overflow-y: scroll;
    height: calc(100vh - 30px - 40px);
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      height: calc(100vh - 100px - 40px - 40px);
      margin-top: 10px;
    }
  }
`

export const Main = () => {
  const { mobileBreakPoint } = useContext(GlobalContext)

  return(
    <Container bp={mobileBreakPoint}>
      <div>
        <Header/>
        <div>
          <ConfigureScreen/>
          <nav id="navContainer">
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Contact/>
            <Footer/>
          </nav>
        </div>

      </div>
    </Container>
  )
}