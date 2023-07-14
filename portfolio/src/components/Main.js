import styled from "styled-components";
import { ConfigureScreen } from "./ConfigureScreen";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Container = styled.main`
  width: 60%;
  padding: 40px 0 0 0;
  @media screen and (max-width: ${(props) => (props.bp + 'px')}){
    width: 100%;
    padding: 0 0 0 40px;

    }
  /* display: flex;
  flex-direction: column; */
  /* gap: 36px; */
  
  /* align-items: center; */
  /* justify-content: space-between; */
  >nav{
    max-height: 90%;
    overflow-y: auto;
    margin-top: 36px;
    padding-right: 40px;

    /* display: flex;
    flex-direction: column;
    gap: 36px; */

  }
`

export const Main = () => {
  const { mobileBreakPoint } = useContext(GlobalContext)

  return(
    <Container bp={mobileBreakPoint}>
      <ConfigureScreen/>
      <nav id="navContainer">
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </nav>
    </Container>
  )
}