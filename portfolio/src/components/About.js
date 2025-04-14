import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import myself from "../assets/myself2.jpg";
import { GlobalContext } from "../context/GlobalContext"
import { useScrollObserver } from "../hooks/useScrollObserver";
import { Recommendation } from "./Recommendation";


const Container = styled.section`
  gap: 20px;
  position: relative;

  >div{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 16px;
    h3{
      display: none;
      @media screen and (max-width: ${(props) => (props.bp + 'px')}){
        display: flex;
        margin-right: auto;
      }
    }
  }
  aside{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
      font-weight: 700;
      font-size: 20px;
    }
    a{
      text-transform: uppercase;
      font-size: 14px;
    }
  }

  span{
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
    text-align: justify;
  }  
`

const PhotoBox = styled.span`
  figure{
    float: left;
    width: 94px;
    height: 135px;
    border-radius: 12px;
    margin-right: 16px;
    margin-top: 4px;
    img{
      object-fit: cover;
      height: 120%;
      width: 100%;
    }
  }
`

export const About = () => {
  const [textSize, setTextSize] = useState(0)
  const { language, defaultLanguage, mobileBreakPoint } = useContext(GlobalContext)

  const targetRef = useRef(null);
  useScrollObserver(targetRef);

  return(
    <Container id="about" bp={mobileBreakPoint} ref={targetRef}>
      <div>
        <h3>{language === defaultLanguage ? 'Sobre mim' : 'About'}</h3>
        <button onClick={() => setTextSize(0)} className="smallBtn">{language === '/pt'? 'Curto' : 'Short'}</button>
        <button onClick={() => setTextSize(1)} className="smallBtn">{language === '/pt'? 'Longo' : 'Long'}</button>
      </div>
      {language === '/pt' ?
        (textSize === 0 ? 
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>Sou Desenvolvedora Frontend em constante evolução. Nesse período, desenvolvi habilidades técnicas com foco em React, JavaScript, CSS, Node.js, Angular, TypeScript, e CSS. Tenho diversos projetos autorais, incluindo o Convite de Casamento, uma aplicação web full stack que já foi utilizada com sucesso na organização de dois casamentos, sendo bem avaliada pelos usuários. Sou formada em Engenharia Civil pela UFCG, graduação que contribuiu para o desenvolvimento de competências como resolução de problemas, atenção aos detalhes, gerenciamento de tempo, pensamento lógico e analítico, trabalho em equipe, comunicação eficaz e criatividade.
          </span>
        </PhotoBox>
        :
        <>
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>Sou Desenvolvedora Frontend em constante evolução. Nesse processo, destaco a minha dedicação no curso de Programação Web Full Stack Integral da Labenu, onde desenvolvi habilidades técnicas de frontend e backend. Entre elas estão React, CSS, JavaScript, Api Restful, HTTP, Jest, Node.JS, TypeScript, SQL, Git, Github, Testes unitários e UI Design, além de mais de 1000 horas de experiência prática, guiadas por metodologias ágeis. 
          </span>
        </PhotoBox>
        
        <p>Atualmente, faço parte da equipe Global Hitss/Claro Brasil como desenvolvedora frontend. Em resumo, atuo no desenvolvimento e manutenção de interfaces web responsivas utilizando Angular. Sou responsável por implementar componentes reutilizáveis, consumir APIs REST, aplicar boas práticas de versionamento com Git e garantir a qualidade visual e funcional das aplicações com foco na experiência do usuário.
        </p>
        
        <p>Até então, tenho vários projetos pessoais desenvolvidos. Um deles é o Wedding Invitation, uma aplicação web full stack, autoral e que é utilizada em situações reais para facilitar a organização da lista de convidados de casamentos. Nesse projeto, são utilizadas tecnologias como React, Styled-Components, React Router, Axios e integração de API, além de NodeJS, Typescript, Express e PostgreSQL.</p>

        <p>Sou graduada em Engenharia Civil, área de estudo que me identifiquei durante grande parte da minha vida. Isso porque tenho grande interesse pelas ciências exatas, pela solução de problemas e pelo processo de construção e materialização de ideais. Durante e após a graduação, tive várias oportunidades de aprender mais sobre o trabalho em equipe, a comunicação eficiente, o pensamento crítico e criativo, além de desenvolver a inteligência emocional e a resiliência.</p>

        <p>Em 2021 decidi iniciar a transição de carreira para a Programação e, hoje, estou dedicada exclusivamente aos estudos sobre o Desenvolvimento Web. A decisão foi baseada na percepção de que esta área de estudo poderia ser mais adaptável à determinadas mudanças recentes na minha vida pessoal. Além disso, encontrei na Programação um novo universo de possibilidades, um espaço convidativo onde ao mesmo tempo que me sinto confortável, sinto também o empolgante incômodo do novo e enorme desafio a ser enfrentado. Felizmente, este ambiente desconhecido e intimidador está se tornando progressivamente familiar.</p>
        </>
        )
        :
        (textSize === 0 ? 
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>I am a Frontend Developer in continuous growth. During this journey, I have developed technical skills focused on React, JavaScript, CSS, Node.js, Angular, TypeScript, and SCSS. I have several personal projects, including Convite de Casamento, a full stack web application that has been successfully used in organizing two weddings and received positive feedback from users. I hold a degree in Civil Engineering from UFCG, a background that helped me develop skills such as problem-solving, attention to detail, time management, logical and analytical thinking, teamwork, effective communication, and creativity.</span>
        </PhotoBox>
        :
        <>
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>I am a Frontend Developer in continuous growth. Throughout this journey, I highlight my dedication to the Full Stack Web Development Immersive Program at Labenu, where I developed technical skills in both frontend and backend. These include React, CSS, JavaScript, RESTful APIs, HTTP, Jest, Node.js, TypeScript, SQL, Git, GitHub, Unit Testing, and UI Design, along with over 1000 hours of hands-on experience guided by agile methodologies.</span>
        </PhotoBox>

        <p>Currently, I am part of the Global Hitss/Claro Brasil team as a Frontend Developer. In summary, I work on the development and maintenance of responsive web interfaces using Angular. I am responsible for implementing reusable components, consuming REST APIs, applying best practices in version control with Git, and ensuring the visual and functional quality of the applications with a focus on user experience.</p>

        <p>To date, I have developed several personal projects. One of them is Wedding Invitation, a full-stack, authored web application that is used in real-life situations to facilitate the organization of wedding guest lists. This project uses technologies such as React, Styled-Components, React Router, Axios and API integration, as well as NodeJS, Typescript, Express and PostgreSQL. </p>

        <p>I have a degree in Civil Engineering, a field of study that I have identified with for most of my life. This is because I have a great interest in the exact sciences, problem-solving and the process of building and materializing ideals. During and after graduation, I had several opportunities to learn more about teamwork, effective communication, critical and creative thinking, as well as developing emotional intelligence and resilience. </p>

        <p>In 2021, I decided to start the career transition to Programming and, today, I am dedicated exclusively to studying Web Development. The decision was based on the realization that this area of study could be more adaptable to certain recent changes in my personal life. What's more, I found in Programming a new universe of possibilities, an inviting space where, at the same time as feeling comfortable, I also felt the exciting discomfort of the new and enormous challenge to be faced. Fortunately, this unfamiliar and intimidating environment is becoming progressively familiar. </p>
        </>
        )
      }
      {/* <aside>
        {language === defaultLanguage ? 
        <>
          <h4 className="degrade">#buscandoEmprego</h4>
          <a href="https://drive.google.com/file/d/1JZn5Z5vKZtX6MF-pXAt3xyv7Jz7aoBa_/view?usp=sharing" target="_blank">Currículo 📄</a>
        </>
        :
        <>
          <h4 className="degrade">#openToWork</h4>
          <a href="https://drive.google.com/file/d/1QHhCD98djfXezrVHhlZNsHE14eqZ4Nxk/view?usp=sharing" target="_blank">View full CV 📄</a>
        </>
        }
      </aside> */}
      <Recommendation/>
    </Container>
  )
}
