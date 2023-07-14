import styled from "styled-components";
import { ConfigureScreen } from "./ConfigureScreen";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

const Container = styled.main`
  width: 60%;
  padding: 40px 0 0 0;
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
  return(
    <Container>
      <ConfigureScreen/>
      <nav id="navContainer">
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </nav>
    </Container>
  )
}