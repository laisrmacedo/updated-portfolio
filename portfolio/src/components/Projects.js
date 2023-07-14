import styled from "styled-components";
import projects from "../utils/projects.json"
import labenu from "../assets/labenu.png"
import api from "../assets/api.png"
const Container = styled.section`
  width: 100%;
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
    @media screen and (max-width: 481px){
      width: 100%;
    }
    img{
      object-fit: contain;
      height: 100%;
      width: 100%;
      opacity: 0.7;
    }
  }
  
  .title{
    padding: 20px 40px 20px 60px;
    /* border: 1px solid #7CA1BF6a; */
     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    margin: 10px 0 10px 40px;
    gap: 12px;
    span{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
export const Projects = () => {
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
    <Container>
      {projects.map((project) => {
        return(
          <div>
          <span className="project-logo">
            <img src={project.image}/>
          </span>
            <div className="title">
              <span>
                <h3>{project.titleEN}</h3>
              </span>
              <p>{project.descriptionEN}</p>
            </div>
        </div>
        )
      })}
    </Container>
  )
}