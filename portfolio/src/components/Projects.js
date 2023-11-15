import styled from "styled-components";
import projects from "../utils/projects.json"
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useRef } from "react";
import { useScrollObserver } from "../hooks/useScrollObserver";
// import 

const Container = styled.section`
  width: 100%;
  gap: 36px;
  
  >h3{
    display: none;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      display: flex;
    }
  }

  >div{
    position: relative;
    display: flex;
    max-width: 100%;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
    margin: 10px;
    /* border: 1px solid red; */
  }
  
  .project-logo{
    min-height: 100%;
    max-width: 110px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    background-color: transparent;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      display: none;
    }
    img{
      /* height: 100%; */
      width: 100%;
      opacity: 0.6;
    }
  }
  
  .container-info-project{

    display: flex;
    flex-direction: column;
    gap: 12px;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      /* margin: 10px;
      padding: 20px 30px; */
      width: 100%;
    }
    
    >span{
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
  }
  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    p{
      text-transform: uppercase;
      font-size: 10px;
    }
    span{
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      h5{
        transform: rotate(45deg);
        a{
          font-size: 16px;
          &:hover{
            font-size: 18px;
            transition: font-size .3s ease-in-out;
          }
        }
      }
    }
  }
`
export const Projects = () => {
  const { language, defaultLanguage, mobileBreakPoint } = useContext(GlobalContext)
  
  const targetRef = useRef(null);
  useScrollObserver(targetRef);
  

  // fetch('https://api.github.com/users/laisrmacedo/repos')
  // .then(response => response.json())
  // .then(data => {
  //   // Manipular os dados retornados pela API
  //   console.log(data);
  // })
  // .catch(error => {
  //   // Tratar erros
  //   console.error('Erro:', error);
  // });
  return(
    <Container id="projects" bp={mobileBreakPoint} ref={targetRef}>
      {/* {console.log(isVisible)} */}
      <h3>{language === defaultLanguage ? 'Projetos' : 'Projects'}</h3>
      {projects.map((project, i) => {
        return(
          <div key={i}>
            <span className="project-logo">
              <img src={project.image}/>
            </span>
            <div className="container-info-project">
              <div className="title">
                <span>
                  <h3><a href={project.deploy}>{language === defaultLanguage?  project.titlePT : project.titleEN}</a></h3>&bull;<p>{project.category}</p>
                </span>
                <span>
                  <h5><a href={project.deploy} target="_blank">&uarr;</a></h5>
                  <a href={project.repository} target="_blank">&#128193;</a>
                </span>
              </div>
              <p>{language === defaultLanguage?  project.descriptionPT : project.descriptionEN}</p>
              <span>
                {project.tools.map((skill, i) => <p key={i} className="skill">{skill}</p>)}
              </span>
            </div>
          </div>
        )
      }).reverse()}
    </Container>
  )
}