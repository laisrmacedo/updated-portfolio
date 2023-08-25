import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import recommendations from "../utils/recommendation.json"
import { CardCarousel } from "./CardCarousel";

const Container = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  margin-top: 30px;
  border-radius: 12px;
  
  .title{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      justify-content: center;
    }
  }
  #card{
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    max-width: 100%;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    h4{
      margin-top: 20px;
    }
    h5{
      font-size: 8px;
      text-transform: uppercase;
      font-weight: 100;
    }
  }
  
  .circles-area{
    width: calc(12px * 3 + 20px * 2);
    height: 12px;
    display: flex;
    justify-content: center;
    gap: 20px;
    > div{
      /* border: 1px solid red; */
      height: 100%;
      width: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      margin-top: 20px;
    }
  }

  .currentCircle{
    background-color: #5A8279;
    height: 10px;
    min-width: 10px;
    cursor: pointer;
  }
  .othersCircles{
    border: 1px solid #5A8279;
    height: 10px;
    min-width: 10px;
    cursor: pointer;
  }
`

export const Recommendation = () => {
  const { language, defaultLanguage, mobileBreakPoint } = useContext(GlobalContext)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Container className="recommendationBackground" bp={mobileBreakPoint}>
      <div className="title">
        <h2>{language === defaultLanguage ? "Disseram sobre mim" : "They said about me"}</h2>
        <h2></h2>
        <div className="circles-area">
          {recommendations.map((i) => {
            return (
              <div key={i.id} onClick={() => setCurrentIndex(i.id)} className={currentIndex === i.id ? "currentCircle" : "othersCircles"}></div>
            )
          })}
        </div>
      </div>
      <CardCarousel items={recommendations} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        <div id="card">
          <p>{language === defaultLanguage ? recommendations[currentIndex].textPT : recommendations[currentIndex].textEN}</p>
          <a href={recommendations[currentIndex].linkedin} target="_blank">
            <h4>{recommendations[currentIndex].name}</h4>
          </a>
          <p>{language === defaultLanguage ? recommendations[currentIndex].descriptionPT : recommendations[currentIndex].descriptionEN}</p>
          <h5>{language === defaultLanguage ? "Recomendação no LinkedIn" : "LinkedIn recommendation"}</h5>
        </div>
      </CardCarousel>
    </Container>
  )
}
