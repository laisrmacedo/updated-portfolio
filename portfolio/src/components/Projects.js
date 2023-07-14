import styled from "styled-components";
import projects from "../utils/projects.json"
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Container = styled.section`
  width: 100%;
  gap: 20px;

  >div{
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    /* border: 1px solid blue; */
    >div{
      padding: 10px;
      height: 100%;
      width: 90%;
    }
  }
  
  .project-logo{
    height: 100%;
    width: 80px;
    position: absolute;
    z-index: 2;
    overflow-y: hidden;
    background-color: transparent;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      display: none;
    }
    img{
      object-fit: contain;
      height: 100%;
      width: 100%;
      opacity: 0.6;
    }
  }
  
  .container-info-project{
    padding: 20px 40px 20px 60px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 40px;
    gap: 12px;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      margin: 10px;
      padding: 20px 30px;
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
      a{
        text-decoration: none;
        font-size: 16px;
        &:hover{
          font-size: 18px;
          transition: font-size .3s ease-in-out;
        }
      }
      h5{
        transform: rotate(45deg);
      }
    }
  }
`
export const Projects = () => {
  const { language, defaultLanguage, mobileBreakPoint } = useContext(GlobalContext)
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
    <Container id="projects" bp={mobileBreakPoint}>
      {projects.map((project, i) => {
        return(
          <div key={i}>
            <span className="project-logo">
              <img src={project.image}/>
            </span>
            <div className="container-info-project">
              <div className="title">
                <span>
                  <h3>{language === defaultLanguage?  project.titlePT : project.titleEN}</h3>&bull;<p>{project.category}</p>
                </span>
                <span>
                  <h5><a href={project.deploy}>&uarr;</a></h5>
                  <a href={project.repository}>&#128193;</a>
                </span>
              </div>
              <p>{language === defaultLanguage?  project.descriptionPT : project.descriptionEN}</p>
              <span>
                {project.tools.map((skill, i) => <p key={i} className="skill">{skill}</p>)}
              </span>
            </div>
          </div>
        )
      })}
    </Container>
  )
}