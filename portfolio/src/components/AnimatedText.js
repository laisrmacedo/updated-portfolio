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
  /* border: 5px solid red; */
  
.scrolling-text {
  z-index: 0;
  font-size: 18px;
  position: absolute;
  top: 200%;
  animation: scrollText 15s linear infinite;
}

@keyframes scrollText {
  0% {
    top: 100%;
  }
  100% {
    top: -200%;
  }
}
`


export const AnimatedText = () => {
  return(
    <Container>
      <div class="scrolling-text">
        <SimulatedCode/>
      </div>
    </Container>
  )
}