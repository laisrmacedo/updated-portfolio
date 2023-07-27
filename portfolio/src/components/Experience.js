import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext"
import experiences from "../utils/experience.json"
import skills from "../utils/skills.json"
import { useScrollObserver } from "../hooks/useScrollObserver";


const Container = styled.section`
  gap: 36px;

  >h3{
    display: none;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      display: flex;
    }
  }
  .experience-box{
    display: flex;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
    border-radius: 12px;
    margin: 10px;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      flex-direction: column;
      gap: 20px;
    }

    >p{
      font-size: 11px;
      min-width: 110px;
    }
  }

  span{
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .info{
      display: flex;
      flex-direction: column;
      gap: 12px;
      a{
        font-weight: 100;
      }
    }

  .allSkills{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #7CA1BF6a;
    padding: 16px;
    margin: 20px 10px 0 10px;
    border-radius: 12px;
    
    h3{
      font-size: 12px;
      margin: 0;
    }
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow-y: hidden;
      cursor: pointer;
      height: 10%;
      
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 18px;
        height: 18px;
        overflow-y: hidden;
        transform: ${(props) => (props.open ? 'none' : 'rotate(45deg)')};
        transition: transform .3s ease-in-out;
        p{
          position: absolute;
          z-index: 2;
          font-size: 12px;
          line-height: 12px;
          font-weight: 400;
        }
      }
    }
  }
  #skillsContainer{
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`

export const Experience = () => {
  const { language, defaultLanguage, mobileBreakPoint } = useContext(GlobalContext)
  const [openDiv, setOpenDiv] = useState(false)

  const targetRef = useRef(null);
  useScrollObserver(targetRef);

  return(
    <Container id="experience" open={openDiv} bp={mobileBreakPoint} ref={targetRef}>
      <h3>{language === defaultLanguage ? 'Experiência' : 'Experience'}</h3>
      {experiences.map((i, index) => {
        return(
          <div className="experience-box" key={index}>
            <p>{language === defaultLanguage ? i.timePT : i.timeEN}</p>
            <div className="info">
              <span>
                <h3>{language === defaultLanguage ? i.titlePT : i.titleEN}</h3>
                &bull;
                <p><a href={i.link}>{language === defaultLanguage ? i.subtitlePT : i.subtitleEN}</a></p>
              </span>
              <p>{language === defaultLanguage ? i.descriptionPT : i.descriptionEN}</p>
              <span>
                {language === defaultLanguage ?  
                  i.skillsPT.map((skill, i) => <p key={i} className="skill">{skill}</p>)
                  : 
                  i.skillsEN.map((skill, i) => <p key={i} className="skill">{skill}</p>)
                }
              </span>
            </div>
          </div>
        )
      })}
      <div className="allSkills">
        <div onClick={() => setOpenDiv(!openDiv)}>
          <h3>{language === defaultLanguage ? "Habilidades" : "All Skills"}</h3>
          <span id="rotateBtn">
            <p style={{transform: 'rotate(45deg)'}}>|</p>
            <p style={{transform: 'rotate(-45deg)'}}>|</p>
          </span>
        </div>
        <span id="skillsContainer">
          {language === defaultLanguage ? 
            skills.pt.map((skill, i) => <p key={i} className="skill">{skill}</p>)
          : skills.en.map((skill, i) => <p key={i} className="skill">{skill}</p>)}
        </span>
      </div>
    </Container>
  )
}