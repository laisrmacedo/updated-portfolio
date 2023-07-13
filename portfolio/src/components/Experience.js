import { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext"
import experiences from "../utils/experience.json"
import skills from "../utils/skills.json"


const Container = styled.section`
  gap: 36px;
  >div{
    display: flex;

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
    }

  .skill{
    background: #5671858a;
    font-variant: all-small-caps;
    padding: 2px 12px;
    border-radius: 12px;
    font-size: 14px;
    color: #C4C7AC;
  }

  .allSkills{
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #50677A;
    padding: 16px;
    margin-top: 20px;
    border-radius: 12px;
    
    h3{
      font-size: 12px;
    }
    div{
      display: flex;
      justify-content: space-between;
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
        transform: ${(props) => (props.openContainer ? 'none' : 'rotate(45deg)')};
        transition: transform .3s ease-in-out;
        p{
          position: absolute;
          z-index: 2;
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
  }
  #skillsContainer{
    display: ${(props) => (props.openContainer ? 'flex' : 'none')};
  }
`

export const Experience = () => {
  const { language } = useContext(GlobalContext)
  const [openContainer, setOpenContainer] = useState(false)

  return(
    <Container openContainer={openContainer}>
      {experiences.map((i, index) => {
        return(
          <div key={index}>
            <p>{language === '/pt' ? i.timePT : i.timeEN}</p>
            <div className="info">
              <span>
                <h3>{language === '/pt' ? i.titlePT : i.titleEN}</h3>&bull;<p>{i.company}</p>
              </span>
              <p>{language === '/pt' ? i.descriptionPT : i.descriptionEN}</p>
              <span>
                {i.skills.map((skill, i) => <p key={i} className="skill">{skill}</p>)}
              </span>
            </div>
          </div>
        )
      })}
      <div className="allSkills">
        <div onClick={() => setOpenContainer(!openContainer)}>
          <h3>{language === '/pt' ? "Minhas Habilidades" : "All Skills"}</h3>
          <span id="rotateBtn">
            <p style={{transform: 'rotate(45deg)'}}>|</p>
            <p style={{transform: 'rotate(-45deg)'}}>|</p>
          </span>
        </div>
        <span id="skillsContainer">
          {language === '/pt' ? 
            skills.pt.map((skill, i) => <p key={i} className="skill">{skill}</p>)
          : skills.en.map((skill, i) => <p key={i} className="skill">{skill}</p>)}
        </span>
      </div>
    </Container>
  )
}