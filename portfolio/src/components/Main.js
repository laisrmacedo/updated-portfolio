import styled from "styled-components";
import { ConfigureScreen } from "./ConfigureScreen";
import { About } from "./About";

const Container = styled.main`
  width: 60%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  gap: 36px;
  padding: 40px;
`

export const Main = () => {
  return(
    <Container>
      <ConfigureScreen/>
      <About></About>
    </Container>
  )
}