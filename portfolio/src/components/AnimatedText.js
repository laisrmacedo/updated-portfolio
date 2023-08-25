import styled from "styled-components";
import { SimulatedCode } from "./SimilatedCode";

const Container = styled.div`
  width: clamp(500px, 35%, 880px);
  height: 40%;
  max-height: 600px;
  overflow: hidden;
  position: absolute;
  top: min(14%, 14vh);
  z-index: 1;
  margin: 20px;
  border-radius: 12px;
  
.scrolling-text {
  z-index: 0;
  position: absolute;
  top: 100%;
  animation: scrollText 8s linear infinite;
}

@keyframes scrollText {
  0% {
    top: 0%;
  }
  100% {
    top: -100%;
  }
}
`


export const AnimatedText = () => {
  return(
    <Container>
      <div className="scrolling-text">
        <SimulatedCode/>
        <SimulatedCode/>
        <SimulatedCode/>
        <SimulatedCode/>
      </div>
    </Container>
  )
}